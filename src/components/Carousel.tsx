import React from 'react'
// import slide_1 from '../imgs/slide_1.png'
// import slide_2 from '../imgs/slide_1.png'
// import slide_3 from '../imgs/slide_1.png'
import slide_1 from '../imgs/1.png'
import slide_2 from '../imgs/2.png'
import slide_3 from '../imgs/3.png'
import "./Carousel.scss"


function Carousel() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide_1} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={slide_2} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={slide_3} className="d-block w-100" alt="..."></img>
                    </div>
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
