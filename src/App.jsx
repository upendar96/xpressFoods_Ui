import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProductMenu from './components/ProductMenu'
import Welcome from './components/Welcome'
import OrderHistory from './extra/OrderHistory'
import FirmCollections from './components/FirmCollections'

import './App.css'
import DineOut from './components/DineOut'
import RaiderRegister from './raider/RaiderRegister'
import RaiderLogin from './raider/RaiderLogin'
import Cart from './folders/Cart'
import Profile from './folders/Profile'





const App = () => {
  
    
  return (
    <>


    <div>
    
     <Router>
      <Routes>
          <Route path='/' element = { <LandingPage />} />
          <Route path='/welcome' element = {<Welcome />} />
        <Route path='/products/:firmId/:firmName' element = {<ProductMenu />} />
        <Route path='/firmcollection' element={<FirmCollections/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/profile' element={<Profile/>}/>

        <Route path='/orderhistory' element={<OrderHistory/>}/>
        <Route path='/dine' element={<DineOut/>}/>
        <Route path='/rider' element={<RaiderRegister/>}/>
        <Route path='/riderlog' element={<RaiderLogin/>}/>
        
       
     
        
       
       
      </Routes>
      </Router>
    </div>
    </>
  )
}

export default App