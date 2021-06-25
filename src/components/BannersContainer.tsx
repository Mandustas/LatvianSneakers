import React from 'react'
import instbanner from '../imgs/instbanner.png'
import Carousel from './Carousel'
import "./BannersContainer.scss"

function BannersContainer() {
    return (
        <>
            <div className="container-fluid banners-container">
                <div className="row banners-container-row">
                    <div className="col-md-12 col-lg-3 m-auto banners-inst">
                        <img className="img-fluid" src={instbanner} alt="banner" />
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
