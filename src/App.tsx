import { useState } from "react";
import { dummyData } from "./data/dummyData";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";

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

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function deleteCompletedTodos() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  }

  return (
    <main className="py-10 h-screen">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-md mx-auto bg-slate-100 p-5">
        <AddTodoForm onSubmit={addTodo}/>
        <TodoList todos={todos} setTodoCompleted={setTodoCompleted} setDeleteTodo={deleteTodo}/>
        <TodoSummary todos={todos} deleteTodos={deleteCompletedTodos}/>
      </div>
    </main>
  );
}

export default App;
