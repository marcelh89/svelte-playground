<script>
  import { createEventDispatcher } from "svelte";

  export let todo;
  //export let index;

  const dispatch = createEventDispatcher();

  function removeTodo() {
    dispatch("removeTodo", { id: todo.id });
  }
</script>

<input
  type="checkbox"
  bind:checked={todo.checked}
  on:click={() => (todo.checked = !todo.checked)}
/>
<span class:checked={todo.checked}>{todo.name}</span>
<span on:keydown on:click={removeTodo}>❌</span>
<slot/>

<style>
  .checked {
    text-decoration: line-through;
  }
</style>