import React from "react";
import { useParams } from "react-router-dom";

const Produto = () =>{
  const [produto, setproduto] = React.useState(null)
  const {id} = useParams();

  React.useEffect(() => {
    async function linkprodutos(url){
      const res = await fetch(url)
      const json = await res.json()
      setproduto(json)

    }
    linkprodutos(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
    

  },[id])
if(produto === null) return null
  return <section>
    <div className="animelado produ container">
      
      <div>
         <img src={produto.fotos[0].src} alt="" />
      </div>
      <div className="produ1" >
        <h1>{produto.nome}</h1>
      <span className="preco">R$ {produto.preco}</span>
      <p>{produto.descricao}</p>
      <button>Comprar</button>
      </div>
     
      
    </div>
  </section>
}

export default Produto