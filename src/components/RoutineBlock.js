import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteRoutine } from "../redux/actions/routinesActions";

class RoutineBlock extends Component {
  handleDelete = () => {
    this.props.deleteRoutine(this.props.routine.id);
  };
  render() {
    return (
      <div>
        <div>{this.props.routine.what}</div>
        <button onClick={this.handleDelete}>DELETE</button>
      </div>
    );
  }
}

function mapDispatch(dispatch) {
  return { deleteRoutine: id => dispatch(deleteRoutine(id)) };
}
export default connect(
  null,
  mapDispatch,
)(RoutineBlock);
