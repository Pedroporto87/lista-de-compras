import React, { createContext , useState } from 'react'
import { v1 as uuidv1 } from 'uuid';



export const BuyContext = createContext()
 const BuyContextProvider = (props) => {
  
  const [itens, setItens] = useState([
    {name: 'Sabão em pó', preço: 'R$ 19,90', id:0},
    {name: 'Cerveja', preço: 'R$ 5,00', id:1},
  ])

  const addItens = (name, preço) => {
    setItens([...itens, {name: name, preço: preço, id:uuidv1() } ])
  }
  const deleteItens = (id) =>{
    setItens(itens.filter(item => item.name !== id))
  }
  return(
    <BuyContext.Provider value= {{itens, addItens, deleteItens}}>
      { props.children }
    </BuyContext.Provider>
  )
}
export default BuyContextProvider