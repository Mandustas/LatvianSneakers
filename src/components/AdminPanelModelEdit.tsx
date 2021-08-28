import axios from 'axios';
import { Formik, Form } from 'formik';
import React, { useEffect, useState } from 'react'
import config from '../config/config.json'
import * as yup from 'yup'
import { useHistory, useParams } from 'react-router-dom';
import { axiosConfig } from './AdminPanel';
import AdminSidebar from './AdminSidebar';
import { IModel } from './HeaderBrends';

function AdminPanelModelEdit() {
    const history = useHistory()
    const validationSchema = yup.object().shape({
        title: yup.string().required('Обязательное поле'),
    })
    let { id, brandid } = useParams<{ id: string, brandid: string }>();

    const [model, setModel] = useState<IModel>();

    useEffect(() => {
        if (id != undefined) {
            axios.get<IModel>(config.API_SERVER_URL + "model/" + id)
                .then(({ data }) => {
                    setModel(data)
                    // alert(JSON.stringify(data))
                }).catch(err => history.push("/"));
        }
    }, [id])
    let initialValues = {
        title: "",
        brandId: brandid
    }
    if (model != undefined && id != undefined) {
        initialValues = {
            title: model.title,
            brandId: brandid
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
                            <a className="navbar-brand"> {id != undefined ? "ОБНОВИТЬ МОДЕЛЬ" : "ДОБАВИТЬ МОДЕЛЬ"}</a>
                        </nav>
                        <Formik
                            enableReinitialize
                            initialValues={initialValues}
                            validateOnBlur
                            onSubmit={async (values) => {

                                if (id != undefined && model != undefined) {
                                    try {
                                        await axios.put(config.API_SERVER_URL + 'model/' + id, values, axiosConfig)
                                            .then(res => {
                                                console.log(res)
                                                history.push("/adminpanel-brand")
                                            })
                                    } catch (error) {
                                        console.log(error);
                                    }
                                } else {
                                    try {
                                        await axios.post(config.API_SERVER_URL + 'model', values, axiosConfig)
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
                                                    placeholder="Введите название модели"
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

export default AdminPanelModelEdit
