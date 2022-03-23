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
        <div className='product'>
            <div>
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <img className='image-product' src={pictureUrl} alt={nombre}></img>
                <span>Precio: $ {precio}</span>
            </div>
            {
               isInCart(id) 
               ?<>
                    <button className="snipcart-add-item">
                        <Link to="/cart" >
                            Terminar mi compra
                        </Link>
                    </button>
                    
               </>
               :<>
                    <ItemCount 
                        max={stock} 
                        cantidad={cantidad} 
                        setCantidad={setCantidad}
                    />
                    <button
                        className="snipcart-add-item"
                        onClick={handleAgregar}
                    >
                        Agregar al carrito
                    </button>
                </>

            }
            
            
            

        </div>
    )
}

    

