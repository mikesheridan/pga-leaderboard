import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    score: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  formHandler = event => {
    // kill the normal form submission
    event.preventDefault();

    // // create a random actionID to tag the entry for deltion/edit
    // const randomActionID = Math.random().toString(36).substring(4);
    // this.setState({
    //     actionID: randomActionID
    // });
    // console.log(this.state);

    // pass the form data back to app.js
    this.props.onSubmit(this.state);

    // clear the form fields
    this.setState({
      firstName: "",
      lastName: "",
      score: ""
    });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.formHandler}>
          <div>
            <TextField
              id="standard-name"
              label="First Name"
              className=""
              value={this.state.firstName}
              onChange={this.handleChange("firstName")}
              margin="normal"
              style={{ marginRight: 1 + "rem" }}
            />
            <TextField
              id="standard-name"
              label="Last Name"
              className=""
              value={this.state.lastName}
              onChange={this.handleChange("lastName")}
              margin="normal"
              style={{ marginRight: 1 + "rem" }}
            />
            <TextField
              id="standard-name"
              label="Score"
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
      </React.Fragment>
    );
  }
}

export default Form;
