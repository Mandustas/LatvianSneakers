import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../components/Reviews.scss"
import ModalReview from './ModalReview'
import config from '../config/config.json'
import "./spinner.css"
import { useTranslation } from 'react-i18next'
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';

export interface IReview {
    id: number;
    path: string;
}
const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
function Reviews() {
    const { t, i18n } = useTranslation();
    const [reviews, setReviews] = useState<IReview[]>();
    const [modalpath, setModalPath] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function ModalReviewOpen(path: string) {
        setModalPath(path)
        handleOpen()
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
            {/* <ModalReview path={modalpath}></ModalReview> */}

            <Modal
                onClose={handleClose}
                open={isOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modal-wrapper" onClick={handleClose}>
                    <div className="modal-container">
                        <img src={modalpath} alt="" />
                    </div>

                </div>
            </Modal>


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
