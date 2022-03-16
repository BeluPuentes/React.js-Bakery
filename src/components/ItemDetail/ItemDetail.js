import React from 'react'


export const ItemDetail = ({id, name, desc, price, img}) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{desc}</p>
            <p>{price}</p>
        </div>
    )
}