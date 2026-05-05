//Analizar distintos fragmentos de código en React que contienen errores relacionados con useEffect, 
//identificarlos y proponer una solución correcta

// Ejercicio Nº 1
import { useState, useEffect } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    setContador(contador + 1);
  }, [contador]);

  return <h2>{contador}</h2>;
}

// Ejercicio Nº 2
import { useState, useEffect } from "react";

function Saludo() {
  const [nombre, setNombre] = useState("Juan");

  useEffect(() => {
    console.log("Hola " + nombre);
  }, []);

  return (
    <button onClick={() => setNombre("Pedro")}>
      Cambiar nombre
    </button>
  );
}
// Ejercicio Nº 3
import { useState, useEffect } from "react";

function Reloj() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSegundos(s => s + 1);
    }, 1000);
  }, []);

  return <h2>{segundos}</h2>;
}

// Ejercicio Nº 4
import { useState, useEffect } from "react";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsuarios(data));
  }, [usuarios]);

  return (
    <ul>
      {usuarios.map(u => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

// ejercicio Nº 5
import { useState, useEffect } from "react";

function App() {
  const [contador, setContador] = useState(0);

  const saludar = () => {
    console.log("Hola");
  };

  useEffect(() => {
    saludar();
  }, [saludar]);

  return (
    <button onClick={() => setContador(contador + 1)}>
      {contador}
    </button>
  );
}

// Ejercicio Nº 6
import { useState, useEffect } from "react";

function Usuario() {
  const [user, setUser] = useState({ nombre: "Ana", edad: 20 });

  useEffect(() => {
    setUser({ edad: 21 });
  }, []);

  return <h2>{user.nombre} - {user.edad}</h2>;
}

// Ejercicio Nº 7
import { useState, useEffect } from "react";

function Suma() {
  const [a, setA] = useState(2);
  const [b, setB] = useState(3);
  const [resultado, setResultado] = useState(0);

  useEffect(() => {
    setResultado(a + b);
  }, [a, b]);

  return <h2>{resultado}</h2>;
}