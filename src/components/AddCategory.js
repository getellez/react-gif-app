import PropTypes from 'prop-types'
import React, { useState } from 'react'

/* 

- AddCategory es un componente que recibe la función de agregar categoría del componente padre.
- AddCategory retorna un formulario que contiene un input:text y su estado(del componente) 
  cambia dependiendo del valor del input.
- 

*/

export const AddCategory = ({ setCategories }) => {
  
  const [inputValue, setInputValue] = useState('')
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length > 2) {
      setCategories(categories => [inputValue, ...categories])
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Ingresa el nombre de un heroe"
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}