import React from "react";
import logo from "./logo.svg";
import "./App.css";

import RoutineContainer from "./containers/RoutineContainer";
import RoutineForm from "./components/RoutineForm";

function App() {
  return (
    <div>
      <RoutineContainer />
      <br />
      <RoutineForm />
    </div>
  );
}

export default App;
