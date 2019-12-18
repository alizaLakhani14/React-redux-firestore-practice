import React, { Component } from "react";
import Goals from "./Goals";
import AddGoal from "./AddGoal";

class Home extends Component {
  state = {
    goals: []
  };

// Function created to update state before redux
  // addGoal = state => {
  //   state.id = Math.random() * 100000;
  //   this.setState({
  //     goals: [...this.state.goals, state]
  //   });
  // };

  render() {
    return (
      <div>
        <AddGoal addGoal={this.addGoal} />
        <Goals goals={this.state.goals} />
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
