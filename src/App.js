import React,{Fragment, useState} from 'react';
import Header from './components/Header';
import Saludo from './components/Saludo';
import Lugar from './components/Lugar';
import Perfil from './components/Perfil';
import Producto from './components/Producto';
import Footer from './components/Footer';
import Carrito from './components/Carrito'


function App() {

//crear listado de productos
  const [productos, guardarProductos]=useState([
    {id:1, nombre:'Camisa ReactJs',precio: 50},
    {id:2, nombre:'Camisa Angular',precio: 40},
    {id:3, nombre:'Camisa Laravel',precio: 45},
    {id:4, nombre:'Camisa Node.js',precio: 55},
    {id:5, nombre:'Camisa VuesJs',precio: 58}
  ]);


//state para un carrito de compras
const [carrito, agregarProducto]=useState([]);

// obtener fecha
const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header
       titulo ='Tienda Virtual'
       fecha= {fecha}

      />
        <h1>Lista de Productos</h1>
        {productos.map(producto =>(
          <Producto
              key={producto.id}
              producto={producto}
              productos={productos}
              carrito={carrito}
              agregarProducto={agregarProducto}
          />
        ))}
      <Carrito
      carrito={carrito}
      agregarProducto={agregarProducto}
      />
      <Footer
       fecha={fecha}
      />
      <Saludo />
      <Lugar/>
      <Perfil/>
      

      
    </Fragment>
  );
}

export default App;
