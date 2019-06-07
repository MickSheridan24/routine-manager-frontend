function fetchRoutines() {
  return async dispatch => {
    const request = await fetch("http://localhost:3002/routines", {
      headers: { "Content-Type": "Application/json" },
    });
    const routines = await request.json();

    dispatch({ type: "SET_ROUTINES", routines: routines });
  };
}

function submitRoutine(args) {
  return async dispatch => {
    const request = await fetch("http://localhost:3002/routines", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(args),
    });
    const success = await request.json();
    console.log(success);
  };
}

function deleteRoutine(id) {
  return async dispatch => {
    console.log("deleting ", id);
    const request = await fetch(`http://localhost:3002/routines/${id}`, {
      method: "DELETE",
      headers: {},
    });
    const success = await request.json();
    console.log(success);
  };
}

export { fetchRoutines, submitRoutine, deleteRoutine };
