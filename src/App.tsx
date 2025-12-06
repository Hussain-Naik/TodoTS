import { useState } from "react";
import TodoItems from "./components/TodoItems";
import { dummyData } from "./data/dummyData";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  const [todos, setTodos] = useState(dummyData);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function addTodo(title: string) {
    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false,
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  }

  return (
    <main className="py-10 h-screen">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-md mx-auto bg-slate-100 p-5">
        <AddTodoForm onSubmit={addTodo}/>
        <div>
          {todos.map((todo) => (
            <TodoItems
              key={todo.id}
              todo={todo}
              onCompleteChange={setTodoCompleted}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
