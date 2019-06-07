function fetchRoutines() {
  console.log("Action");

  return async dispatch => {
    const request = await fetch("http://localhost:3002/routines", {
      headers: { "Content-Type": "Application/json" },
    });
    const routines = await request.json();

    dispatch({ type: "SET_ROUTINES", routines: routines });
  };
}

export { fetchRoutines };
