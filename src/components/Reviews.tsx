import React from 'react'
import "../components/Reviews.scss"
import ModalReview from './ModalReview'


function Reviews() {
    function ModalReviewOpen() {
        $("#ModalReview").modal('show')
    }

    return (
        <>
            <div className="reviews-container">
                <div className="reviews-header">
                    Отзывы
                </div>
                <div className="reviews-list container-fluid">
                    <div className="row">
                        <div className="reviews-item col-md-3 col-6 mb-4" data-bs-toggle="modal" data-bs-target="#ModalReview" onClick={() => ModalReviewOpen()}>
                            <img className="reviews-item-preview" src="https://sun9-29.userapi.com/impg/KKIKOAbrbxQ10r-leSVK6kuxNhGrT3KhwHQFHg/Em8-Ra9S0Ig.jpg?size=738x1600&quality=96&sign=f9793e2fc7b1bc0716d01f0b1038a4c9&type=album" alt="item" />
                        </div>
                    </div>
                </div>
            </div>
            <ModalReview></ModalReview>

        </>
    )
}

export default Reviews
