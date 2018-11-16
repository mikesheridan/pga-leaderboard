import React, { Component } from "react";
import Form from "./components/Form/Form";
import LeaderboardTable from "./components/LeaderboardTable/LeaderboardTable";
import "./App.css";

class App extends Component {
  state = {
    golfers: []
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
