import React from 'react'
import logo from '../imgs/logo.svg'
import tg from '../imgs/tg.svg'
import inst from '../imgs/inst.svg'
import whatsup from '../imgs/whatsup.svg'
import phone from '../imgs/phone.svg'
import mail from '../imgs/mail.svg'
import latvian from '../imgs/latvian.svg'
import english from '../imgs/english.svg'
import russian from '../imgs/russian.svg'
import world from '../imgs/world.svg'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark header-wrapper">
                <div className="container-fluid header-container">
                    <a href="/">
                        <img src={logo} alt="" className="d-inline-block align-text-top"></img>
                    </a>
                    <div className="header-buttons d-flex">

                        <div className="dropdown  header-lang-wrapper-mobile" >
                            {/* <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown button
                            </button> */}
                            <div className="header-lang-container dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={world} alt="" className=""></img>
                                <div className="header-lang-actual">RU</div>
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">
                                    <div className="header-langmenu-item">
                                        <div className="header-langmenu-item-icon">
                                            <img src={latvian} alt="" className="header-lang-icon-img"></img>
                                        </div>
                                        <div className="header-langmenu-item-country">
                                            Latvija
                                        </div>
                                    </div>
                                </a>

                                <a className="dropdown-item" href="#">

                                    <div className="header-langmenu-item">
                                        <div className="header-langmenu-item-icon">
                                            <img src={english} alt="" className="header-lang-icon-img"></img>
                                        </div>
                                        <div className="header-langmenu-item-country">
                                            English
                                        </div>
                                    </div>
                                </a>

                                <a className="dropdown-item" href="#">
                                    <div className="header-langmenu-item">
                                        <div className="header-langmenu-item-icon">
                                            <img src={russian} alt="" className="header-lang-icon-img"></img>
                                        </div>
                                        <div className="header-langmenu-item-country">
                                            Russian
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="header-menu-container">
                            <div className="header-menu-button-close" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            </div>
                            <ul className="navbar-nav mb-2 mb-lg-0 header-menu" >
                                <li className="nav-item">
                                    <a className="nav-link header-menu-item header-menu-item-home" href="/">ГЛАВНАЯ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active header-menu-item" aria-current="page" href="/delivery">ДОСТАВКА</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link header-menu-item" href="/rules">ПРАВИЛА</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link header-menu-item" href="/reviews">ОТЗЫВЫ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link header-menu-item" href="/orders">ЗАКАЗЫ</a>
                                </li>
                            </ul>
                            <div className="header-soc-networks-container">
                                <img src={inst} alt="" className="header-soc-networks-item" onClick={() => {
                                    document.location.href = "https://www.instagram.com/latviansneakers"
                                }}></img>
                                <img src={whatsup} alt="" className="header-soc-networks-item" onClick={() => {
                                    document.location.href = "https://wa.me/37122439139"
                                }}></img>
                                <img src={tg} alt="" className="header-soc-networks-item" onClick={() => {
                                    document.location.href = "https://t.me/latviansneakers"
                                }}></img>
                            </div>
                            <div className="header-contacts-container">
                                <div className="header-contacts-line-containter">
                                    <div className="header-contacts-icon">
                                        <img src={mail} alt="" className="header-contacts-icon-img"></img>
                                    </div>
                                    <div className=" header-contacts-address">
                                        <a style={{ textDecoration: "none", color: " lightgray" }} href="mailto:pochta@email.com">pochta@email.com</a>
                                    </div>
                                </div>
                                <div className="header-contacts-line-containter">
                                    <div className="header-contacts-icon">
                                        <img src={phone} alt="" className="header-contacts-icon-img"></img>
                                    </div>
                                    <div className=" header-contacts-address">
                                        <a style={{ textDecoration: "none", color: " lightgray" }} href="tel:3 128 371 28 31">3 128 371 28 31</a>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown d-flex header-lang-wrapper-desctop" >
                                {/* <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown button
                            </button> */}
                                <div className="header-lang-container dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={world} alt="" className=""></img>
                                    <div className="header-lang-actual">RU</div>
                                </div>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">
                                        <div className="header-langmenu-item">
                                            <div className="header-langmenu-item-icon">
                                                <img src={latvian} alt="" className="header-lang-icon-img"></img>
                                            </div>
                                            <div className="header-langmenu-item-country">
                                                Latvija
                                            </div>
                                        </div>
                                    </a>

                                    <a className="dropdown-item" href="#">

                                        <div className="header-langmenu-item">
                                            <div className="header-langmenu-item-icon">
                                                <img src={english} alt="" className="header-lang-icon-img"></img>
                                            </div>
                                            <div className="header-langmenu-item-country">
                                                English
                                            </div>
                                        </div>
                                    </a>

                                    <a className="dropdown-item" href="#">
                                        <div className="header-langmenu-item">
                                            <div className="header-langmenu-item-icon">
                                                <img src={russian} alt="" className="header-lang-icon-img"></img>
                                            </div>
                                            <div className="header-langmenu-item-country">
                                                Russian
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
