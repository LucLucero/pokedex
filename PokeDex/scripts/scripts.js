async function fetchData(pokeNumber) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokeNumber);
    const pokemon = await response.json();
    
    return pokemon;
}

async function createPokemon(pokeNumber){


    const pokemon = await fetchData(pokeNumber);
    console.log(pokemon);

    // criando os elementos

    const container = document.getElementById('container');
    const content = document.getElementById('content');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');

    //conteudo dos elementos

    h2.textContent = `#${pokemon.id} - ${pokemon.name}`;
    img.src = pokemon.sprites.front_default;

    // Adicionando os elementos no html

    div.appendChild(h2);
    div.appendChild(img);
    content.appendChild(div);
    

}


const pokeNumbers = [3,6,9,94,151,149,123,125,131];
pokeNumbers.forEach(createPokemon);