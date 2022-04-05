
const ItemCount = ({max=5, cantidad, setCantidad, handleAgregar}) =>{
    
    const min=0;
    const handleRestar =()=>{
        cantidad >0  && setCantidad(cantidad -1)
    }

    const handleSumar =() =>{
        cantidad< max && setCantidad(cantidad +1)
    }
    
    return(
        <div>
            <button className={`btn ${cantidad === min ? 'btn-outline-danger' : 'snipcart-add-item'}`} disable ={cantidad === min} onClick={handleRestar}>-</button>
            <span className="mx-6">   { cantidad }    </span>
            <button className={`btn ${cantidad === max ? 'btn-outline-danger' : 'snipcart-add-item'}`} disable ={cantidad === max} onClick={handleSumar}>+</button>
            <br/>
            <button
                        className="snipcart-add-item"
                        onClick={handleAgregar}
                    >
                        Agregar al carrito
                    </button>
        
            
        </div>
    )
}

export default ItemCount