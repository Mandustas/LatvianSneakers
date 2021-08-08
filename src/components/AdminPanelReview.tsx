import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import config from '../config/config.json'
import { axiosConfig } from './AdminPanel';
import AdminSidebar from './AdminSidebar';
import { IBrand, IModel } from './HeaderBrends';
import ModalReview from './ModalReview';
import { IReview } from './Reviews';
import "./AdminPanelReview.scss"

function AdminPanelReview() {
    const history = useHistory()
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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <AdminSidebar></AdminSidebar>
                    </div>
                    <div className="col-8">
                        <nav className="navbar navbar-light" style={{ marginTop: "7px" }}>
                            <a className="navbar-brand">ОТЗЫВЫ</a>
                            <button className="btn my-2 my-sm-0" type="submit" onClick={() => {
                                history.push("/adminpanel-review-edit")
                            }}>
                                <i className='fa fa-plus' aria-hidden="true" ></i>
                            </button>
                        </nav>

                        <div className="reviews-list container-fluid">
                            <div className="row">
                                {
                                    reviews?.map((review: IReview) => (
                                        <div className="reviews-item col-md-4 col-6 mb-4" data-bs-toggle="modal" data-bs-target="#ModalReview" >
                                            <img className="reviews-item-preview" src={review.path} alt="item" onClick={() => ModalReviewOpen(review.path)} />
                                            <div className="adminbrand-buttons">
                                                <button className="btn adminbrand-edit" onClick={() => {
                                                    history.push("/adminpanel-review-edit/" + review.id)
                                                }}>
                                                    <i className='fa fa-pencil' aria-hidden="true"></i>
                                                </button>
                                                <button className="btn adminreview-delete" onClick={async () => {
                                                    const isDelete = window.confirm("Подтвердите удаление обзора")
                                                    if (isDelete) {
                                                        await axios.delete(config.API_SERVER_URL + 'review/' + review.id, axiosConfig);
                                                        await axios.get<IReview[]>(config.API_SERVER_URL + "review")
                                                            .then(({ data }) => {
                                                                setReviews(data)
                                                            })
                                                    }

                                                }}>
                                                    <i className='fa fa-times' aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>

                                    ))
                                }
                            </div>
                        </div>

                        <ModalReview path={modalpath}></ModalReview>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPanelReview
