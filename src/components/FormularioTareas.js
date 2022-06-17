import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons'

const FormularioTareas = ({tareas, cambiarTareas}) => { //Accedemos directo a los valores de esas propiedades (es como poner props)
    const [inputTarea, cambiarInputTarea] = useState('');

    const handeInput = (e) =>{
        cambiarInputTarea(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        cambiarTareas(
            [
                ...tareas, //Toma todo lo que ya estaba dentro de tareas
                {
                    id: uuidv4(), //Nos da un identificador único, tuve que descargar el paquete npm install uuid [https://www.npmjs.com/package/uuid]
                    texto: inputTarea,
                    completada: false
                }
            ]
        );
        cambiarInputTarea('');
    }
    return ( 
        <form action="" className='formulario-tareas' onSubmit={handleSubmit}>
            <input 
                type="text" 
                className='formulario-tareas__input' 
                placeholder='Escribe una tarea'
                value={inputTarea}
                onChange={handeInput}
            />
            <button 
                type='submit'
                className='formulario-tareas__btn'
            >
                <FontAwesomeIcon icon={faCirclePlus} className='formulario-tareas__icono-btn'/>
            </button>
        </form>
     );
}
 
export default FormularioTareas;