import React, {useState, useEffect} from 'react';
import './App.css';
import FormularioTareas from './components/FormularioTareas';
import Header from './components/Header'
import ListaTareas from './components/ListaTareas';

const App = () => {
  //Obtenemos las cosas guardadas en el localStorage
  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];
  const mostrarCompletadasGuardada = localStorage.getItem('mostrarCompletadas') ? JSON.parse(localStorage.getItem('mostrarCompletadas')) : true;

  const [tareas, cambiarTareas] = useState(tareasGuardadas);
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(mostrarCompletadasGuardada);


  useEffect(()=>{
      localStorage.setItem('tareas',JSON.stringify(tareas)); //el método setItem guarda algo en el servidor local, el primer parámetro es el nombre del "archivo" y el segundo es UNA CADENA DE TEXTO que se almacena
  },[tareas]); //Sólo cambia al iniciar y cuando el estado de tareas cambie

  useEffect(()=>{
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  },[mostrarCompletadas]);

  return (
    <div className="contenedor">
      <Header mostrarCompletadas={mostrarCompletadas} cambiarMostrarCompletadas={cambiarMostrarCompletadas}/>
      {/*le damos atributos al formulario para que podamos usarlos en el archivo del componente*/}
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/> 
      <ListaTareas 
        tareas={tareas} 
        cambiarTareas={cambiarTareas} 
        mostrarCompletadas={mostrarCompletadas}          
      />
    </div>
  );
}

export default App;