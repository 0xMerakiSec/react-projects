import { useState } from "react";

import "./App.css";

function App() {
  // let counter = 15;
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    //upoun above counter is only incremented once on running the same method three times
    setCounter((prevalue) => prevalue + 1);
    setCounter((prevalue) => prevalue + 1);
    setCounter((prevalue) => prevalue + 1);
    // here the counter is incremented thrice upon running the method thrice.
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React Project</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer: </p>
    </>
  );
}

export default App;
