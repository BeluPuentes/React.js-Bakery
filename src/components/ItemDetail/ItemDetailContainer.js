import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {ItemDetail}  from './ItemDetail'
import { db } from '../../firebase/config'
import {doc, getDoc} from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);

    const { itemId } = useParams()
    

    useEffect(() => {
      setLoading(true)
      const docRef = doc (db, "prductos", itemId)
      
      getDoc(docRef)
        .then((doc)=>{
            setItem({id: doc.id, ...doc.data()})
        })
        .finally(()=>{
          setLoading(false)
        })
  
     
    }, []);
  
    return (
      <div>
        {
          
          loading 
          ? <h2>Cargando...</h2> 
          : <ItemDetail {...item} />
        }
        
      </div>
    )
  
  };
  
export default ItemDetailContainer