import React, { useContext } from "react";
import { Context } from "../store/store";
const connect = (mapStateToProps, mapDispatchToProps) => {
  return Component => {
    return props => {
      const { store, dispatch } = useContext(Context);

      const stateToProps = mapStateToProps && mapStateToProps(store);
      const dispatchToProps =
        mapDispatchToProps && mapDispatchToProps(dispatch);
      const updatedProps = { ...props, ...stateToProps, ...dispatchToProps };

      return <Component {...updatedProps} />;
    };
  };
};

export default connect;
