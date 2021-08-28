import React, { useEffect, useState } from 'react'
import config from '../config/config.json'
import * as yup from 'yup'
import { useHistory, useParams } from 'react-router-dom'
import { IReview } from './Reviews'
import axios from 'axios'
import AdminSidebar from './AdminSidebar'
import { Form, Formik } from 'formik'
import { axiosConfig } from './AdminPanel'

function AdminPanelReviewEdit() {
    const history = useHistory()
    const validationSchema = yup.object().shape({
        path: yup.string().required('Обязательное поле'),
    })
    let { id } = useParams<{ id: string }>();

    const [review, setReview] = useState<IReview>();

    useEffect(() => {
        if (id != undefined) {
            axios.get<IReview>(config.API_SERVER_URL + "review/" + id)
                .then(({ data }) => {
                    setReview(data)
                }).catch(err => history.push("/"));
        }
    }, [id])
    let initialValues = {
        path: "",
    }
    if (review != undefined && id != undefined) {
        initialValues = {
            path: review.path,
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <AdminSidebar></AdminSidebar>
                    </div>
                    <div className="col-8">
                        <nav className="navbar navbar-light" style={{ marginTop: "7px" }}>
                            <a className="navbar-brand"> {id != undefined ? "ОБНОВИТЬ ОБЗОР" : "ДОБАВИТЬ ОБЗОР"}</a>

                        </nav>
                        <Formik
                            enableReinitialize
                            initialValues={initialValues}
                            validateOnBlur
                            onSubmit={async (values) => {

                                if (id != undefined && review != undefined) {
                                    try {
                                        await axios.put(config.API_SERVER_URL + 'review/' + id, values, axiosConfig)
                                            .then(res => {
                                                console.log(res)
                                                history.push("/adminpanel-review")
                                            })
                                    } catch (error) {
                                        console.log(error);
                                    }
                                } else {
                                    try {
                                        await axios.post(config.API_SERVER_URL + 'review', values, axiosConfig)
                                            .then(res => {
                                                console.log(res)
                                                history.push("/adminpanel-review")
                                            })
                                    } catch (error) {
                                        console.log(error);
                                    }
                                }

                            }}

                            validationSchema={validationSchema}
                        >
                            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                                <div className="">
                                    <Form>
                                        <div className="modal-body">
                                            <div className="form-group">
                                                <input
                                                    type={`text`}
                                                    className="form-control border border-dark"
                                                    placeholder="Введите ссылку на изображение"
                                                    name={`path`}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.path}

                                                >
                                                </input>
                                                {touched.path && errors.path && <p className="form-error-msg">{errors.path}</p>}
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type={`submit`}
                                                className="btn btn-dark"
                                                disabled={!isValid && !dirty}
                                            >
                                                {id != undefined ? "ОБНОВИТЬ" : "ДОБАВИТЬ"}
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPanelReviewEdit
