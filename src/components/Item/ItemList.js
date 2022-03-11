import { StylesContext } from '@material-ui/styles'
import React from 'react'
import Item from './Item'
import './Item.css'

function ItemList({lista}){
    return(
        <div className={"container"}>
            <main className={"main"}>
                <div className={"grid"}>
                    {lista.map((list) =>
                        <Item id={lista.id} nombre={list.nombre} precio={list.precio} descripcion={list.descripcion} stock={list.stock} pictureUrl= {list.pictureUrl}
                        />)}
                </div>

            </main>
        </div>
    )

}

export default ItemList