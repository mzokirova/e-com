import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import  Header  from './components/Header/Header';
import  Home  from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Products  from './components/Pages/Products/Products';
import SingleProduct from './components/Pages/SingleProduct/SingleProduct';
import  Posts  from './components/Pages/Posts/Posts';
import  Error  from './components/Pages/Error/Error';

import Footer from './components/Footer/Footer';
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>} />
          <Route path='/products/:productId' element={<SingleProduct/>} />
          <Route path='/posts' element={<Posts />} />
          <Route path='*' element={<Error/> } />
        </Routes>
    <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
