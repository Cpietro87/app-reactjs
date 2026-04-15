import './App.css'
import Saludar from './components/Saludar'
import Producto from './components/Producto'
import Contador from './components/Contador'
import TarjetaUsuario from './components/TarjetaUsuario'
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';

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

    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>  
    <Button variant="outlined">Outlined</Button>

    <Pagination count={10} />
    <Pagination count={10} color="primary" />
    <Pagination count={10} color="secondary" />
    <Pagination count={10} disabled />

  </>

    
    
  )
}

export default App
