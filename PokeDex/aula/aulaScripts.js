async function fetchData(pokeNumber) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokeNumber);
    const pokemon = await response.json();   
    return pokemon;
}

async function createPokemon(pokeNumber) {
    //DOM - DOCUMENT OBJECT MODEL
    const pokemon = await fetchData(pokeNumber);
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const img = document.createElement("img");
    h2.textContent = `#${pokemon.id} - ${pokemon.name}`;
    img.src = pokemon.sprites.front_default;   
    div.appendChild(h2);
    div.appendChild(img);
    document.div.appendChild(div);
}

const pokeNumbers = [3,6,9,120,5,68,132,44,94,151];
pokeNumbers.forEach(createPokemon);