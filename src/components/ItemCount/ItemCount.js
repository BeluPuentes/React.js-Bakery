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
            <button className="btn btn-outline-primary" onClick={handleRestar}>-</button>
            <span className="mx-4">{cantidad}</span>
            <button className="btn btn-primary" onClick={handleSumar}>+</button>
            <br/>
            
        </div>
    )
}

export default ItemCount