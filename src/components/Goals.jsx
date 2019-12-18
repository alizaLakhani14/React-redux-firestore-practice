import React from "react";
import { connect } from "react-redux";

const Goals = props => {
  console.log(props.goal);
  let goal;
  const style = {
    margin: "1em"
  };

  props.goal.length === 0
    ? (goal = <h3>You haven't set any goals</h3>)
    : (goal = props.goal.map(g => {
        return (
          <div
            key={g.id}
            style={{ border: "1px solid black", padding: "1em", margin: "1em" }}
          >
            {g.goal}
            <button style={style}>Edit</button>
            <button style={style}>Delete</button>
          </div>
        );
      }));

  return <div>{goal}</div>;
};
// State se goals utha k yeh props mai pass kardega. Phir props se hum asani se state use karsakte hain
const mapStateToProps = state => {
  return {
    goal: state.goals
  };
};

export default connect(mapStateToProps)(Goals);
