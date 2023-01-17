<script>
  import { onMount } from "svelte";
  import Todo from "./Todo.svelte";
  let input = "";
  let isLoading = true;

  let todos = [];

  onMount(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed")
        }
        return res.json();
      })
      .then((data) => {
        todos = data.map(todo => ({
          name: todo.title,
          checked: todo.completed
        })).slice(0, 3);
        isLoading = false;
      })
      .catch((err) => {
        console.log(err);
        isLoading = false;
      });
  });

  function createTodo() {
    if (!input) return;
    todos = [...todos, { name: input, checked: false }];
    input = "";
  }

  function removeTodo(index) {
    // TODO
    todos.splice(index, 1);
    todos = todos;
  }
</script>

<h1>Remote Todos</h1>
<input type="text" bind:value={input} />
<button on:click={createTodo}>Create Todo</button>
<ul>
  {#each todos as todo, index}
    <li>
      <Todo on:removeTodo={removeTodo} {todo} {index}>
        <hr />
      </Todo>
    </li>
  {/each}
</ul>
