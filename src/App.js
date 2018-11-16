import React, { Component } from "react";
import Form from "./components/Form/Form";
import LeaderboardTable from "./components/LeaderboardTable/LeaderboardTable";
import "./App.css";

class App extends Component {
  state = {
    golfers: [],
    editIdx: -1
  };

  // delete the golfer row
  handleRemove = i => {
    this.setState(state => ({
      golfers: state.golfers.filter((row, j) => j !== i)
    }));
  };

  // toggle editing
  startEditing = i => {
    this.setState({ editIdx: i });
  };

  // toggle editing
  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  // update state as a golfer row is edited  
  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      golfers: state.golfers.map((row, j) =>
        j === i ? { ...row, [name]: value } : row
      )
    }));
  };

  render() {
    // create a copy of golphers state to work with
    const golfersData = this.state.golfers;

    return (
      <div className="App">
        <h1>PGA Applicant Test - Leaderboard</h1>
        {/* Entry Form Component */}
        <Form
          onSubmit={submission =>
            this.setState({
              golfers: [...this.state.golfers, submission]
            })
          }
        />
        {/* Table for displaying Leaderboard */}
        <LeaderboardTable
          handleRemove={this.handleRemove}
          startEditing={this.startEditing}
          editIdx={this.state.editIdx}
          stopEditing={this.stopEditing}
          handleChange={this.handleChange}
          data={golfersData}
          header={[
            {
              name: "Name",
              prop: "Name"
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
