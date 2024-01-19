import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos: [{id, title, description, priority},...]
 *

 * TodoApp -> TopTodo
 */

function TopTodo({ todos }) {
  // lowest-priority # is the highest priority
  let top = todos.reduce(
    (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);

    //TODO: keep return on the same line if it's short
  return (
    <Todo todo={top} />
  );
}

export default TopTodo;