<script>
  import PokeCard from "../components/PokeCard.svelte";
  import { getByName } from "../functions/dataFetching";
  export let params = {};
</script>

<main>
  {#await getByName(params?.pokemon)}
    <div class="spinner-border text-info" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  {:then data}
  <nav>
    <a href="/#/home">Home</a>
  </nav>
    <PokeCard
      name={data.name}
      imageUrl={data.sprites.front_default}
      types={data.types}
      moves={data.moves}
      baseExperience={data.base_experience}
      height={data.height}
      weight={data.weight}
    />
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
  nav{
    position: absolute;
    top: 0;
    left: 0;
    margin: 15px;
  }
</style>
