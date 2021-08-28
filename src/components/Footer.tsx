import React from 'react'
import "./Footer.scss"
import logo from '../imgs/watermark_white.png'
import tg from '../imgs/tg.svg'
import inst from '../imgs/inst.svg'
import whatsup from '../imgs/whatsup.svg'
function Footer() {
    return (
        <>
            <div className="footer-wrapper">
                <div className="footer-container">
                    <div className="footer-logo">
                        <img src={logo} alt="" height="36px" width="157px" className=""></img>
                    </div>
                    <div className="footer-menu-wrapper">
                        <ul className="navbar-nav mb-2 mb-lg-0 footer-menu" >
                            <li className="nav-item">
                                <a className="nav-link active footer-menu-item" aria-current="page" href="/delivery">ДОСТАВКА</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link footer-menu-item" href="/rules">ПРАВИЛА</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link footer-menu-item" href="/reviews">ОТЗЫВЫ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link footer-menu-item" href="/orders">ЗАКАЗЫ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-socials">
                        <div className="footer-soc-networks-container">
                            <img src={inst} alt="" className="footer-soc-networks-item" onClick={() => {
                                document.location.href = "https://www.instagram.com/latviansneakers"
                            }}></img>
                            <img src={whatsup} alt="" className="footer-soc-networks-item" onClick={() => {
                                document.location.href = "https://wa.me/37122439139"
                            }}></img>
                            <img src={tg} alt="" className="footer-soc-networks-item" onClick={() => {
                                    document.location.href = "https://t.me/latviansneakers"
                                }}></img>
                        </div>
                    </div>

                    <div className="footer-contacts-container">
                        <div className="footer-contacts-line-containter">
                            <div className=" footer-contacts-address">
                                <a style={{ textDecoration: "none", color: " lightgray" }} href="mailto:pochta@email.com">pochta@email.com</a>
                            </div>
                        </div>
                        <div className="footer-contacts-line-containter">
                            <div className=" footer-contacts-address">
                                <a style={{ textDecoration: "none", color: " lightgray" }} href="tel:3 128 371 28 31">3 128 371 28 31</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
