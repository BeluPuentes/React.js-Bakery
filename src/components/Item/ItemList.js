import Item from './Item'
import './Item.css'

function ItemList({lista}){
    
    return(
        <div className={"container"}>
            <main className={"main"}>
                <div className={"grid"}>
                    {lista.map((list) =>
                        <Item key={list.id} id={list.id} nombre={list.nombre} precio={list.precio} descripcion={list.descripcion} stock={list.stock} pictureUrl= {list.pictureUrl}
                        />)}
                </div>

            </main>
        </div>
    )

}

export default ItemList