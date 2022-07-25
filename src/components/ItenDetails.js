import React, {useContext } from "react";
import { BuyContext }  from "../contexts/BookContext";
import '../index.css'


const ItenDetails = ({itens}) => {
  const { deleteItens }  = useContext(BuyContext)
  return ( 
  <>
    {itens.map((itens)=> (
      <li key={itens.id} onClick={() => deleteItens(itens.name) }>
        <div className="item"> { itens.name } </div>
        <div className="preço"> {itens.preço} </div>
      </li>
     )     
    )
  }
 </>
)};
export default ItenDetails
