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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <HeaderBrends></HeaderBrends>
        <div className="app-wrapper">
          <div className="app-container">


            <Switch>
              <Route
                exact
                path="/">
                <Home></Home>
              </Route>
              <Route
                path="/shop/:brandid(\d+)/:modelid(\d+)?">
                <Home></Home>
              </Route>
              <Route
                path="/product/:id(\d+)">
                <Product></Product>
              </Route>
              <Route
                path="/reviews">
                <Reviews></Reviews>
              </Route>
              <Route
                path="/orders">
                <Orders></Orders>
              </Route>
              <Route
                path="/rules">
                <Rules></Rules>
              </Route>
              <Route
                path="/delivery">
                <Delivery></Delivery>
              </Route>
            </Switch>


            {/* <Home></Home> */}
            {/* <Product></Product> */}
            {/* <Reviews></Reviews> */}
            {/* <Orders></Orders> */}
            {/* <Rules></Rules> */}
            {/* <Delivery></Delivery> */}
          </div>
        </div>
      </Router>

      <Footer></Footer>
    </div>
  )
}

export default App
