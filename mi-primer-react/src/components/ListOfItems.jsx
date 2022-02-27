import React, { useEffect, useState } from 'react'


const ListOfItems = () => {
    const [items,setItems]= useState([])

    useEffect(()=>{
        getItems()
    },[])
    const getItems = ()=>{
        const URL = 'https://run.mocky.io/v3/c575ea6e-e519-49ea-b793-6a6660ede685'
        //https://run.mocky.io/v3/006727fe-13ac-429a-9108-ead1932a416b`

        fetch(URL).then(res => res.json().then(res => {
            console.log(res);
            setItems(res)
        }))
    } 
    return (
        <ul className="cont">
          {items.map(producto => <li key={producto.id} >{producto.name}{producto.price}{producto.articulo}{producto.gender}</li>)}
        </ul>
    )
}

export default ListOfItems
