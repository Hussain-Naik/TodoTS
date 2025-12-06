import type { Todo } from "../types/todo";

interface TodoItemsProps {
    todo: Todo
}

export default function TodoItems({ todo }: TodoItemsProps) {
  return (
    <div key={todo.id} className="max-w-md mx-auto">
          <label className="flex items-center gap-2 mt-3 mx-1 p-3 border border-gray-200 rounded shadow">
            <input
              type="checkbox"
              checked={todo.completed}
              className="scale-150 mr-4"
            />
            <span className={todo.completed ? "line-through text-gray-500" : ""}>
              {todo.title}
            </span>
          </label>
    </div>
  );
}