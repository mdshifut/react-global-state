import React from "react";
import connect from "../HOC/connect";
import { INCREMENT, DECREMENT } from "../store/store";
const Counter = props => {
  return (
    <div>
      <button onClick={props.increaseCount}>Increase</button>

      <button onClick={props.decreaseCount}>Decrease</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  increaseCount: () => dispatch({ type: INCREMENT }),
  decreaseCount: () => dispatch({ type: DECREMENT })
});

export default connect(
  null,
  mapDispatchToProps
)(Counter);
