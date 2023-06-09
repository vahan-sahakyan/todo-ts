import { useNavigate, useParams } from "react-router-dom";

import { dispatch } from "../../store/store";
import { editTodo, removeTodo } from "../../store/todo/todo.slice";

export default function Todo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const body = {
    title: "string",
    description: "string",
    deadline: " string",
    isDone: true,
  };
  return (
    <div
      key={1}
      className="p-3 dark:text-white border border-slate-300 rounded-md"
      onClick={() => {
        navigate(`/todo/${1}`);
      }}
    >
      <header>
        <h3 className="font-bold text-blue-500">Title</h3>
      </header>
      <p>Create an App with Redux Toolkit</p>
      <span>deadline</span>
      <footer className="flex gap-3">
        <button
          onClick={() => {
            dispatch(editTodo({ id, body }));
          }}
          className="cursor-pointer block rounded-md py-1 px-5 ring-1 ring-slate-200 shadow-sm"
        >
          Edit
        </button>
        <button
          onClick={() => {
            dispatch(removeTodo(id));
          }}
          className="cursor-pointer block rounded-md py-1 px-5 ring-1 ring-slate-200 shadow-sm"
        >
          Delete
        </button>
      </footer>
    </div>
  );
}
