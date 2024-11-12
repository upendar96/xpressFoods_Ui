import React from 'react'
import LandingPage from './pages/LandingPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import ProductMenu from './components/ProductMenu'
import Welcome from './components/Welcome'
import OrderHistory from './extra/OrderHistory'




const App = () => {
  
    
  return (
    <>

  
    <div>
      <Router>
      <Routes>
          <Route path='/' element = { <LandingPage />} />
          <Route path='/welcome' element = {<Welcome />} />
        <Route path='/products/:firmId/:firmName' element = {<ProductMenu />} />
        <Route path='/orderhistory' element={<OrderHistory/>}/>
        
       
       
      </Routes>
      </Router>
    </div>
    </>
  )
}

export default App