<script>
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

  function removeItem(index) {
    // TODO
    console.log("removeItem");
    todos.splice(index, 1);
    todos = todos;
  }
</script>

<main>
  <h1>Todo</h1>
  <input type="text" bind:value={input} />
  <button on:click={createTodo}>Create Todo</button>
  <ul>
    {#each todos as todo, index}
      <li>
        <input
          type="checkbox"
          bind:checked={todo.checked}
          on:click={() => (todo.checked = !todo.checked)}
        />
        <span class:checked={todo.checked}>{todo.name}</span>
        <span on:click={() => removeItem(index)}>❌</span>
      </li>
    {/each}
  </ul>
</main>

<style>
  .checked {
    text-decoration: line-through;
  }
</style>
