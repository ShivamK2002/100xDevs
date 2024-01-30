import { useEffect, useMemo, useState } from "react";

function App() {
  return (
    <>
      <MyComp />
    </>
  );
}
function MyComp({}) {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  const [finalCount, setFinalCount] = useState(0);
  function clickHandler() {
    setCount(count + 1);
  }
  useEffect(() => {
    for (let i = 0; i <= input; i++) finalCount += i;

    setFinalCount(finalCount);
  }, [input]);
  // let sum = useMemo(() => {
  //   let val = 0;
  //   for (let i = 0; i <= input; i++) val += i;
  //   return val;
  // }, [input]);

  return (
    <div>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter number"
      />

      <h1>Sum is {finalCount}</h1>
      <button onClick={clickHandler}>Counter({count})</button>
    </div>
  );
}
export default App;
