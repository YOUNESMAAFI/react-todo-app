import React, { useState } from "react";
import "./App.css";
// components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Younes Todo App</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      ></Form>
      <TodoList setTodos={setTodos} todos={todos}></TodoList>
    </div>
  );
}

export default App;
