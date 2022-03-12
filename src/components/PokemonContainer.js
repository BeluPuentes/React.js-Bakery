import React, {useState} from 'react'
import { getPokemons, getPokemons2 } from '../API/ConsumiendoPokeAPI'
import PokemonList from './PokemonList'

function PokemonContainer() {
    const[pokemons,setPokemons]=useState([])
    
    const obtenerPokemons=()=>{
        getPokemons()
        .then((resultado)=>resultado.json())
        .then((pokemons)=>{
            console.log(pokemons.results)
            setPokemons(pokemons.results)
        })
    }

    const obtenerPokemonsConIMG=()=>{
        let array=[]
        for(let i=1; i<=20; i++){
            getPokemons2(i)
            .then((resultado)=>resultado.json())
            .then ((pokemon)=>{
                array.push(pokemon)
                setPokemons([...array])
            })
        }
    }



  return (
    <div>
        <button onClick={obtenerPokemonsConIMG}>Ver Pokemons</button>
        <PokemonList lista={pokemons}/>
    </div>
  )
}

export default PokemonContainer