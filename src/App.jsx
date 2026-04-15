import './App.css'
import Saludar from './components/Saludar'
import Producto from './components/Producto'
import Contador from './components/Contador'
import TarjetaUsuario from './components/TarjetaUsuario'

function App() {
  

  return (
  <> 
    <Saludar name="Delveloper"/>
    <Saludar name="Pepe"/>

    <Producto nombre="Laptop" precio={999.99} />  
    <Producto nombre="Smartphone" precio={499.99} />  

    <Contador />
    <Contador />

    <TarjetaUsuario nombre="María" edadInicial={25} />
    <TarjetaUsuario nombre="Juan" edadInicial={30} />


  </>

    
    
  )
}

export default App
