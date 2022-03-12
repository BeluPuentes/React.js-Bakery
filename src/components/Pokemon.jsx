import React from 'react'

function Pokemon({name, img}) {
  return (
    <div className='bg-green-300 p-4 text-center'>
      <img className='inline' src={img} alt=""/>
      <h3>{name}</h3>

    </div>
  )
}

export default Pokemon