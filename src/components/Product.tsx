import React from 'react'
import ShopBreadcrumbs from './ShopBreadcrumbs'
import tg from '../imgs/tg.svg'
import inst from '../imgs/inst.svg'
import example from '../imgs/example.png'
import example2 from '../imgs/example2.png'
import "./Product.scss"
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";


const images = [
    {
        original: example,
        thumbnail: example,
    },
    {
        original: example2,
        thumbnail: example2,
    },
    {
        original: example,
        thumbnail: example,
    },
    {
        original: example2,
        thumbnail: example2,
    },
];

function Product() {
    return (
        <>
            <div className="product-wrapper">
                <div className="container-fluid product-container">
                    <ShopBreadcrumbs></ShopBreadcrumbs>
                    <div className="row mt-3">
                        <div className="col-lg-5 col-md-12">
                            <div className="product-gallery-desctop">
                                <ImageGallery
                                    items={images}
                                    showPlayButton={false}
                                    showFullscreenButton={false}
                                />
                            </div>
                            <div className="product-gallery-mobile">
                                <ImageGallery
                                    items={images}
                                    showPlayButton={false}
                                    showFullscreenButton={false}
                                    showBullets={true}
                                    showThumbnails={false}
                                />
                            </div>

                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="product-title">
                                Air Jordan 1 Retro High OG 'University Blue' Godkiller
                            </div>
                            <div className="product-sizes-container">
                                <div className="product-sizes-title">
                                    ДОСТУПНЫЕ РАЗМЕРЫ
                                </div>
                                <div className="product-sizes-list">
                                    <div className="product-sizes-item">EUR 36</div>
                                    <div className="product-sizes-item">EUR 36</div>
                                    <div className="product-sizes-item">EUR 36</div>
                                    <div className="product-sizes-item">EUR 36</div>
                                    <div className="product-sizes-item">EUR 36</div>
                                    <div className="product-sizes-item">EUR 36</div>
                                    <div className="product-sizes-item">EUR 36</div>
                                    <div className="product-sizes-item">EUR 36</div>
                                    <div className="product-sizes-item">EUR 36</div>
                                </div>
                            </div>
                            <div className="product-price-container">
                                <div className="product-price-actual">
                                    399$
                                </div>
                                <div className="product-price-old">
                                    499$
                                </div>
                            </div>
                            <div className="product-buybutton">
                                ЗАКАЗАТЬ
                            </div>
                            <div className="product-buy-description">
                                Для оформления заказа вас перекинет в WhatsApp.<br></br><br></br>
                                Но вы можете сделать заказ через любую социальную сеть
                            </div>
                            <div className="product-socials-container">
                                <div className="product-socials-item product-socials-inst-container">
                                    <div className="product-socials-inst-icon">
                                        <img src={inst} alt="" className="product-socials-inst-img"></img>
                                    </div>
                                    <div className="product-socials-inst-title">Instagram</div>
                                </div>
                                <div className="product-socials-item product-socials-telegram-container">
                                    <div className="product-socials-telegram-icon">
                                        <img src={tg} alt="" className="product-socials-telegram-img"></img>
                                    </div>
                                    <div className="product-socials-telegram-title">Telegram</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product
