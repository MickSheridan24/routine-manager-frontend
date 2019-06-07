import React, { Component } from "react";

export default class RoutineBlock extends Component {
  render() {
    return (
      <div>
        <div>{this.props.routine.what}</div>
      </div>
    );
  }
}
