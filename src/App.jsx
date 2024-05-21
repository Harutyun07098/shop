
import './App.css'
import React from 'react'
import { Routes,Route, Outlet } from 'react-router-dom'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Outtel from './components/Outlet/Outtel'
function App({data}) {
  return (
    <div className='App'>
    
    <Routes>
      <Route path='/' element={<Outtel />}>
      <Route index element={<Home />}/>
     <Route path='/products' element={<Products data = {data}/>}/>
    
      </Route>
    
    </Routes>
    </div>
   
     
  )

    
}

export default App
