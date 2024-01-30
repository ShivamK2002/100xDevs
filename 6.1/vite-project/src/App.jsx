import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
let counter = 4;

function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    alert({ counter });
  }, [counter]);
  function onClickHandler() {
    setCounter[counter + 1];
  }

  return (
    <>
      <button onClick={onClickHandler}>{counter}</button>
    </>
  );
}
export default App;
