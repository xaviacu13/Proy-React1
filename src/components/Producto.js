import React from 'react';

const Producto = ({producto,carrito,agregarProducto,productos}) => {
//agregar producto al carrito
const seleccionarProducto= id=>{
   // console.log('Comprando...',{id});
   const producto = productos.filter(producto =>producto.id===id)[0];
   
   agregarProducto([
       ...carrito,
       producto
    ]);
   
    
}

   // quitar Producto del carrito

   const quitarProducto= id =>{
       const producto= carrito.filter(producto => producto.id !== id);
       agregarProducto (producto)
   }



    const {nombre, precio,id}=producto
    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            {productos
            ?
            ( 
            <button 
                type='button'
                onClick={  () => seleccionarProducto(id)}
            >Agregar</button>
            )
            :
             (
                <button 
                type='button'
                onClick={  () => quitarProducto(id)}
            >Quitar</button>

            )

            }
        </div>
       
     );
}
 
export default Producto;