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
    const status = await request.json();
    if (status.success) {
      dispatch({ type: "ADD_ROUTINE", routine: status.routine });
    } else {
      alert(status.message);
    }
  };
}

function deleteRoutine(id) {
  return async dispatch => {
    const request = await fetch(`http://localhost:3002/routines/${id}`, {
      method: "DELETE",
      headers: {},
    });
    const status = await request.json();
    if (status.success) {
      dispatch({ type: "DELETE_ROUTINE", routineId: id });
    } else {
      alert(status.message);
    }
  };
}

export { fetchRoutines, submitRoutine, deleteRoutine };
