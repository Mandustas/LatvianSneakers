import axios from 'axios'
import React, { useEffect, useState } from 'react'
import config from '../config/config.json'
import "./Carousel.scss"

export interface IBanner {
    id: number;
    path: string;
    order: number;
}

function Carousel() {
    const [banners, setBanners] = useState<IBanner[]>([]);
    useEffect(() => {
        axios.get<IBanner[]>(config.API_SERVER_URL + "banner")
            .then(({ data }) => {
                setBanners(data)
            })
    }, [])


    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    {

                        banners.map((banner: IBanner, index) => (
                            <div className={index == 0 ? "carousel-item active" : "carousel-item"}>
                                <img src={banner.path} className="d-block w-100" alt="..."></img>
                            </div>

                        ))
                    }
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

export default Carousel
