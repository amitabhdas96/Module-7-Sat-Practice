import { BasicNav, NewTodoForm } from "./components";
import { usestate } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <BasicNav></BasicNav>
      <NewTodoForm></NewTodoForm>

      <h2>todo items</h2>
      {todos.map((todo) => {
        <></>;
      })}
    </>
  );
}
export default App;
