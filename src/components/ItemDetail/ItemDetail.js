import React from 'react'


export const ItemDetail = ({id, nombre, descripcion, precio,pictureUrl, categoria}) => {
    return (
        <div>
            
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <span>Precio: {precio}</span>
        </div>
    )
}

