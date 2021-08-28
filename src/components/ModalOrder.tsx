import { map } from 'jquery';
import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import { IOrderImage } from './Orders';
import { IGallery } from './Product';
import "./ModalOrder.scss"

interface ModalOrderProps {
    images: IOrderImage[]
}

function ModalOrder({ images }: ModalOrderProps) {
    const [gallery, setGallery] = useState<IGallery[]>([]);
    let widthSize = document.documentElement.scrollWidth;
    // widthSize = $(window).width();
    useEffect(() => {

        let imagesTemp: IGallery[] = []
        if (images != undefined) {
            images?.forEach(img => imagesTemp.push({
                original: img.path,
                thumbnail: img.path
            }))
        }
        setGallery(imagesTemp)

    }, [images])

    return (
        <div id="ModalOrder" style={{ display: "none" }} className="modal fade modal-dialog-scrollable" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-order-container">
                <div className="modal-content">
                    {/* <ImageGallery
                        items={images}
                        showPlayButton={false}
                        showFullscreenButton={false}
                        showBullets={true}
                        showThumbnails={false}
                    /> */}
                    <div id="carouselExampleControls" data-interval="false" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            {
                                images.map((img: IOrderImage, index) => (
                                    !img.isVideo ?
                                        <div className={index == 0 ? "carousel-item active" : "carousel-item"}>
                                            <img src={img.path} className="d-block w-100" alt="..."></img>
                                        </div>
                                        :
                                        <div className="carousel-item">
                                            <iframe width={widthSize > 992 ? 396 : 360} height="705" src={img.path} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                ))
                            }

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
