import React, { Component } from "react";
import { connect } from "react-redux";
import {createGoalAction} from "./../actions/createGoal";

class AddGoal extends Component {
  state = {
    goal: ""
  };

  handleChange = e => {
    this.setState({
      goal: e.target.value
    });
  };

  getGoal = e => {
    e.preventDefault();
    if (this.state.goal !== "") {
      this.props.createGoal(this.state);
    }

    this.setState({
      goal: ""
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.getGoal}>
          <label style={{ margin: "1em" }}>ADD GOAL</label>
          <input
            type="text"
            style={{ padding: "5px" }}
            value={this.state.goal}
            onChange={this.handleChange}
          ></input>
          <button
            style={{ margin: "1em" }}
            type="submit"
            onClick={this.getGoal}
          >
            Add Goal
          </button>
        </form>
      </div>
    );
  }
}

// Dispatch ka function bana k props mai bhej dega. us function mai current state pas karke action fire karsakte hain. 

const mapDispatchToProps = dispatch => {
  return {
    createGoal: g => {
      // console.log('dispatched', goal)
      dispatch(createGoalAction(g));
    }
  };
};

export default connect(null, mapDispatchToProps)(AddGoal);
