function postUser(args) {
  return async dispatch => {
    console.log("args", args);
    const request = await fetch("http://localhost:3002/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(args),
    });
    const status = await request.json();
  };
}

function login(args) {
  return async dispatch => {
    const request = await fetch("http://localhost:3002/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(args),
    });
    const status = await request.json();
    debugger;
    console.log(status);
  };
}

export { postUser, login };
