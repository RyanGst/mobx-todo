import { observer } from "mobx-react";
import React from "react";

import "./App.css";
import TodoInput from "./NewTodoInput";
import { useRootStore } from "./RootStateContext";

function App() {
  const { todoStore } = useRootStore();
  return (
    <div className="App">
      <TodoInput addTodo={todoStore.addTodo} />

      {todoStore.todos.map((todo, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => (todo.done = true)}
          />
          <input
            type="text"
            value={todo.text}
            onChange={(evt) => (todo.text = evt.target.value)}
          />
        </div>
      ))}
    </div>
  );
}

export default observer(App);
