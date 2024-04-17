// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  // const [count, setCount] = useState(0);
  let myObj = {
    username: "Meraki",
    age: 899,
    address: {
      city: "cyber space",
      state: "terminal state",
      country: "unity of Secresisa",
    },
  };

  let newArr = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with tailwind
      </h1>
      <Card username="meraki" post="Engineer" myArr={newArr} />
      <Card />
    </>
  );
}

export default App;
