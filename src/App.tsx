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
  useParams,
  Redirect
} from "react-router-dom";
import AdminLogin from './components/AdminLogin'
import AdminPanel from './components/AdminPanel'
import { useTypedSelector } from './hooks/useTypedSelector'
import AdminPanelBanner from './components/AdminPanelBanner'
import AdminPanelBannerEdit from './components/AdminPanelBannerEdit'
import AdminPanelBrand from './components/AdminPanelBrand'
import AdminPanelBrandEdit from './components/AdminPanelBrandEdit'
import AdminPanelModelEdit from './components/AdminPanelModelEdit'
import AdminPanelReview from './components/AdminPanelReview'
import AdminPanelReviewEdit from './components/AdminPanelReviewEdit'
import AdminPanelOrder from './components/AdminPanelOrder'
import AdminPanelOrderEdit from './components/AdminPanelOrderEdit'
import AdminPanelProduct from './components/AdminPanelProduct'
import AdminPanelProductEdit from './components/AdminPanelProductEdit'

function App() {
  const { isAuth } = useTypedSelector(state => state.auth)
  const auth = localStorage.getItem("token") != null ? true : false


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
              <Route
                path="/welcomeadmin">
                <AdminLogin></AdminLogin>
              </Route>
              <Route
                path="/adminpanel">
                {
                  auth && isAuth ?
                    <AdminPanel></AdminPanel>
                    :
                    // <Redirect to="/" />
                    <AdminPanel></AdminPanel>
                }

              </Route>
              <Route
                path="/adminpanel-banner">
                {
                  auth && isAuth ?
                    <AdminPanelBanner></AdminPanelBanner>
                    :
                    // <Redirect to="/" />
                    <AdminPanelBanner></AdminPanelBanner>
                }

              </Route>
              <Route
                path="/adminpanel-banner-edit/:id(\d+)?">
                {
                  auth && isAuth ?
                    <AdminPanelBannerEdit></AdminPanelBannerEdit>
                    :
                    // <Redirect to="/" />
                    <AdminPanelBannerEdit></AdminPanelBannerEdit>
                }
              </Route>
              
              <Route
                path="/adminpanel-brand">
                {
                  auth && isAuth ?
                    <AdminPanelBrand></AdminPanelBrand>
                    :
                    // <Redirect to="/" />
                    <AdminPanelBrand></AdminPanelBrand>
                }

              </Route>
              <Route
                path="/adminpanel-brand-edit/:id(\d+)?">
                {
                  auth && isAuth ?
                    <AdminPanelBrandEdit></AdminPanelBrandEdit>
                    :
                    // <Redirect to="/" />
                    <AdminPanelBrandEdit></AdminPanelBrandEdit>
                }
              </Route>
              <Route
                path="/adminpanel-model-edit/:brandid(\d+)/:id(\d+)?/">
                {
                  auth && isAuth ?
                    <AdminPanelModelEdit></AdminPanelModelEdit>
                    :
                    // <Redirect to="/" />
                    <AdminPanelModelEdit></AdminPanelModelEdit>
                }
              </Route>
              <Route
                path="/adminpanel-review">
                {
                  auth && isAuth ?
                    <AdminPanelReview></AdminPanelReview>
                    :
                    // <Redirect to="/" />
                    <AdminPanelReview></AdminPanelReview>
                }

              </Route>
              <Route
                path="/adminpanel-review-edit/:id(\d+)?">
                {
                  auth && isAuth ?
                    <AdminPanelReviewEdit></AdminPanelReviewEdit>
                    :
                    // <Redirect to="/" />
                    <AdminPanelReviewEdit></AdminPanelReviewEdit>
                }
              </Route>
              <Route
                path="/adminpanel-order">
                {
                  auth && isAuth ?
                    <AdminPanelOrder></AdminPanelOrder>
                    :
                    // <Redirect to="/" />
                    <AdminPanelOrder></AdminPanelOrder>
                }

              </Route>
              <Route
                path="/adminpanel-order-edit/:id(\d+)?">
                {
                  auth && isAuth ?
                    <AdminPanelOrderEdit></AdminPanelOrderEdit>
                    :
                    // <Redirect to="/" />
                    <AdminPanelOrderEdit></AdminPanelOrderEdit>
                }
              </Route>
              <Route
                path="/adminpanel-product">
                {
                  auth && isAuth ?
                    <AdminPanelProduct></AdminPanelProduct>
                    :
                    // <Redirect to="/" />
                    <AdminPanelProduct></AdminPanelProduct>
                }

              </Route>
              <Route
                path="/adminpanel-product-edit/:id(\d+)?">
                {
                  auth && isAuth ?
                    <AdminPanelProductEdit></AdminPanelProductEdit>
                    :
                    // <Redirect to="/" />
                    <AdminPanelProductEdit></AdminPanelProductEdit>
                }
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
