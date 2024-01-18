import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { title: "task1", description: "First task", completed: true },
    { title: "task2", description: "Second task", completed: true },
    { title: "task3", description: "Third task", completed: false },
  ]);

  return <Click title={todos[0].title} description={todos[0].description} />;
}

function myFun(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
    </div>
  );
}
function Click(props) {
  return <button>Counter{todos}</button>;
}
export default App;
