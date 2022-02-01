<script>
  export let name = "";
</script>
<button><a href={`/#/${name}`}>{name}</a></button>


<style>
  button{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 99px;
    padding: 5px 10px;
    margin: 15px;
    background-color: rgb(238, 238, 238);
    outline: none;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  button:active{
    transform: scale(0.95);
  }
  a{
    text-decoration: none;
    color: black;
  }
</style>