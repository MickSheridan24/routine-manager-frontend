import React, { useState } from "react";
import { connect } from "react-redux";
import { postUser } from "../redux/actions/usersActions";

function UserSignUp(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitting", username, password);
    props.postUser({ username: username, password: password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input name="username" value={username} onChange={e => setUsername(e.target.value)} />
      <label>Password</label>
      <input name="password" value={password} type="password" onChange={e => setPassword(e.target.value)} />
      <input type="submit" />
    </form>
  );
}

function mapDispatch(dispatch) {
  return { postUser: args => dispatch(postUser(args)) };
}

export default connect(
  null,
  mapDispatch,
)(UserSignUp);
