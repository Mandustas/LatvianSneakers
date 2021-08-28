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
import { useTranslation } from 'react-i18next'

export interface IGallery {
    original: string;
    thumbnail: string;
}

function Product() {
    const { t, i18n } = useTranslation();

    const [product, setProduct] = useState<IProduct>();
    const [gallery, setGallery] = useState<IGallery[]>([]);
    const { changeBreadcrumbs } = useActions()
    changeBreadcrumbs(product?.brandId, product?.model.id)
    let { id } = useParams<{ id: string }>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        axios.get<IProduct[]>(config.API_SERVER_URL + "product?Id=" + id)
            .then(({ data }) => {
                setProduct(data[0])
                setLoading(false);

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
                                {
                                    product?.isPopular && <div className="product-sticker-block popular">POPULAR</div>
                                }
                                {
                                    product?.isNew && <div className="product-sticker-block new">NEW</div>
                                }
                                {
                                    product?.isSale && <div className="product-sticker-block sale">SALE</div>
                                }
                            </div>
                            <div className="product-title">
                                {product?.title}
                            </div>
                            <div className="product-sizes-container">
                                <div className="product-sizes-title">
                                    {t("Shop.AvailableSizes")}
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
                                {t("Product.OrderBtn")}
                            </div>
                            <div className="product-buy-description">
                                <div className="mb-4">{t("Product.WhatsAppMsg")}</div>
                                <div className="">{t("Product.OtherSocsMsg")}</div>
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
            <div className={`overlayLoad ${loading ? "active" : null}`} ></div>
            {
                loading
                    ?
                    <div className="spinner-wrapper">
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </div>
                    :
                    null
            }
        </>
    )
}

export default Product
