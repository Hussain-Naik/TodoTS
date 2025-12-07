import type { Todo } from "../types/todo";
import TodoItems from "./TodoItems";

interface TodoListProps {
  todos: Todo[];
  setTodoCompleted: (id: number, completed: boolean) => void;
  setDeleteTodo: (id: number) => void;
}

export default function TodoList({
  todos,
  setTodoCompleted,
  setDeleteTodo,
}: TodoListProps) {
  const sortedTodos = [...todos].sort(
    (a, b) => Number(a.completed) - Number(b.completed)
  );
  return (
    <div>
      {sortedTodos.map((todo) => (
        <TodoItems
          key={todo.id}
          todo={todo}
          onCompleteChange={setTodoCompleted}
          onDelete={setDeleteTodo}
        />
      ))}
    </div>
  );
}
