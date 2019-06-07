import React, { useState } from "react";

export default function RoutineForm() {
  const [what, setWhat] = useState("");
  const [why, setWhy] = useState("");
  const [how, setHow] = useState("");
  const [interval, setInterval] = useState("1");

  const handleSubmit = e => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>What</label>
        <input value={what} onChange={e => setWhat(e.target.value)} />
        <label>Why</label>
        <input value={why} onChange={e => setWhy(e.target.value)} />
        <label>How</label>
        <input value={how} onChange={e => setHow(e.target.value)} />
        <label>Interval</label>
        <input value={interval} onChange={e => setInterval(e.target.value)} />
      </form>{" "}
    </div>
  );
}
