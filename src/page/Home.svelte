<script>
  import PokeButton from "../components/PokeButton.svelte"
  import { getAll } from "../functions/dataFetching";
  console.log("Home")
</script>

<main>
  {#await getAll()}
    <div class="spinner-border text-info" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  {:then data}
    {#each data as {name}}
      <PokeButton {name} />
    {/each}
  {/await}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
  .spinner-border {
    height: 4em;
    width: 4em;
  }
</style>
