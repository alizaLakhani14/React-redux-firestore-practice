export const createGoalAction = goal => {
  goal.id = Math.random() * 10000;
  return {
    type: "CREATE_GOAL",
    goal: goal
  };
};
