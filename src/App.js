import React from "react";
import "./App.css";
import RoutineContainer from "./containers/RoutineContainer";
import RoutineForm from "./components/RoutineForm";
import UserSignUp from "./components/UserSignUp";
import UserLogin from "./components/UserLogin";

function App() {
  return (
    <div>
      <RoutineContainer />
      <br />
      <RoutineForm />
      <UserSignUp />
      <br />
      <UserLogin />
    </div>
  );
}

export default App;
