import { Todo } from "../../components";
import { classNames } from "../../utils";

export default function Dashboard() {
  return (
    <div
      className={classNames(
        //
        "grid gap-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1",
        ""
      )}
    >
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
}
