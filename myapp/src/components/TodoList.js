import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            setTodos={setTodos}
            todo={todo}
            todos={todos}
          ></Todo>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
