import type { Todo } from "../types/todo";

interface TodoSummaryProps {
  todos: Todo[];
  deleteTodos: () => void;
}

export default function TodoSummary({ todos, deleteTodos }: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed);
  return (
    <>
      {todos.length === 0 
      ? <div className="text-center mt-4 p-2">
          <p>
            You have no todos. Add some tasks to get started!
          </p>
        </div> 
      : (
        <div className="text-center mt-4 p-2">
          <p>
            {completedTodos.length} / {todos.length} completed
          </p>
            {completedTodos.length > 0 && (
              <button
                onClick={deleteTodos}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Clear Completed
              </button>
            )}
        </div>
      )}
    </>
  );
}
