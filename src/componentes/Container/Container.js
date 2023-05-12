import './Container.css'
import Formulario from './Formulario'

const Container = () => {
    return (
        <div className='container'>
            <div className='container-child'>
                <h1>Lista de Tareas</h1>
                <div className='search'>
                    <Formulario />
                </div>
                <div className='li-container'>
                    <ul>

                    </ul>
                </div>
                <div className='empty'>
                    <p>No tiene tareas pendientes.</p>
                </div>
            </div>
        </div>
    )
}

export default Container