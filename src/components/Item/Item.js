import React from 'react';
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
            <span>${precio}</span>
            <div>
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
            </div>
        </div>
    );
}

export default Item 