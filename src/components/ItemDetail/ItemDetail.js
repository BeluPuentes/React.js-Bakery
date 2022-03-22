import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'


export const ItemDetail = ({id, nombre, descripcion, precio, pictureUrl, stock}) => {

    const [cantidad, setCantidad] = useState(0)

    const handleAgregar =()=>{
        const itemToCart={
            id,
            nombre, 
            precio, 
            pictureUrl,
            cantidad,
        }
        console.log(cantidad)
    }
    
    return (
        <div>
            
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <img src={pictureUrl} alt={nombre}></img>
            <span>Precio: $ {precio}</span>

            <ItemCount 
                max={stock} 
                cantidad={cantidad} 
                setCantidad={setCantidad}
                handleAgregar={handleAgregar}
            />
            

        </div>
    )
}

    

