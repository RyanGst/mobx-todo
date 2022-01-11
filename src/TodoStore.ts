import { action, makeAutoObservable } from "mobx";

type Todo = {
  id: string;
  text: string;
  done: boolean;
};

export class TodoStore {
  todos: Todo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action
  addTodo = (todo: Todo) => {
    this.todos.push(todo);
  };
}
