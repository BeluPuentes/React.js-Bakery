const APIURL= "https://pokeapi.co/api/v2/pokemon"

function getPokemon(id){
    fetch(`${APIURL}/${id}`)
    .then((resultado)=>resultado.json())
    .then((pokemon)=>{
        console.log(pokemon)
    })
}

getPokemon(3)

export function getPokemons(){
    return fetch(`${APIURL}`)
}

export function getPokemons2(id){
    return fetch(`${APIURL}/${id}`)
}
