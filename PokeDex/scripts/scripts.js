async function fetchData(pokeNumber) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokeNumber);
    const pokemon = await response.json();
    
    return pokemon;
}

let grassType = '#74CB48';
let poisonType = '#A43E9E';
let bugType = '#A7B723';
let dragonType = '#F5FFC6';
let electricType = '#F9CF30';
let fairyType = '#B899FF';
let fightingType = '#C9A97E';
let fireType = '#F57D31';
let flyingType = '#A891EC';
let ghostType = '#70559B';  
let groundType = '#906D3C';
let iceType = '#CCDAD1';
let normalType = '#AAA67F';
let psychicType = '#FB5584';
let rockType = '#B69E31';
let steelType = '#B7B9D0';
let waterType = '#6493EB';


async function createPokemon(pokeNumber){


    const pokemon = await fetchData(pokeNumber);
    console.log(pokemon);

    // criando os elementos

    const container = document.getElementById('container');
    const content = document.getElementById('content');
    const pokemonBox = document.getElementById('pokemon-box');
    const div = document.createElement('div');
    div.setAttribute("id", "poke");
    const h2Name = document.createElement('h2');
    const h3Id = document.createElement('h3');
    const img = document.createElement('img');
    const borderColor = div.style.borderColor = ghostType;
    const tipo = document.createElement('p');

    //conteudo dos elementos
   // borderColor = pokemon.ty

    
    tipo.textContent = `${pokemon.type}`;
    h2Name.textContent = `${pokemon.name}`;
    h3Id.textContent = `#${pokemon.id}`;
    img.src = pokemon.sprites.front_default;

    // Adicionando os elementos no html

    div.appendChild(tipo);
    div.appendChild(h2Name);
    div.appendChild(h3Id);
    div.appendChild(img);
    //div.appendChild(borderColor);
    
    pokemonBox.appendChild(div);
    
}


const pokeNumbers = [3,6,9,94,151,149,123,125,131];
pokeNumbers.forEach(createPokemon);