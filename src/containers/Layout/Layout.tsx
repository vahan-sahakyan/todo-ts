import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ILayoutProps {
  main: ReactNode;
}

export default function Layout({ main }: ILayoutProps) {
  function handleCreateTodo() {
    //
  }
  return (
    <div className="min-h-full">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            <Link to="/">Todos</Link>
          </h1>
          <button onClick={handleCreateTodo} className="dark:text-black">
            Create Todo
          </button>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{main}</div>
      </main>
    </div>
  );
}
