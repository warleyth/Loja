import React from "react";
import { NavLink } from "react-router-dom";
import Contato from "./contato";

const Header = () =>{

  return <div className="header">
     <nav >
    <ul>
      <li>
        <NavLink className='link' to="/" > Home </NavLink>
      </li>
      <li>
        <NavLink className='link' to="Contato" > contato </NavLink>
      </li>
    </ul>

  </nav>
  </div>
 
}

export default Header