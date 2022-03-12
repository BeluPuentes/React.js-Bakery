import React from 'react'
import Pokemon from './Pokemon'

function PokemonList({lista}) {
    console.log(lista)
  return (
    <div className='grid grid-cols-4 gap-5 m-18 p-8 bg-gray-200'>
        {lista.map((pokemon,i)=>
        <Pokemon key={i} name={pokemon.name} img={pokemon.sprites.front_default}/>)}
    
    </div>
  )

}

export default PokemonList