import React, { useState, useEffect } from "react";
import ItemList from "../Item/ItemList";
import {useParams} from 'react-router-dom';
import { db } from "../../firebase/config";
import {collection, getDocs, query, where} from "firebase/firestore"

const ItemListContainer = () => {
 
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false)

  console.log (productos)
  const {categoryId} = useParams ();
  


  useEffect (()=>{
    setLoading(true)

    const productosRef = collection(db, "productos")
    const q = categoryId ? query (productosRef, where("categoria","==", categoryId)) : productosRef
    getDocs(q)
      .then((resp) => {
        setProductos(resp.docs.map((doc)=> {
            return {
                id: doc.id,
                ...doc.data()
            }
        }))
      })
      .finally(()=>{
        setLoading(false)
      })
    

   
  },[categoryId])


  return <ItemList lista={productos}/>
}
  
  
  
 export default ItemListContainer;
