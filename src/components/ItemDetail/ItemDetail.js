import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

export const ItemDetail = ({id, nombre, descripcion, precio, pictureUrl, stock}) => {

  
    const [cantidad, setCantidad] = useState(0)
    const {cart, agregarAlCarrito, isInCart} = useContext(CartContext)


    const handleAgregar =()=>{
        if (cantidad===0) return 

        if (!isInCart(id)){
            const itemToCart={
                id,
                nombre, 
                precio, 
                pictureUrl,
                cantidad,
            }
            agregarAlCarrito (itemToCart)
        }       
        
    }
    
    return (
        <div>
            
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <img src={pictureUrl} alt={nombre}></img>
            <span>Precio: $ {precio}</span>

            {
               isInCart(id) 
               ?<>
                    <Link to="/cart" className="btn btn-success my-3">
                        Terminar mi compra
                    </Link>
               </>
               :<>
                    <ItemCount 
                        max={stock} 
                        cantidad={cantidad} 
                        setCantidad={setCantidad}
                    />
                    <button
                        className='btn btn-success my-2'
                        onClick={handleAgregar}
                    >
                        Agregar al carrito
                    </button>
                </>

            }
            
            
            

        </div>
    )
}

    

