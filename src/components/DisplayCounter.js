import React from "react";
import connect from "../HOC/connect";
const Counter = props => {
  return (
    <div>
      <h1>You have clicked {props.count} times</h1>
    </div>
  );
};

const mapStateToProps = state => ({ count: state.count });
export default connect(mapStateToProps)(Counter);
