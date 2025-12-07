import { Trash2 } from "lucide-react";
import type { Todo } from "../types/todo";

interface TodoItemsProps {
  todo: Todo;
  onCompleteChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoItems({
  todo,
  onCompleteChange,
  onDelete,
}: TodoItemsProps) {
  return (
    <div key={todo.id} className="flex items-center-safe gap-1">
      <label className="flex grow items-center gap-2 mt-3 mx-1 p-3 border border-gray-200 rounded shadow">
        <input
          type="checkbox"
          onChange={(e) => onCompleteChange(todo.id, e.target.checked)}
          checked={todo.completed}
          className="scale-150 mr-4"
        />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.title}
        </span>
      </label>
      <Trash2 size={20} onClick={() => onDelete(todo.id)} className="items-center align-middle mt-3 hover:text-red-500"/>
    </div>
  );
}
