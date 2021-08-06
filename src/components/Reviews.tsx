import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../components/Reviews.scss"
import ModalReview from './ModalReview'
import config from '../config/config.json'

export interface IReview {
    id: number;
    path: string;
}

function Reviews() {
    const [reviews, setReviews] = useState<IReview[]>();
    const [modalpath, setModalPath] = useState<string>("");


    function ModalReviewOpen(path: string) {
        setModalPath(path)
        $("#ModalReview").modal('show')
    }
    useEffect(() => {
        axios.get<IReview[]>(config.API_SERVER_URL + "review")
            .then(({ data }) => {
                setReviews(data)
            })
    }, [])

    return (

        <>
            <div className="reviews-container">
                <div className="reviews-header">
                    Отзывы
                </div>
                <div className="reviews-list container-fluid">
                    <div className="row">
                        {
                            reviews?.map((review: IReview) => (
                                <div className="reviews-item col-md-3 col-6 mb-4" data-bs-toggle="modal" data-bs-target="#ModalReview" onClick={() => ModalReviewOpen(review.path)}>
                                    <img className="reviews-item-preview" src={review.path} alt="item" />
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            <ModalReview path={modalpath}></ModalReview>

        </>
    )
}

export default Reviews
