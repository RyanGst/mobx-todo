import React, { useState } from "react";
import { uid } from "uid";
import { TodoStore } from "./TodoStore";

// import { Container } from './styles';

type TodoInputProps = {
  addTodo: TodoStore["addTodo"];
};

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const updateTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const saveTodo = () => {
    addTodo({ text: todo, done: false, id: uid() });
    setTodo("");
  };

  return (
    <div>
      <input value={todo} onChange={updateTodo} />
      <button onClick={saveTodo}>Adicionar tarefa</button>
    </div>
  );
};

export default TodoInput;
