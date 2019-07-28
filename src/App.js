import React, { useReducer } from "react";
import { initialState, Context, reducer } from "./store/store";
import DisplayCounter from "./components/DisplayCounter";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ store, dispatch }}>
      <div className="App">
        <DisplayCounter />
        <Counter />
      </div>
    </Context.Provider>
  );
}

export default App;
