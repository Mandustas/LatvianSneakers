import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import config from '../config/config.json'
import * as yup from 'yup'
import { useHistory, useParams } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import { IBanner } from './Carousel';

function AdminPanelBannerEdit() {
    const history = useHistory()
    const validationSchema = yup.object().shape({
        path: yup.string().required('Обязательное поле'),
        order: yup.number().required("Обязательное поле"),
    })
    let { id } = useParams<{ id: string }>();

    const [banner, setBanner] = useState<IBanner>();
    useEffect(() => {
        if (id != undefined) {
            axios.get<IBanner>(config.API_SERVER_URL + "banner/" + id)
                .then(({ data }) => {
                    setBanner(data)
                }).catch(err => history.push("/"));
        }
    }, [id])
    let initialValues = {
        path: "",
        order: 0
    }
    if (banner != undefined && id != undefined) {
        initialValues = {
            path: banner.path,
            order: banner.order
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
                            <a className="navbar-brand"> {id != undefined ? "ОБНОВИТЬ БАННЕР" : "ДОБАВИТЬ БАННЕР"}</a>

                        </nav>
                        <Formik
                            enableReinitialize
                            initialValues={initialValues}
                            validateOnBlur
                            onSubmit={async (values) => {
                                let axiosConfig = {
                                    headers: {
                                        'Content-Type': 'application/json;charset=UTF-8',
                                        "Access-Control-Allow-Origin": "*",
                                        "Authorization": "Bearer " + localStorage.getItem("token")
                                    }
                                };

                                if (id != undefined && banner != undefined) {
                                    try {
                                        await axios.put(config.API_SERVER_URL + 'banner/' + id, values, axiosConfig)
                                            .then(res => {
                                                console.log(res)
                                                history.push("/adminpanel-banner")
                                            })
                                    } catch (error) {
                                        console.log(error);
                                    }
                                } else {
                                    try {
                                        await axios.post(config.API_SERVER_URL + 'banner', values, axiosConfig)
                                            .then(res => {
                                                console.log(res)
                                                history.push("/adminpanel-banner")
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
                                                    placeholder="Введите ссылку на баннер"
                                                    name={`path`}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.path}

                                                >
                                                </input>
                                                {touched.path && errors.path && <p className="form-error-msg">{errors.path}</p>}
                                                <br />

                                                <input
                                                    type={`number`}
                                                    className="form-control border border-dark"
                                                    placeholder="Введите очередность баннера"
                                                    name={`order`}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.order}

                                                >
                                                </input>
                                                {touched.order && errors.order && <p className="form-error-msg">{errors.order}</p>}
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type={`submit`}
                                                className="btn btn-dark"
                                                disabled={!isValid && !dirty}
                                            >
                                                { id != undefined ? "ОБНОВИТЬ" : "ДОБАВИТЬ" }
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

export default AdminPanelBannerEdit
