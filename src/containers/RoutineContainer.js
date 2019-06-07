import React, { Component } from "react";
import RoutineBlock from "../components/RoutineBlock";
import { connect } from "react-redux";
import { fetchRoutines } from "../redux/actions/routinesActions";

class RoutineContainer extends Component {
  componentDidMount() {
    this.props.fetchRoutines();
  }
  displayRoutines() {
    console.log(this.props.routines);
    return this.props.routines.map(r => <RoutineBlock routine={r} />);
  }
  render() {
    return <div>{this.displayRoutines()}</div>;
  }
}
function mapState(state) {
  return { routines: state.routines };
}
function mapDispatch(dispatch) {
  return { fetchRoutines: () => dispatch(fetchRoutines()) };
}

export default connect(
  mapState,
  mapDispatch,
)(RoutineContainer);
