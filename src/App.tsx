import "./App.scss";

import { Route, Routes } from "react-router-dom";

import { Dashboard, Layout, TodoPage } from "./containers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout main={<Dashboard />} />} />
        <Route path="/todo/:id" element={<Layout main={<TodoPage />} />} />
      </Routes>
    </>
  );
}
export default App;
