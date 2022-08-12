import React,{useState} from 'react'

export const useFormulario = (formulario = {}) => {
    const [input, setInputs] = useState(formulario)

    const handleChange = (e) => {
        const {name, value, checked, type} = e.target
    
        setInputs(
            {
                ...input,
                [name]: type === "checkbox" ? checked : value
            }
        )
    }

    const reset = () => {
        setInputs(formulario)
    }

    return [input, handleChange, reset]
}
