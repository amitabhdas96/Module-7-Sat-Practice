import { BasicNav, NewTodoForm } from "./components";
import { useState } from "react";
import TodoItem from "./components/TodoItem";
import { useTodoContext } from './context/TodoContext';

function App() {
  const {todos} = useTodoContext();

  return (
    <>
      <BasicNav></BasicNav>
      <NewTodoForm></NewTodoForm>

      <h2>todo items</h2>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo}></TodoItem>
      ))}
    </>
  );
}
export default App;
