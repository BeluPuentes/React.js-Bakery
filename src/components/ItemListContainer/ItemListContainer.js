import React, { useState, useEffect } from "react";
import ItemList from "../Item/ItemList";

function ItemListContainer () {
  
  const [arrayItem, setArrayItem]= useState([
    
          {id:1, nombre:"Torta Oreo",descripcion:"Torta a base de galletitas oreo con dulce de leche", precio:"$2000", pictureUrl:"https://niampatisserie.com.ar/wp-content/uploads/2020/08/IMG_0433-Torta-Oreo-1.jpg"},
          {id:2, nombre:"Torta Brownie",descripcion:"Torta a base de de brownie con dulce de leche y terminada con merengue Italiano", precio:"$2000", pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4vgk0RRGMTQGNj6UlfXZ_fqpkJsds-37AUQ&usqp=CAU"},
          {id:3, nombre:"Red Velvet",descripcion:"Torta de tres capas de color rojo, decorada con un glaseado de queso cremoso", precio:"$2500", pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YMn2A_bwejVuvX0OmUUy_GUFGsr0cSa_xw&usqp=CAU"},
          {id:4, nombre:"Chocotorta",descripcion:"Torta a base de galletitas chocolinas con dulce de leche. Un clasico argentino", precio:"$2000", pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHxplXTLKsDuG4brH6XkH6j0jDScf8QIVEZA&usqp=CAU"},
          {id:5, nombre:"Rogel",descripcion:"Torta tradicional Argentina hecha por capas de galletitas hojaldradas, rellena con dulce de leche y terminada con un merengue Italiano ", precio:"$2500", pictureUrl:"https://cdn.cookwithbelula.com/receta/rogel/rogel-4x3.webp"},
          {id:6, nombre:"Lemon Pie",descripcion:"Masa quebrada, rellena de crema de limon y decorada con merengue italiano", precio:"$1500", pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW4c7HRGQGXz9Hhe5Ns6CtYXI4WQLVhmsE8A&usqp=CAU"},
          
  ])

  return (
    <div className="flex">
      <div>
        <ItemList lista={arrayItem}/>
      </div>
      

      
    </div>

  )

}
 export default ItemListContainer
