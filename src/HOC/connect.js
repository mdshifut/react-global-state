import React, { useContext } from "react";
import { Context } from "../store/store";
const connect = (mapStateToProps, mapDispatchToProps) => {
  return Component => {
    return props => {
      const { state, dispatch } = useContext(Context);

      const stateToProps = mapStateToProps && mapStateToProps(state);
      const dispatchToProps =
        mapDispatchToProps && mapDispatchToProps(dispatch);
      const updatedProps = { ...props, ...stateToProps, ...dispatchToProps };

      return <Component {...updatedProps} />;
    };
  };
};

export default connect;
