import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import arrayProductos from "./json/productos.json"

const ItemListContainer = () => {
    const [items, setItems]= useState([]);
    const {id} = useParams();



    useEffect(() => {
        const promesa = new Promise ((resolve) =>{
            setTimeout (() => {
                resolve( id ?arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            },2000);
        })
        promesa.then((repuesta) =>{
            setItems(repuesta);

        });


    }, [id]);



    return (
        <div className="container my-5">
                <ItemList  items={items}/>
                    <ItemCount  stock={10}/>
            </div>
    )
}

export default ItemListContainer;