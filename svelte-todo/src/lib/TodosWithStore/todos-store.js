import { writable } from "svelte/store";

const todos = writable([
  {
    id: 1,
    name: "Learn svelte",
    checked: false,
  },
  {
    id: 2,
    name: "do the first project with svelte",
    checked: false,
  },
  {
    id: 3,
    name: "Drink coffee",
    checked: false,
  },
]);

const customTodosStore = {
  subscribe: todos.subscribe,
  addTodo: (todo) => {
    todos.update((items) => {
      return [todo, ...items];
    });
  },
  removeTodo: (id) => {
    console.log("removeTodo", id);
    todos.update((items) => items.filter(item => item.id !== id));
  },
};

export default customTodosStore;
