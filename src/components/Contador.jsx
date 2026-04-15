import { useState } from "react";

function Contador() {

    const [contador, setContador] = useState(0);

    return ( 
    <div>
        <p>Contador: { contador }</p>
        <button onClick={ () => setContador(contador + 1) }>Incrementar</button>
        <button onClick={ () => setContador(contador + 5) }>Incrementar 5</button>

        <button onClick={ () => setContador(contador - 1) }>Decrementar</button>

        <button onClick={ () => setContador(0) }>Reiniciar</button>
    </div>);
}

export default Contador;