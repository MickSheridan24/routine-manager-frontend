function routinesReducer(state = [], action) {
  switch (action.type) {
    case "SET_ROUTINES":
      return action.routines;
    case "ADD_ROUTINE":
      return [...state, action.routine];
    default:
      return state;
  }
}
export default routinesReducer;
