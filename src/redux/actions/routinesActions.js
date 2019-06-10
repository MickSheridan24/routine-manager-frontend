function fetchRoutines() {
  return async dispatch => {
    if (localStorage.getItem("token")) {
      const request = await fetch("http://localhost:3002/routines", {
        headers: { "Content-Type": "Application/json", authorization: localStorage.getItem("token") || "" },
      });
      const status = await request.json();
      if (status.success) {
        dispatch({ type: "SET_ROUTINES", routines: status.routines });
      }
    }
  };
}

function submitRoutine(args) {
  return async dispatch => {
    if (localStorage.getItem("token")) {
      const request = await fetch("http://localhost:3002/routines", {
        method: "POST",
        headers: { "Content-Type": "Application/json", authorization: localStorage.getItem("token") || "" },
        body: JSON.stringify(args),
      });
      const status = await request.json();
      if (status.success) {
        dispatch({ type: "ADD_ROUTINE", routine: status.routine });
      } else {
        alert(status.message);
      }
    }
  };
}

function deleteRoutine(id) {
  return async dispatch => {
    if (localStorage.getItem("token")) {
      const request = await fetch(`http://localhost:3002/routines/${id}`, {
        method: "DELETE",
        headers: { authorization: localStorage.getItem("token") },
      });
      const status = await request.json();
      if (status.success) {
        dispatch({ type: "DELETE_ROUTINE", routineId: id });
      } else {
        alert(status.message);
      }
    }
  };
}

export { fetchRoutines, submitRoutine, deleteRoutine };
