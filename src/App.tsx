import React from 'react'
import "./App.css"
import Delivery from './components/Delivery'
import Footer from './components/Footer'
import Header from './components/Header'
import HeaderBrends from './components/HeaderBrends'
import Home from './components/Home'
import Orders from './components/Orders'
import Product from './components/Product'
import Reviews from './components/Reviews'
import Rules from './components/Rules'

function App() {
  return (
    <div>
      <Header></Header>
      <HeaderBrends></HeaderBrends>
      <div className="app-wrapper">
        <div className="app-container">
          {/* <Home></Home> */}
          {/* <Product></Product> */}
          {/* <Reviews></Reviews> */}
          <Orders></Orders>
          {/* <Rules></Rules> */}
          {/* <Delivery></Delivery> */}
        </div>
      </div>


      <Footer></Footer>
    </div>
  )
}

export default App
