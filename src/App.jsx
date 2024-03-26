import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Produtos from './Produtos';
import Header from './Header';
import Footer from './Footer';
import Contato from './contato';
import Produto from './Produto';




const App = () =>{
  
  return <div className='app'>
    
    <BrowserRouter>
    <Header />
    <div className='content'>
       <Routes>
      <Route path='/' element={<Produtos />} />
      <Route path='produto/:id' element={<Produto />} />
      <Route path='contato' element={<Contato />} />
    </Routes>
    </div>
   
    <Footer />
    </BrowserRouter>
  </div>


}
export default App