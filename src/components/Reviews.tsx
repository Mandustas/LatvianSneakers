import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../components/Reviews.scss"
import ModalReview from './ModalReview'
import config from '../config/config.json'
import "./spinner.css"
import { useTranslation } from 'react-i18next'

export interface IReview {
    id: number;
    path: string;
}

function Reviews() {
    const { t, i18n } = useTranslation();
    const [reviews, setReviews] = useState<IReview[]>();
    const [modalpath, setModalPath] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    function ModalReviewOpen(path: string) {
        setModalPath(path)
        $("#ModalReview").modal('show')
    }
    useEffect(() => {
        setLoading(true);
        axios.get<IReview[]>(config.API_SERVER_URL + "review")
            .then(({ data }) => {
                setReviews(data)
                setLoading(false)
            })
    }, [])

    return (

        <>
            <div className="reviews-container">
                <div className="reviews-header">
                    {t("ReviewsTitle")}
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

export default Reviews
