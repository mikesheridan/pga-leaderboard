import React, { Component } from "react";
import Form from "./components/Form/Form";
import LeaderboardTable from "./components/LeaderboardTable/LeaderboardTable";
import "./App.css";

class App extends Component {
  state = {
    golfers: [],
    editIdx: -1
  };

  handleRemove = i => {
    this.setState(state => ({
      golfers: state.golfers.filter((row, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      golfers: state.golfers.map(
        (row, j) => (j === i ? { ...row, [name]: value } : row)
      )
    }));
  };

  render() {
    const golfersData = this.state.golfers;

    return (
      <div className="App">
        <h1>PGA Applicant Test - Leaderboard</h1>
        <Form
          onSubmit={submission =>
            this.setState({
              golfers: [...this.state.golfers, submission]
            })
          }
        />
        <LeaderboardTable 
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIdx={this.state.editIdx}
            stopEditing={this.stopEditing}
            handleChange={this.handleChange}
          data={golfersData}
          header={[
            {
              name: "Last Name",
              prop: "lastName"
            },
            {
              name: "First Name",
              prop: "firstName"
            },
            {
              name: "Score",
              prop: "score"
            }
          ]}
        />
      </div>
    );
  }
}

export default App;
