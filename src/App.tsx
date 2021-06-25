import React from 'react'
import "./App.css"
import Footer from './components/Footer'
import Header from './components/Header'
import HeaderBrends from './components/HeaderBrends'
import Home from './components/Home'
import Product from './components/Product'

function App() {
  return (
    <div>
      <Header></Header>
      <HeaderBrends></HeaderBrends>
      <div className="app-wrapper">
        <div className="app-container">
          {/* <Home></Home> */}
          <Product></Product>
        </div>
      </div>


      <Footer></Footer>
    </div>
  )
}

export default App
