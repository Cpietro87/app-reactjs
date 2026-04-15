import { useState } from "react";


function TarjetaUsuario({ nombre, edadInicial }) {

    const [edad, setEdad] = useState(edadInicial);

    return ( 
    <div>
        <h2>{nombre}</h2>
        <p>Edad: {edad}</p>
        <button onClick={ () => setEdad(edad + 1) }>Cumplir Años</button>
    </div>);
}

export default TarjetaUsuario;