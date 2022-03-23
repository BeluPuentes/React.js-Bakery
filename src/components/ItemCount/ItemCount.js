import { useState } from "react"

const ItemCount = ({max=5, cantidad, setCantidad, handleAgregar}) =>{
    

    const handleRestar =()=>{
        cantidad >0  && setCantidad(cantidad -1)
    }

    const handleSumar =() =>{
        cantidad< max && setCantidad(cantidad +1)
    }
    
    return(
        <div>
            <button className="snipcart-add-item" onClick={handleRestar}>-</button>
            <span className="mx-6">   { cantidad }    </span>
            <button className="snipcart-add-item" onClick={handleSumar}>+</button>
            <br/>
            
        </div>
    )
}

export default ItemCount