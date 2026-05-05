
useEffect(() => {
  // código a ejecutar
}, [dependencias]);

// Sin dependencias
useEffect(() => {
  console.log("Se ejecuta siempre");
});

// Con dependencias
useEffect(() => {
  console.log("Se ejecuta solo cuando 'dependencia' cambia");
}, [dependencia]);

useEffect(() => {
  console.log("Cambió el contador");
}, [contador]);

import { useState, useEffect } from "react";

function Ejemplo() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("El contador cambió:", contador);
  }, [contador]);

  return (
    <button onClick={() => setContador(contador + 1)}>
      {contador}
    </button>
  );
}

// cleanup
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Intervalo activo");
  }, 1000);

  return () => {
    clearInterval(timer);
    console.log("Intervalo limpiado");
  };
}, []);



useEffect(() => {
  fetch("https://api.com/data")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);