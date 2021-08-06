import React, { useEffect, useState } from 'react'
import ShopBreadcrumbs from './ShopBreadcrumbs'
import tg from '../imgs/tg.svg'
import inst from '../imgs/inst.svg'
import "./Product.scss"
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import { useParams } from 'react-router-dom'
import { IProduct } from './ShopList'
import config from '../config/config.json'
import axios from 'axios'
import { ISize } from './FilterPanel'
import { useActions } from '../hooks/useActions'

export interface IGallery {
    original: string;
    thumbnail: string;
}

function Product() {
    const [product, setProduct] = useState<IProduct>();
    const [gallery, setGallery] = useState<IGallery[]>([]);
    const { changeBreadcrumbs } = useActions()
    changeBreadcrumbs(product?.brandId, product?.model.id)
    let { id } = useParams<{ id: string }>();

    useEffect(() => {
        axios.get<IProduct[]>(config.API_SERVER_URL + "product?Id=" + id)
            .then(({ data }) => {
                setProduct(data[0])
            })
    }, [id])

    useEffect(() => {

        let images: IGallery[] = []
        if (product != undefined) {
            product?.images.forEach(img => images.push({
                original: img.path,
                thumbnail: img.path
            }))
        }
        setGallery(images)

    }, [product])


    return (
        <>
            <div className="product-wrapper">
                <div className="container-fluid product-container">

                    <ShopBreadcrumbs product={product?.title}></ShopBreadcrumbs>
                    <div className="row mt-3">
                        <div className="col-lg-5 col-md-12">
                            <div className="product-gallery-desctop">
                                <ImageGallery
                                    items={gallery}
                                    showPlayButton={false}
                                    showFullscreenButton={false}
                                />
                            </div>
                            <div className="product-gallery-mobile">
                                <ImageGallery
                                    items={gallery}
                                    showPlayButton={false}
                                    showFullscreenButton={false}
                                    showBullets={true}
                                    showThumbnails={false}
                                />
                            </div>

                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="product-sticker-block">
                                <div className="product-sticker-block popular">POPULAR</div>
                                <div className="product-sticker-block new">NEW</div>
                                <div className="product-sticker-block sale">SALE</div>
                            </div>
                            <div className="product-title">
                                {product?.title}
                            </div>
                            <div className="product-sizes-container">
                                <div className="product-sizes-title">
                                    ДОСТУПНЫЕ РАЗМЕРЫ
                                </div>
                                <div className="product-sizes-list">
                                    {product?.sizes.map((size: ISize) => (
                                        <div className="product-sizes-item">{size.value}</div>

                                    ))}
                                </div>
                            </div>
                            <div className="product-price-container">
                                <div className="product-price-actual">
                                    {
                                        product?.discount != 0 ? product?.discount : product?.price
                                    }€
                                </div>
                                <div className="product-price-old">
                                    {
                                        product?.discount != 0 ? product?.price : null
                                    }
                                    {
                                        product?.discount != 0 ? "€" : null
                                    }
                                </div>
                            </div>
                            <div className="product-buybutton" onClick={() => {
                                document.location.href = "https://wa.me/37122439139"
                            }}>
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
                                    <div className="product-socials-inst-title" onClick={() => {
                                        document.location.href = "https://www.instagram.com/latviansneakers"
                                    }}>Instagram</div>
                                </div>
                                <div className="product-socials-item product-socials-telegram-container">
                                    <div className="product-socials-telegram-icon">
                                        <img src={tg} alt="" className="product-socials-telegram-img"></img>
                                    </div>
                                    <div className="product-socials-telegram-title" onClick={() => {
                                        document.location.href = "https://t.me/latviansneakers"
                                    }}>Telegram</div>
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
