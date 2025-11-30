import type { Todo } from "../types/todo";

interface TodoItemsProps {
    todo: Todo
}

export default function TodoItems({ todo }: TodoItemsProps) {
  return (
    <div key={todo.id} className="max-w-md mx-auto mt-6 p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">{todo.title}</h2>
          <p>Status: {todo.completed ? "Completed" : "Pending"}</p>
    </div>
  );
}