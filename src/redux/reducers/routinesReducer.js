function routinesReducer(state = [], action) {
  switch (action.type) {
    case "SET_ROUTINES":
      return action.routines;
    case "ADD_ROUTINE":
      return [...state, action.routine];
    case "DELETE_ROUTINE":
      return state.filter(r => r.id !== action.routineId);
    default:
      return state;
  }
}
export default routinesReducer;
