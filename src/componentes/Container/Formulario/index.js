import { useState } from "react";
import "./Formulario.css";
const Formulario = () => {
    const [tarea, setTarea] = useState([]);
    // const [first, setfirst] = useState(second)
    const manejarEnvio = (e)=>{
        e.preventDefault();
        const nuevaTarea = {valor: e.target.elements.elemNuevaTarea.value};
        const tareasExistentes = [...tarea, nuevaTarea];
        setTarea(tareasExistentes);
        console.log(tareasExistentes);
    }
    const manejarCampo = (e) =>{
        // console.log(e.target.value);
        // setTarea(e.target.value)
    } 
    return (
    <form onSubmit={manejarEnvio}>
        <input 
        type='text' 
        placeholder='Agregar tarea...'
        onChange={manejarCampo} 
        name='elemNuevaTarea'
        />
        <button className='btn-add'>+</button>
        {tarea.map((t, index) => <p key={index}>{t.valor}</p>)}
    </form>
    )
}

export default Formulario