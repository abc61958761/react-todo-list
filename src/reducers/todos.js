const todo = (state = {}, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        title: action.title,
        deadline: action.deadline,
        completed: false,
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed,
      });

    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
};

export default todos;
