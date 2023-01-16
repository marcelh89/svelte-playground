<script>
  import Todo from "./Todo.svelte";
  import todos from "./todos-store";
  let input = "";

  function createTodo() {
    if (!input) return;
    todos.addTodo({ id: Date.now(), name: input, checked: false });
    input = "";
  }

  function removeTodo(customEvent) {
    todos.removeTodo(customEvent.detail.id);
  }
</script>

<h1>Todos with Store</h1>
<input type="text" bind:value={input} />
<button on:click={createTodo}>Create Todo</button>
<ul>
  {#each $todos as todo}
    <li>
      <Todo on:removeTodo={removeTodo} {todo}>
        <hr />
      </Todo>
    </li>
  {/each}
</ul>
