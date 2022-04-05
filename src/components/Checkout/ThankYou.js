import { Link } from "react-router-dom"

export const ThankYou =({order})=>{
    return(
        <>
            <div className="container my-5">
            <h2>Gracias pro comprar en My Bakery</h2>
            <hr/>
            <h3>Tu numero de orden es: {order}</h3>
            <Link to='/' className="btn btn-primary">Volver</Link>
            
            </div>
            

        </>
    )
}