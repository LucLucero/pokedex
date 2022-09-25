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
    const pokemonWeight = document.getElementById('pokemonWeight');
    const types = document.querySelector('h4');
    const h3 = document.querySelector('h3');    
    const pokemonHeight = document.getElementById('pokemonHeight');
    const pokeMove1 = document.getElementById('move1');
    const pokeMove2 = document.getElementById('move2');
    const hp = document.getElementById('hp');
    const barhp = document.getElementById('skill_hp');
    const atk = document.getElementById('atk');
    const baratk = document.getElementById('skill_atk');
    const def = document.getElementById('def');
    const bardef = document.getElementById('skill_def');
    const stak = document.getElementById('stak');
    const barstak = document.getElementById('skill_satk');
    const sdef = document.getElementById('sdef');
    const barsdef = document.getElementById('skill_sdef');
    const spd = document.getElementById('spd');
    const barspd = document.getElementById('skill_spd');
    


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
        contentPokemon.style.color = grassType;
        types.style.backgroundColor = grassType;
        baratk.style.backgroundColor = grassType;
        barhp.style.backgroundColor = grassType;
        bardef.style.backgroundColor = grassType;
        barspd.style.backgroundColor = grassType;
        barsdef.style.backgroundColor = grassType;
        barstak.style.backgroundColor = grassType;
        

        break;
    
    case 'poisonType':
        contentPokemon.style.backgroundColor = poisonType;
        types.style.backgroundColor = poisonType;
        contentPokemon.style.color = poisonType;
        baratk.style.backgroundColor = poisonType;
        barhp.style.backgroundColor = poisonType;
        bardef.style.backgroundColor = poisonType;
        barspd.style.backgroundColor = poisonType;
        barsdef.style.backgroundColor = poisonType;
        barstak.style.backgroundColor = poisonType;
        
        break; 
    case 'bugType':
        contentPokemon.style.backgroundColor = bugType;
        types.style.backgroundColor = bugType;
        contentPokemon.style.color = bugType;
        baratk.style.backgroundColor = bugType;
        barhp.style.backgroundColor = bugType;
        bardef.style.backgroundColor = bugType;
        barspd.style.backgroundColor = bugType;
        barsdef.style.backgroundColor = bugType;
        barstak.style.backgroundColor = bugType;
        
        break;

    case 'dragonType':
        contentPokemon.style.backgroundColor = dragonType;
        types.style.backgroundColor = dragonType;
        contentPokemon.style.color = dragonType;
        baratk.style.backgroundColor = dragonType;
        barhp.style.backgroundColor = dragonType;
        bardef.style.backgroundColor = dragonType;
        barspd.style.backgroundColor = dragonType;
        barsdef.style.backgroundColor = dragonType;
        barstak.style.backgroundColor = dragonType;
        
        break;

    case 'fairyType':
        contentPokemon.style.backgroundColor = fairyType;
        types.style.backgroundColor = fairyType;
        contentPokemon.style.color = fairyType;
        baratk.style.backgroundColor = fairyType;
        barhp.style.backgroundColor = fairyType;
        bardef.style.backgroundColor = fairyType;
        barspd.style.backgroundColor = fairyType;
        barsdef.style.backgroundColor = fairyType;
        barstak.style.backgroundColor = fairyType;
        
        break;
    
    case 'fightingType':
        contentPokemon.style.backgroundColor = fightingType;
        types.style.backgroundColor = fightingType;
        contentPokemon.style.color = fightingType;
        baratk.style.backgroundColor = fightingType;
        barhp.style.backgroundColor = fightingType;
        bardef.style.backgroundColor = fightingType;
        barspd.style.backgroundColor = fightingType;
        barsdef.style.backgroundColor = fightingType;
        barstak.style.backgroundColor = fightingType;

        break;

    case 'fireType':
        contentPokemon.style.backgroundColor = fireType;
        types.style.backgroundColor = fireType;
        contentPokemon.style.color = fireType;
        baratk.style.backgroundColor = fireType;
        barhp.style.backgroundColor = fireType;
        bardef.style.backgroundColor = fireType;
        barspd.style.backgroundColor = fireType;
        barsdef.style.backgroundColor = fireType;
        barstak.style.backgroundColor = fireType;
       
        break;


    case 'flyingType':
        contentPokemon.style.backgroundColor = flyingType;
        types.style.backgroundColor = flyingType;
        contentPokemon.style.color = flyingType;
        baratk.style.backgroundColor = flyingType;
        barhp.style.backgroundColor = flyingType;
        bardef.style.backgroundColor = flyingType;
        barspd.style.backgroundColor = flyingType;
        barsdef.style.backgroundColor = flyingType;
        barstak.style.backgroundColor = flyingType;
        
        
        break;

    case 'ghostType':
        contentPokemon.style.backgroundColor = ghostType;
        types.style.backgroundColor = ghostType;
        contentPokemon.style.color = ghostType;
        baratk.style.backgroundColor = ghostType;
        barhp.style.backgroundColor = ghostType;
        bardef.style.backgroundColor = ghostType;
        barspd.style.backgroundColor = ghostType;
        barsdef.style.backgroundColor = ghostType;
        barstak.style.backgroundColor = ghostType;
        
        
        break;

    case 'groundType':
        contentPokemon.style.backgroundColor = groundType;
        types.style.backgroundColor = groundType;
        contentPokemon.style.color = groundType;
        baratk.style.backgroundColor = groundType;
        barhp.style.backgroundColor = groundType;
        bardef.style.backgroundColor = groundType;
        barspd.style.backgroundColor = groundType;
        barsdef.style.backgroundColor = groundType;
        barstak.style.backgroundColor = groundType;
        
        break;

    case 'iceType':
        contentPokemon.style.backgroundColor = iceType;
        types.style.backgroundColor = iceType;
        contentPokemon.style.color = iceType;
        baratk.style.backgroundColor = iceType;
        barhp.style.backgroundColor = iceType;
        bardef.style.backgroundColor = iceType;
        barspd.style.backgroundColor = iceType;
        barsdef.style.backgroundColor = iceType;
        barstak.style.backgroundColor = iceType;
        
        
        break;

    case 'normalType':
        contentPokemon.style.backgroundColor = normalType;
        types.style.backgroundColor = normalType;
        contentPokemon.style.color = normalType;
        baratk.style.backgroundColor = normalType;
        barhp.style.backgroundColor = normalType;
        bardef.style.backgroundColor = normalType;
        barspd.style.backgroundColor = normalType;
        barsdef.style.backgroundColor = normalType;
        barstak.style.backgroundColor = normalType;
        
        break;

    case 'psychicType':
        contentPokemon.style.backgroundColor = psychicType;
        types.style.backgroundColor = psychicType;
        contentPokemon.style.color = psychicType;
        baratk.style.backgroundColor = psychicType;
        barhp.style.backgroundColor = psychicType;
        bardef.style.backgroundColor = psychicType;
        barspd.style.backgroundColor = psychicType;
        barsdef.style.backgroundColor = psychicType;
        barstak.style.backgroundColor = psychicType;
        
        
        break;

    case 'rockType':
        contentPokemon.style.backgroundColor = rockType;
        types.style.backgroundColor = rockType;
        contentPokemon.style.color = rockType;
        baratk.style.backgroundColor = rockType;
        barhp.style.backgroundColor = rockType;
        bardef.style.backgroundColor = rockType;
        barspd.style.backgroundColor = rockType;
        barsdef.style.backgroundColor = rockType;
        barstak.style.backgroundColor = rockType;
        
        
        break;

    case 'steelType':
        contentPokemon.style.backgroundColor = steelType;
        types.style.backgroundColor = steelType;
        contentPokemon.style.color = steelType;
        baratk.style.backgroundColor = steelType;
        barhp.style.backgroundColor = steelType;
        bardef.style.backgroundColor = steelType;
        barspd.style.backgroundColor = steelType;
        barsdef.style.backgroundColor = steelType;
        barstak.style.backgroundColor = steelType;
        
        
        break;

    case 'waterType':
        contentPokemon.style.backgroundColor = waterType;
        types.style.backgroundColor = waterType;
        contentPokemon.style.color = waterType;
        baratk.style.backgroundColor = waterType;
        barhp.style.backgroundColor = waterType;
        bardef.style.backgroundColor = waterType;
        barspd.style.backgroundColor = waterType;
        barsdef.style.backgroundColor = waterType;
        barstak.style.backgroundColor = waterType;
        
        
        break;

    case 'electricType':
        contentPokemon.style.backgroundColor = electricType;
        types.style.backgroundColor = electricType;
        contentPokemon.style.color = electricType;
        baratk.style.backgroundColor = electricType;
        barhp.style.backgroundColor = electricType;
        bardef.style.backgroundColor = electricType;
        barspd.style.backgroundColor = electricType;
        barsdef.style.backgroundColor = electricType;
        barstak.style.backgroundColor = electricType;
        
        
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
