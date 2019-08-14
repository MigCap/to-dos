import { action, thunk } from "easy-peasy";
import uuid from "uuid";
import format from "date-fns/format";

const setLocalStorage = state => {
  localStorage.clear();
  localStorage.setItem("todos", JSON.stringify(state));
};

export default {
  todos: [],
  completedTodos: [],
  // Thunks
  fetchTodos: thunk(async actions => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const todos = await res.json();

    actions.setTodos(todos);
  }),
  fetchLocalStorage: thunk(actions => {
    if (localStorage.getItem("todos") === null) {
      let todos = [];
      actions.setTodos(todos);
    } else {
      actions.setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }),
  // Actions
  setTodos: action((state, todos) => {
    state.todos = todos;
    setLocalStorage(state.todos);
  }),
  add: action((state, todo) => {
    let createdAt = new Date();
    todo.id = uuid.v4();
    todo.createdAt = `Created on ${format(createdAt, "DD/MM/YYYY")} at ${format(
      createdAt,
      "HH:mm:ss"
    )}`;
    state.todos = [...state.todos, todo];
    setLocalStorage(state.todos);
  }),
  toggle: action((state, id) => {
    state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setLocalStorage(state.todos);
  }),
  remove: action((state, id) => {
    state.todos = state.todos.filter(todo => todo.id !== id);
    setLocalStorage(state.todos);
  })
};
