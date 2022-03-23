import React, { useState, useEffect } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "../Item/ItemList";
import {useParams} from 'react-router-dom'

const ItemListContainer = () => {
 
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false)

  const {categoryId} = useParams ()


  useEffect (()=>{
    setLoading(true)
    pedirDatos()
      .then((res)=>{
        
        if (!categoryId){
          setProductos (res)
        } else{
          setProductos(res.filter((prod) => prod.categoria === categoryId))
        }
      })
      .catch((err)=>{
        console.log(err)
      })
      .finally(()=>{
        setLoading(false)
      })
  },[categoryId])

  return (
      <div className="flex">
        {
          loading
                 ? <h2>Cargando...</h2>
                 : <ItemList lista={productos}/>
        }
      </div>

  )
  }
  
  
  
 export default ItemListContainer;
