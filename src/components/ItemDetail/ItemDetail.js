import React from 'react'


export function ItemDetail (props){
    const{id, nombre, descripcion, precio, pictureUrl}=props

    return (
        <div>
            
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <img src={pictureUrl} alt={nombre}></img>
            <span>Precio: $ {precio}</span>
        </div>
    )
}

