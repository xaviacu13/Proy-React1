import React from 'react';
import './carrito.css';
import Producto from './Producto';
import Saludo from "./Saludo";


const Carrito = ({carrito,agregarProducto}) =>  (
    <div className="carrito">
        <h1>Tu Carrito de Compras</h1>
        {carrito.length === 0

        ?
        (
            <h2> No hay elementos en el carrito</h2>
        )
        : 
           
                carrito.map(producto =>(
                <Producto
            
                key={producto.id}
                producto={producto}
                carrito={carrito}
                agregarProducto={agregarProducto}
                />  
                
                ))
              
        
        }
    </div>
 );

 
export default Carrito;