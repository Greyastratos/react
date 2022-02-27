/*import React, { useEffect, useState } from 'react'

const ComponentState = () => {

    /*contador: funcion para guardar el contador
    setContador: funcion para alterar el valor del contador

    *
    const [contador, setContador]= useState(0) //esto es un hook

//ej async
const productos =[
    {
        id:'1', 
        name:'mac',
        description:" ",
        stock:3
    },{
        id: '2',
        name:'pepe',
        description:" ",
        stock:3
    }
]
const nombres = ['martin','maria','mariana']
                        
   

    useEffect(()=>{/* voy a meter un promise para simular el obtener datos de un servidor 
       // promesa() llamamos metodo promesa
       getProducts()
        console.log('se ejecuto el efecto');
        return ()=>{
            console.log('limpieza amount');
        }
    },[] ) //Se le agrega un array vacio para indicar que solo se ejecutara cuando se monte el componente

    const getProducts =() =>{
        console.log('inicia mi promesa')
        const miPromesa = new Promise( (resolve, reject)=>{
            setTimeout(() => {
                resolve(productos)
            }, 3000);
        })
        miPromesa.then(respons =>{
            console.log(respons);
        })
    }

/*const promesa = () => { // es para ejecutar la funcion al momento de montar el componente 'las primesas son vanilla js'
    console.log('inicia mi funcion promesa');  
    
    
    const miPromesa = new Promise( (resolve, reject)=>{
                                         //Aca vamos a definir que pasa si resuelve y que pasa si se rechaza
                                        //le agregamos una condicion para practicar
   if (Math.random() < 0.5){
        reject('se rechazo')
    }else{
        resolve('la promesa se resolvio')
    }
//   resolve('la promesa se resolvio')
// reject('se rechazo')
    })
    miPromesa.then((res)=>{//esto es lo que se encarga de mostrar el resultado
        console.log(res);
    } /* se puede hacer asi, (err)=>{
        console.log(err); //nesesitamos agregar esto para cachar el rejected
    } o se puede usar un .catch para agarrar 1 o mas errores
    ).catch(e =>{
        console.log(e);
    }).finally(()=>{ //es un metodo que no importa si es rechazada o no la promesa se ejecuta igual
        console.log('finally siempre se ejecuta al final')
    })


    const sumarHandler = () => {
   /*     setContador(3)                  cambiara el valor a 3 antes tenia estado 0 por useState(0) 
          setContador((valorPrevio) => {      //ahora quiero recivir el valor anterior y sumarle 1 para eso usamos una funcion anonima
              setContador(++valorPrevio) //Tambien se podia hacer setContador(contador +1)
          })
    }
    const restarHandler = ()=>{
        setContador((valorPrevio) =>{
            setContador(--valorPrevio)
        })
    }
    //esto esta guardado de esta forma porque cada vez que se ejecuta la funcion se genera un nuevo render
console.log('Render componente Estado');//al estar fuera se ejecutara cada vez que se renderee
    return (
        <>
          <div>Compnente estado </div>
           total: {contador}
           <br/>
           <button onClick={ sumarHandler} > + </button>
           <br/>
           <button onClick={ restarHandler} > - </button>
           <br />
           {nombres.map((n,i)=> <li key={i}>{n}</li>)}
           {productos.map( producto => <li key={producto.id}>{producto.name}</li>)}
        </>
    )
}

export default ComponentState
*/