import React, { useState } from "react";
import { submitRoutine } from "../redux/actions/routinesActions";
import { connect } from "react-redux";

function RoutineForm(props) {
  const [what, setWhat] = useState("");
  const [why, setWhy] = useState("");
  const [how, setHow] = useState("");
  const [interval, setInterval] = useState("1");

  const handleSubmit = e => {
    e.preventDefault();

    const args = { what, why, how, interval };
    props.submitRoutine(args);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>What</label>
        <input name="what" value={what} onChange={e => setWhat(e.target.value)} />
        <label>Why</label>
        <input name="why" value={why} onChange={e => setWhy(e.target.value)} />
        <label>How</label>
        <input name="how" value={how} onChange={e => setHow(e.target.value)} />
        <label>Interval</label>
        <input name="interval" value={interval} onChange={e => setInterval(e.target.value)} />
        <input type="submit" />
      </form>{" "}
    </div>
  );
}
function mapDispatch(dispatch) {
  return { submitRoutine: args => dispatch(submitRoutine(args)) };
}
export default connect(
  null,
  mapDispatch,
)(RoutineForm);
