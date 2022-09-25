//import {number} from './scripts,js';

let number = location.hash.split('#')[1];
console.log(number);


async function fetchData(number) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + number);
    const pokemon = await response.json();
    
    return pokemon;
}



//Colors:

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

async function createPokemonScreen(number){

   


    const pokemon = await fetchData(number);
    console.log(pokemon);
    const contentPokemon = document.getElementById('content-pokemon');
    const pokemonName = document.getElementById('pokemonName');
    const pokemonOrder = document.getElementById('pokemonOrder');
    const pokemonSprite = document.getElementById('pokemonSprite');
    const tipo1 = document.getElementById('type-1');
    const tipo2 = document.getElementById('type-2');    
    const types = document.querySelector('h4');
    const pokemonWeight = document.getElementById('pokemonWeight');
    const pokemonHeight = document.getElementById('pokemonHeight');
    const pokeMove1 = document.getElementById('move1');
    const pokeMove2 = document.getElementById('move2');
    const hp = document.getElementById('hp');
    const atk = document.getElementById('atk');
    const def = document.getElementById('def');
    const stak = document.getElementById('stak');
    const sdef = document.getElementById('sdef');
    const spd = document.getElementById('spd');


    let type1;
    let type2;

   if (pokemon.types.length >= 2){

       type1 = pokemon.types[0]["type"];
       type2 = pokemon.types[1]["type"];
       console.log(type1.name);
       console.log(type2.name);
       tipo1.textContent = type1.name;
       tipo2.textContent = type2.name;
       let Tipo2 = `${type2.name}Type`;
       switch(Tipo2) {
    case 'grassType':        
        tipo2.style.backgroundColor = grassType;
        break;
    
    case 'poisonType':
        
        tipo2.style.backgroundColor = poisonType;
        
        break; 
    case 'bugType':
        
        tipo2.style.backgroundColor = bugType;
        
        break;

    case 'dragonType':
        
        tipo2.style.backgroundColor = dragonType;
        
        break;

    case 'fairyType':
        
        tipo2.style.backgroundColor = fairyType;
        
        break;
    
    case 'fightingType':
        
        tipo2.style.backgroundColor = fightingType;
        break;

    case 'fireType':
        tipo2.style.backgroundColor = fireType;
       
        break;


    case 'flyingType':
        tipo2.style.backgroundColor = flyingType;
        
        
        break;

    case 'ghostType':
        tipo2.style.backgroundColor = ghostType;
        
        
        break;

    case 'groundType':
        tipo2.style.backgroundColor = groundType;
        
        
        break;

    case 'iceType':
        tipo2.style.backgroundColor = iceType;
        
        
        break;

    case 'normalType':
        tipo2.style.backgroundColor = normalType;
        
        
        break;

    case 'psychicType':
        tipo2.style.backgroundColor = psychicType;
        
        
        break;

    case 'rockType':
        tipo2.style.backgroundColor = rockType;
        
        
        break;

    case 'steelType':
        tipo2.style.backgroundColor = steelType;
        
        
        break;

    case 'waterType':
        tipo2.style.backgroundColor = waterType;
        
        
        break;

    case 'electricType':
        tipo2.style.backgroundColor = electricType;
        
        
        break;
       }
   }

   else{

        type1 = pokemon.types[0]["type"];
        tipo1.textContent = type1.name;
        tipo2.style.borderStyle = "none";
        tipo1.style.position = "relative";
        tipo1.style.left = "15px";

   }


let corBackgroundeTipo1 = `${type1.name}Type`;

   switch(corBackgroundeTipo1){
    case 'grassType':
        contentPokemon.style.backgroundColor = grassType;
        types.style.backgroundColor = grassType;
        break;
    
    case 'poisonType':
        contentPokemon.style.backgroundColor = poisonType;
        types.style.backgroundColor = poisonType;
        
        break; 
    case 'bugType':
        contentPokemon.style.backgroundColor = bugType;
        types.style.backgroundColor = bugType;
        
        break;

    case 'dragonType':
        contentPokemon.style.backgroundColor = dragonType;
        types.style.backgroundColor = dragonType;
        
        break;

    case 'fairyType':
        contentPokemon.style.backgroundColor = fairyType;
        types.style.backgroundColor = fairyType;
        
        break;
    
    case 'fightingType':
        contentPokemon.style.backgroundColor = fightingType;
        types.style.backgroundColor = fightingType;
        break;

    case 'fireType':
        contentPokemon.style.backgroundColor = fireType;
        types.style.backgroundColor = fireType;
       
        break;


    case 'flyingType':
        contentPokemon.style.backgroundColor = flyingType;
        types.style.backgroundColor = flyingType;
        
        
        break;

    case 'ghostType':
        contentPokemon.style.backgroundColor = ghostType;
        types.style.backgroundColor = ghostType;
        
        
        break;

    case 'groundType':
        contentPokemon.style.backgroundColor = groundType;
        types.style.backgroundColor = groundType;
        
        
        break;

    case 'iceType':
        contentPokemon.style.backgroundColor = iceType;
        types.style.backgroundColor = iceType;
        
        
        break;

    case 'normalType':
        contentPokemon.style.backgroundColor = normalType;
        types.style.backgroundColor = normalType;
        
        
        break;

    case 'psychicType':
        contentPokemon.style.backgroundColor = psychicType;
        types.style.backgroundColor = psychicType;
        
        
        break;

    case 'rockType':
        contentPokemon.style.backgroundColor = rockType;
        types.style.backgroundColor = rockType;
        
        
        break;

    case 'steelType':
        contentPokemon.style.backgroundColor = steelType;
        types.style.backgroundColor = steelType;
        
        
        break;

    case 'waterType':
        contentPokemon.style.backgroundColor = waterType;
        types.style.backgroundColor = waterType;
        
        
        break;

    case 'electricType':
        contentPokemon.style.backgroundColor = electricType;
        types.style.backgroundColor = electricType;
        
        
        break;
}


if (pokemon.abilities.length >= 2){

    ability1 = pokemon.abilities[0]["ability"];
    ability2 = pokemon.abilities[1]["ability"];
    pokeMove1.textContent = ability1.name;
    pokeMove2.textContent = ability2.name;

} else {

    ability1 = pokemon.abilities[0]["ability"];
    pokeMove1.textContent = ability1.name;
}

    let pokestatHP = pokemon.stats[0];
    let pokestatAtk = pokemon.stats[1];
    let pokestatDef = pokemon.stats[2];
    let pokestatSDef = pokemon.stats[4];
    let pokestatSAtk = pokemon.stats[3];
    let pokestatSPd = pokemon.stats[5];
    

    hp.textContent = pokestatHP.base_stat;
    atk.textContent = pokestatAtk.base_stat;
    def.textContent = pokestatDef.base_stat;
    sdef.textContent = pokestatSDef.base_stat;
    stak.textContent = pokestatSAtk.base_stat;
    spd.textContent = pokestatSPd.base_stat;
    
    console.log(pokestatHP.base_stat);
    
    
    pokemonName.textContent = pokemon.name;
    pokemonOrder.textContent = `#${pokemon.id}`;
    pokemonSprite.src = pokemon.sprites.front_default;
    pokemonHeight.textContent = `${pokemon.height} m`;
    pokemonWeight.textContent = `${pokemon.weight} kg`;


}

createPokemonScreen(number);
