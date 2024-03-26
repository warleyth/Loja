import React from "react";
import foto from './contato.jpg'

const contato = () =>{

  return <section className=" animelado contato container">
    <img src={foto} alt="maquina" />
    <div>
      <h1>Entre em contato.</h1>
      <ul className="contato2">
        <li>Warleyrodriguesth@gmail.com</li>
        <li>Tel:99999-9999</li>
        <li>Rua: Ali perto, 999</li>
      </ul>
    </div>
    
  </section>
}

export default contato