import React from "react";
import { useState } from "react";
const Todo = (props) => {
  const [line, setLine] = useState("none");
  const delTodo = () => {
    props.todos(props.title);
  };
  return (
    <div className="todo">
      <div style={{ textDecoration: `${line}` }}>{props.title}</div>
      <input
        type="checkbox"
        onClick={(e) => {
          if (e.target.checked) {
            setLine("line-through");
          } else {
            setLine("none");
          }
        }}
      ></input>
      <button onClick={delTodo}>del</button>
    </div>
  );
};

export default Todo;
