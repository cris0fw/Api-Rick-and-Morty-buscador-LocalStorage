import React from 'react'
import {useFormulario} from '../hooks/useFormulario'
import Swal from 'sweetalert2'

const Formolario = ({setValor}) => {
const initialState = {
    nombre: ''
}

const [input, handleChange, reset] = useFormulario(initialState)

const {nombre} = input

const handleSubmit = (e) => {
    e.preventDefault()

    if(!nombre.trim()){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No puede contener espacios vacios',
          })
        return
    }
    if(nombre === ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No puede estar vacio',
          })
    }

    console.log(nombre.trim().toLowerCase())
    setValor(nombre.trim().toLowerCase())
    reset()
}

    return <>
     <h1 className='text-center'>Formulario</h1>
        <div className='col-lg-5'>
            <form onSubmit={handleSubmit} className="d-flex">
                <input 
                    className='form-control'
                    placeholder='Busque su personaje'
                    type="text"
                    name="nombre"
                    onChange={handleChange}
                    value={nombre}
                />
               <button className='btn btn-danger' type='submit'>Enviar</button>
            </form>
        </div>
    </>
}

export default Formolario