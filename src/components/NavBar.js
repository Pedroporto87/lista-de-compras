import React, { useContext } from "react";
import {BuyContext} from "../contexts/BookContext";
import '../index.css'
const NavBar = () => {
  const { itens } = useContext(BuyContext)
  return(
    <div className="navbar">
      <h1>Lista de Compras</h1>
      <p>Temos que comprar { itens.length } itens...</p>
    </div>
   )
}
export default NavBar

 
