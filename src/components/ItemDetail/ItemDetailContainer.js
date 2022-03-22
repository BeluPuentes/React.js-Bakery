import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../helpers/pedirDatos'
import {ItemDetail}  from './ItemDetail'

const ItemDetailContainer = () => {
    const { itemid } = useParams();
  
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
  
      pedirDatos()
        .then((res) => {
          setItem(res.find((prod) => prod.id === parseInt(itemid)));
        })
        .finally(() => {
          setLoading(false);
        });
    }, [itemid]);
  
    return <div>{loading ? <h2>Cargando...</h2> : <ItemDetail {...item} />}</div>;
  };
  
export default ItemDetailContainer