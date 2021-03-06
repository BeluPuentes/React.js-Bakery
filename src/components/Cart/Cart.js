import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext);

    if (cart.length ===0){
        return <div className="my-4">
            <h2>Tu carrito esta vacio</h2>
            <button>
            <Link to='/' className="snipcart-add-item">Volver </Link>
            </button>
            
      </div>
    } 
 
  return (
    <>
      
        <div className=" my-4">
          <h2>Tu compra</h2>

          {cart.map((item) => (
            <div key={item.id}>
              <h4> {item.nombre}</h4>
              <p>Cantidad:{item.cantidad}</p>
              <p>Precio: ${item.cantidad * item.precio}</p>
              <button
                className="btn btn-danger"
                onClick={() => {
                  eliminarItem(item.id);
                }}
              >
                <BsFillTrashFill />
              </button>
            </div>
          ))}

          <hr />
          <h2>Total: ${totalCart()}</h2>

          <div className="my-2">
            <button className="btn btn-danger" onClick={vaciarCart}>
              Vaciar Carrito
            </button>
            <Link to="/checkout" className="btn btnn-success mx-2">
              <button>
                Terminar mi compra

              </button>
              
            </Link>
            
            <Link to='/' className="btn btn-primary">
                <button>
                    Seguir Comprando
                </button>
            </Link>

          </div>
        </div>
    </>
  );
};
