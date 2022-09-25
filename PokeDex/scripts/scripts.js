async function fetchData(pokeNumber) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokeNumber);
    const pokemon = await response.json();
    
    return pokemon;
}

let grassType = '#74CB48';
let poisonType = '#A43E9E';
let bugType = '#A7B723';
let dragonType = '#7037FF';
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

let number;

async function createPokemon(pokeNumber){
    

    const pokemon = await fetchData(pokeNumber);
    console.log(pokemon);

    const container = document.getElementById('container');
    const content = document.getElementById('content');
    const pokemonBox = document.getElementById('pokemon-box');
    const div = document.createElement('div');
    div.setAttribute("id", "poke");
    const nomePoke = document.createElement('div');
    nomePoke.setAttribute("id", "nomePoke");    
    const h2Name = document.createElement('h2');
    const h3Id = document.createElement('h3');
    const img = document.createElement('img');    
    const button = document.createElement('button');

    button.addEventListener('click', function(){

        console.log(`nome do click é ${pokemon.name}`);             
        location = "./pokemon.html";
        number = `${pokemon.id}`;
        location.assign("./pokemon.html#" + number);

    });



    //a.setAttribute('href','./pokemon.html');

    let tipo = pokemon.types[0]["type"];
    let corBorda = `${tipo.name}Type`;
    //console.log(corBorda);

    switch(corBorda){
        case 'grassType':
            div.style.borderColor = grassType;
            h2Name.style.backgroundColor = grassType;
            break;
        
        case 'poisonType':
            div.style.borderColor = poisonType;
            h2Name.style.backgroundColor = poisonType;
            break; 
        case 'bugType':
            div.style.borderColor = bugType;
            h2Name.style.backgroundColor = bugType;
            break;

        case 'dragonType':
            div.style.borderColor = dragonType;
            h2Name.style.backgroundColor =dragonType;
            break;

        case 'fairyType':
            div.style.borderColor = fairyType;
            h2Name.style.backgroundColor = fairyType;
            break;
        
        case 'fightingType':
            div.style.borderColor = fightingType;
            h2Name.style.backgroundColor = fightingType;
            break;

        case 'fireType':
            div.style.borderColor = fireType;
            h2Name.style.backgroundColor = fireType;
            break;

        case 'fireType':
            div.style.borderColor = fireType;
            h2Name.style.backgroundColor = fireType;
            break;

        case 'flyingType':
            div.style.borderColor = flyingType;
            h2Name.style.backgroundColor = flyingType;
            break;

        case 'ghostType':
            div.style.borderColor = ghostType;
            h2Name.style.backgroundColor = ghostType;
            break;

        case 'groundType':
            div.style.borderColor = groundType;
            h2Name.style.backgroundColor = groundType;
            break;

        case 'iceType':
            div.style.borderColor = iceType;
            h2Name.style.backgroundColor = iceType;
            break;

        case 'normalType':
            div.style.borderColor = normalType;
            h2Name.style.backgroundColor = normalType;
            break;

        case 'psychicType':
            div.style.borderColor = psychicType;
            h2Name.style.backgroundColor = psychicType;
            break;
        case 'rockType':
            div.style.borderColor = rockType;
            h2Name.style.backgroundColor = rockType;
            break;
        case 'steelType':
            div.style.borderColor = steelType;
            h2Name.style.backgroundColor = steelType;
            break;
        case 'waterType':
            div.style.borderColor = waterType;
            h2Name.style.backgroundColor = waterType;
            break;
        case 'electricType':
            div.style.borderColor = electricType;
            h2Name.style.backgroundColor = electricType;
            break;
    }

    h2Name.textContent = `${pokemon.name}`;
    h3Id.textContent = `#${pokemon.id}`;
    img.src = pokemon.sprites.front_default;

    // Adicionando os elementos no html
    
    
    button.appendChild(img);
    nomePoke.appendChild(h2Name);
    div.appendChild(h3Id);    
    div.appendChild(button);
    div.appendChild(nomePoke);
    pokemonBox.appendChild(div);    
    
}


const pokeNumbers = [3,6,9,94,126,149,123,125,131];
pokeNumbers.forEach(createPokemon);