import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Form extends Component {
  state = {
    firstName: "",
    firstNameLabel: "First Name",
    lastName: "",
    lastNameLabel: "Last Name",
    score: "",
    scoreLabel: "Score"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  //Validate the form fields
  validate = () => {
    let isError = false;
    const errors = {
      firstNameError: false,
      lastNameError: false,
      scoreError: false,
      firstNameErrorText: "",
      lastNameErrorText: "",
      scoreErrorText: ""
    };

    if (this.state.firstName === "") {
      isError = true;
      errors.firstNameError = true;
      errors.firstNameLabel = "Please enter a first name.";
    }
    if (this.state.lastName === "") {
      isError = true;
      errors.lastNameError = true;
      errors.lastNameLabel = "Please enter a last name.";
    }

    if (isNaN(this.state.score) || this.state.score <= 0 || this.state.score >= 101) {     
        isError = true;
        errors.scoreError = true;
        errors.scoreLabel = "Score between 1 and 100";      
    }

    //  Special Case
    if(this.state.firstName === "Mike" && this.state.lastName === "Sheridan" && this.state.score <= 97) {
      isError = true;
      errors.scoreError = true;
      errors.scoreLabel = "Don't lie on your scorecard.";
    }
    // update local state with error statuses
    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  handleSubmit = event => {
    // kill the normal form submission
    event.preventDefault();
    // call validation
    const validationError = this.validate();

    // if no validation error proceed
    if (!validationError) {
      // pass the form data back to app.js
      this.props.onSubmit(this.state);

      // reset the form field state
      this.setState({
        firstName: "",
        lastName: "",
        score: "",
        firstNameError: false,
        lastNameError: false,
        scoreError: false,
        firstNameLabel: "First Name",
        lastNameLabel: "Last Name",
        scoreLabel: "Score"
      });
      
      // focus the First name field for easier data population
      document.getElementById("firstNameField").focus();
    }
  };

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField
              error={this.state.firstNameError}
              id="firstNameField"
              label={this.state.firstNameLabel}
              className=""
              value={this.state.firstName}
              onChange={this.handleChange("firstName")}
              margin="normal"
              style={{ marginRight: 1 + "rem" }}
            />
            <TextField
              error={this.state.lastNameError}
              id="lastNameField"
              label={this.state.lastNameLabel}
              className=""
              value={this.state.lastName}
              onChange={this.handleChange("lastName")}
              margin="normal"
              style={{ marginRight: 1 + "rem" }}
            />
            <TextField
              error={this.state.scoreError}
              id="scoreField"
              label={this.state.scoreLabel}
              className=""
              value={this.state.score}
              onChange={this.handleChange("score")}
              margin="normal"
              style={{ marginRight: 1 + "rem" }}
            />
          </div>
          <div>
            <Button type="submit" variant="contained" color="primary">
              Add Score
            </Button>
          </div>
        </form>
    );
  }
}

export default Form;
