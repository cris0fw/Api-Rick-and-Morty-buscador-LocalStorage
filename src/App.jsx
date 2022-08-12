import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Formolario from './components/Formolario'
import PintarDatos from './components/PintarDatos'

const App = () => {
const [valor, setValor] = useState("")

useEffect(() => {
  if(localStorage.getItem("apiNombre")){
    setValor(JSON.parse(localStorage.getItem("apiNombre")))
  }
},[])

useEffect(() => {
  localStorage.setItem("apiNombre", JSON.stringify(valor))
}, [valor])

  return <>
    <div className='container'>
        <div className='row m-auto'>
            <Formolario setValor={setValor}/>

            <PintarDatos valor={valor}/>
        </div>
    </div>
  </>
}

export default App