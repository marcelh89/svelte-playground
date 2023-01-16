<script>
  import Todo from "./Todo.svelte";
  let input = "";
  let todos = [
    {
      name: "Learn svelte",
      checked: false,
    },
    {
      name: "do the first project with svelte",
      checked: false,
    },
    {
      name: "Drink coffee",
      checked: false,
    },
  ];

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

<h1>Todos</h1>
<input type="text" bind:value={input} />
<button on:click={createTodo}>Create Todo</button>
<ul>
  {#each todos as todo, index}
    <li><Todo on:removeTodo={removeTodo} {todo} {index} /></li>
  {/each}
</ul>
