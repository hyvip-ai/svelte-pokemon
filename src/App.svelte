<script>
  import Router from "svelte-spa-router";
  import Home from "./page/Home.svelte";
import Pokemon from "./page/Pokemon.svelte";
</script>

<main>
  <h1>Pokemon App</h1>
</main>
<Router
  routes={{
    "/home": Home,
    "/:pokemon":Pokemon
  }}
/>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }
</style>
