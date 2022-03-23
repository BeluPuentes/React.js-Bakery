import React from 'react';
import {Link} from 'react-router-dom'
import './Item.css';

function Item (props){
    const{id, nombre, descripcion, precio, pictureUrl}=props

    return (
        <div
            key={id}
            className={"product"}
        >
            <img
                src={pictureUrl}
                alt={`Image of ${nombre}`}
                className={"image-product"}
            />
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <span>Precio: $ {precio}</span> 
            <div>
                <Link to={`/detail/${id}`}> 
                
                <button
                    className="snipcart-add-item"
                    data-item-id={id}
                    data-item-image={pictureUrl}
                    data-item-name={nombre}
                    data-item-url="/"
                    data-item-price={precio}
                >
                    Add to Cart
                </button>
                </Link>
            </div>
        </div>
    );
}

export default Item 