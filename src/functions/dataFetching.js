export async function getAll() {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`).then(
    (res) => res.json()
  );
  return data.results;
}

export async function getByName(name) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
    (res) => res.json()
  );
  return data;
}
