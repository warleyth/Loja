import React from "react";
import { Link, NavLink, Route, json } from "react-router-dom";


const Produtos = () =>{
  const [Produtos, setprodutos] = React.useState(null)

  React.useEffect(()=>{
    fetch('https://ranekapi.origamid.dev/json/api/produto').then(r => r.json().then(json => setprodutos(json) ))

  }, [])
  if(Produtos === null) return null
  return <div className="animelado produtos container " >{Produtos.map((item=> <Link className="top" to={`Produto/${item.id}`} key={item.id}>
    <img className="bgl" src={item.fotos[0].src} alt="" />
     <h3>{item.nome}</h3>
     <p>a partir  de R${item.preco}</p>
     </Link> ) )}</div> 

}

export default Produtos