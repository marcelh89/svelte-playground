<script>
  import SimpleTodos from "./lib/SimpleTodos/Todos.svelte";
  import TodoWithStore from "./lib/TodosWithStore/Todos.svelte";
</script>

<svelte:head>
  <title>Todos</title>
  <meta name="robots" content="noindex nofollow" />
  <html lang="en" />
</svelte:head>

<main>
  <SimpleTodos />
  <hr />
  <TodoWithStore />
</main>
