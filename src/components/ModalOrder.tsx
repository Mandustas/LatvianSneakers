import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import example from '../imgs/example.png'
import example2 from '../imgs/example2.png'
import video from '../imgs/video.mp4'

function ModalOrder() {
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

    return (
        <div id="ModalOrder" style={{ display: "none" }} className="modal fade modal-dialog-scrollable" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" style={{ padding: "51px" }}>
                <div className="modal-content">
                    {/* <ImageGallery
                        items={images}
                        showPlayButton={false}
                        showFullscreenButton={false}
                        showBullets={true}
                        showThumbnails={false}
                    /> */}
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://sun9-54.userapi.com/impg/JLpJr7cUWS6bCnNVYCW3SprZuCgPg1RTXiXhAg/V0Y-Nv518mY.jpg?size=255x255&quality=96&sign=6f2419d7cbde4448f6d47875e431d918&type=album" className="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src="https://sun9-11.userapi.com/impg/86sOSCeIWARW-BcX901uyA2Ob8_Wr0lfTC_WeA/xTSPOHIb6Hg.jpg?size=255x255&quality=96&sign=54f21ebc92f37effa881f973758fd95f&type=album" className="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src="https://sun9-65.userapi.com/impg/2oNBWX3eqqEZ-o9Hh1HSViKyat8mHpAXBqVt0Q/IIba8yAhB4w.jpg?size=255x255&quality=96&sign=2cc1025050face68687b16b92a5efedf&type=album" className="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <video width="400" height="300" controls>
                                    <source src={video} type="video/mp4"></source>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalOrder
