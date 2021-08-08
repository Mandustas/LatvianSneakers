import axios from 'axios';
import { Formik, Form } from 'formik';
import React, { useEffect, useState } from 'react'
import config from '../config/config.json'
import * as yup from 'yup'
import { useHistory, useParams } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import { IBrand } from './HeaderBrends';
import { axiosConfig } from './AdminPanel';

function AdminPanelBrandEdit() {
    const history = useHistory()
    const validationSchema = yup.object().shape({
        title: yup.string().required('Обязательное поле'),
    })
    let { id } = useParams<{ id: string }>();

    const [brand, setBrand] = useState<IBrand>();

    useEffect(() => {
        if (id != undefined) {
            axios.get<IBrand>(config.API_SERVER_URL + "brand/" + id)
                .then(({ data }) => {
                    setBrand(data)
                }).catch(err => history.push("/"));
        }
    }, [id])
    let initialValues = {
        title: "",
    }
    if (brand != undefined && id != undefined) {
        initialValues = {
            title: brand.title,
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
                            <a className="navbar-brand"> {id != undefined ? "ОБНОВИТЬ БРЕНД" : "ДОБАВИТЬ БРЕНД"}</a>

                        </nav>
                        <Formik
                            enableReinitialize
                            initialValues={initialValues}
                            validateOnBlur
                            onSubmit={async (values) => {

                                if (id != undefined && brand != undefined) {
                                    try {
                                        await axios.put(config.API_SERVER_URL + 'brand/' + id, values, axiosConfig)
                                            .then(res => {
                                                console.log(res)
                                                history.push("/adminpanel-brand")
                                            })
                                    } catch (error) {
                                        console.log(error);
                                    }
                                } else {
                                    try {
                                        await axios.post(config.API_SERVER_URL + 'brand', values, axiosConfig)
                                            .then(res => {
                                                console.log(res)
                                                history.push("/adminpanel-brand")
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
                                                    placeholder="Введите название бренда"
                                                    name={`title`}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.title}

                                                >
                                                </input>
                                                {touched.title && errors.title && <p className="form-error-msg">{errors.title}</p>}
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

export default AdminPanelBrandEdit
