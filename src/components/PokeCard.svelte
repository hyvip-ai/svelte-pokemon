<script>
  import { each } from "svelte/internal";

  export let name = "";
  export let imageUrl = "";
  export let types = [];
  export let moves = [];
  export let baseExperience = 0;
  export let height = 0;
  export let weight = 0;
</script>

<div>
  <img src={imageUrl} alt={name} />
  <h1>{name}</h1>
  <h3>Base Experience</h3>
  <p>{baseExperience}</p>
  <h3>Height</h3>
  <p>{height}</p>
  <h3>Weigth</h3>
  <p>{weight}</p>
  <h3>Types</h3>
  {#each types as type}
    <span>{type.type.name}</span>
  {/each}
  <h3>Moves</h3>
  {#each moves as move}
    <span>{move.move.name}</span>
  {/each}
</div>

<style>
  span {
    display: inline-flex;
    margin: 10px;
    background-color: rgb(249, 249, 249);
    padding: 8px 15px;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
</style>
