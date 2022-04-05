import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { ThankYou } from "./ThankYou"
import { generarOrden } from "../../firebase/generarOrden"
import { validar } from "./validar"



export const Checkout = () => {

    const {cart, totalCart, vaciarCart} = useContext (CartContext)

    const [orderId, setOrderId] =useState (null)
    
    const [values, setValues] =useState({
        nombre:'',
        email:'', 
        tel:'',

    })

    const handleInputChange =(e) =>{
        setValues({
            ...values, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        
        validar (values) && generarOrden(values, cart, totalCart, setOrderId, vaciarCart)
    }


    if (orderId){
        return <ThankYou order={orderId}/>
    }

    
    if (cart.length === 0)
    { 
        return <Navigate to="/"/>
    }
   

    return(
        <div>
            <h2>Checkout</h2>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control my-2"
                    type='text'
                    placeholder="Tu nombre"
                    value={values.nombre}
                    onChange={handleInputChange}
                    name='nombre'
                />
                <input
                    className="form-control my-2"
                    type='email'
                    placeholder="Tu mail"
                    value={values.email}
                    onChange={handleInputChange}
                    name='email'
                /> 
                 <input
                    className="form-control my-2"
                    type='tel'
                    placeholder="Tu telefono"
                    value={values.tel}
                    onChange={handleInputChange}
                    name='tel'
                /> 

                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>              

            </form>
        </div>
    )
}

