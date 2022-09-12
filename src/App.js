import "./App.css";
import { useState } from "react";
import Todo from "./components/Todo.js";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [thisTodo, setThisTodo] = useState("");
  const throwList = (delTodo) => {
    setTodoList(todoList.filter((todo) => todo != delTodo));
  };
  return (
    <div className="App">
      <div>todo List</div>
      <div className="input">
        <input
          type="text"
          onChange={(e) => {
            setThisTodo(e.target.value);
          }}
          placeholder="write todo!"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setTodoList([...todoList, e.target.value]);
              setThisTodo("");
            }
          }}
          value={thisTodo}
        />
        <button
          onClick={() => {
            setTodoList([...todoList, thisTodo]);
            setThisTodo("");
          }}
        >
          add
        </button>
      </div>
      <div>
        {todoList.map((todo) => {
          return <Todo title={todo} todos={throwList} />;
        })}
      </div>
    </div>
  );
}

export default App;
