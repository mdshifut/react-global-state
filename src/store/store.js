import React from "react";

export const RESET = "RESET";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const initialState = { count: 0 };

export const reducer = (state, action) => {
  switch (action.type) {
    case RESET:
      return { ...state, count: 0 };
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export const Context = React.createContext();
