import { useState } from "react";

interface AddTodoFormProps {
    onSubmit: (title: string) => void;
}
export default function AddTodoForm({onSubmit}: AddTodoFormProps) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onSubmit(inputValue);
    setInputValue("");
  }

  return (
    <form className="flex mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="grow p-2 border border-gray-400 rounded-s-md"
      />
      <button
        type="submit"
        className="w-16 bg-slate-900 text-white px-4 rounded-e-md hover:bg-slate-700"
      >
        Add
      </button>
    </form>
  );
}
