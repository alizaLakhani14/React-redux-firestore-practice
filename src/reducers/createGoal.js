let goals = [
  { goal: "Read a book", id: 1 },
  { goal: "Eat Apple", id: 2 }
];

const createGoal = (state = goals, action) => {
  switch (action.type) {
    case "CREATE_GOAL":
      return [...state, action.goal];
    default:
      return state;
  }
};

export default createGoal;
