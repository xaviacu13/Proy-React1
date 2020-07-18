import React from 'react';
function  Saludo() {

    const edad =18;
    let mensaje ;
    if (edad>=18)
    {
        mensaje='Hola xavi eres mayor de edad'
    }
    else
    {
       mensaje='Hola xavi eres menos de edad'
    
    }


    return(
    <h2> {mensaje}</h2>
    ) 
}

export default Saludo;