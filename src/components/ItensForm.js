import React, {useState, useContext, useRef } from "react";
import { BuyContext } from '../contexts/BookContext'

const NewItem = () => {
  const {addItens} = useContext(BuyContext)
  const [name, setName] = useState('')
  const [preço, setPreço] = useState('R$','')
  const inputElement = useRef()
  //const sifrão = useRef('R$')
  const handleChange = (e) => {
    e.preventDefault()
    addItens(name,preço)
    inputElement.current.focus()
    setName('')
    setPreço('R$','')
    
  } 
  return (
    <form onSubmit={handleChange}>
      <input type='text' value={name} required ref={inputElement} onChange={(e) => setName(e.target.value)}
      placeholder='Coloque seu item'></input>
      <input type='text' value={preço} required onChange={(e) => setPreço(e.target.value)}
      placeholder='Adicione seu preço'></input>
      <input type='submit' value='Adicionar'></input>
    </form>
 )
}
export default NewItem