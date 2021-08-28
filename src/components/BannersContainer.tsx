import React from 'react'
import instbanner from '../imgs/instbanner.jpg'
import Carousel from './Carousel'
import "./BannersContainer.scss"
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function BannersContainer() {
    const { t, i18n } = useTranslation();

    let { brandid, modelid } = useParams<{ brandid: string, modelid: string }>();
    if (brandid != undefined || modelid != undefined) {
        $('.banners-container').css('display', 'none');

    }
    return (
        <>
            <div className="container-fluid banners-container">
                <div className="row banners-container-row">
                    <div className="col-md-12 col-lg-3 m-auto banners-inst">
                        <img className="img-fluid banner-inst-img" src={instbanner} alt="banner" />
                        <div className="banner-inst-title">{t("Shop.InstBanner")}</div>
                        <div className="banner-inst-button" onClick={() => {
                            document.location.href = 'https://www.instagram.com/latviansneakers';
                        }}>{t("Shop.InstBannerBtn")}</div>
                    </div>
                    <div className="col-md-12 col-lg-9 banners-slider">
                        <Carousel></Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannersContainer
