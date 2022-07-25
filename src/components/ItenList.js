import React, { useContext } from "react";
import { BuyContext } from "../contexts/BookContext";
import ItenDetails   from './ItenDetails';
import '../index.css'
const ItenList= () => {
  const { itens } = useContext(BuyContext)
  return itens.length ? (  
   <div className= 'item-list'>
    <ul>
      <ItenDetails itens={itens}/>
        )
    </ul>

    </div>
   ): (
    <div classname='empty'>
      <p>Sem items para comprar, dinheiro no bolso!!</p>
    </div>
   )
 } 
export default ItenList