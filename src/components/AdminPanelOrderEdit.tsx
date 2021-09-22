import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import config from '../config/config.json'
import * as yup from 'yup'
import axios from 'axios';
import { Formik, Form, FieldArray, Field } from 'formik';
import { axiosConfig } from './AdminPanel';
import AdminSidebar from './AdminSidebar';
import { IReview } from './Reviews';
import { IOrder, IOrderImage } from './Orders';
import { boolean } from 'yup/lib/locale';

interface IBody{
    path: string,
    isVideo: boolean
}

function AdminPanelOrderEdit() {
    const history = useHistory()
    const validationSchema = yup.object().shape({
    })

    let { id } = useParams<{ id: string }>();

    const [order, setOrder] = useState<IOrder>();
    const [imgs, setImgs] = useState<string[]>();
    const [isvideoarr, setIsvideoarr] = useState<boolean[]>();

    useEffect(() => {
        if (id != undefined) {
            axios.get<IOrder[]>(config.API_SERVER_URL + "order?Id=" + id)
                .then(({ data }) => {
                    setOrder(data[0])
                }).catch(err => history.push("/"));
        }
    }, [id])

    let initialValues = {
        path: [""],
        isVideo: [false]
    }

    let imgs1: string[] = [];
    let isvideoarr1: boolean[] = [];
    
    order?.images?.forEach(img => {
        imgs1.push(img.path)
        isvideoarr1.push(img.isVideo)
    });

    
    useEffect(() => {

        setImgs(imgs1)
        setIsvideoarr(isvideoarr1)
    }, [order])

    if (order != undefined && id != undefined) {
        initialValues = {
            path: imgs != undefined ? imgs : [],
            isVideo: isvideoarr != undefined ? isvideoarr : []
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
                            <a className="navbar-brand"> {id != undefined ? "ОБНОВИТЬ ЗАКАЗ" : "ДОБАВИТЬ ЗАКАЗ"}</a>
                        </nav>
                        <Formik
                            enableReinitialize
                            initialValues={initialValues}
                            validateOnBlur
                            onSubmit={async (values) => {
                                let body:IBody[] = []
                                values.path.forEach((val,i) => {
                                    body.push({
                                        path: val,
                                        isVideo: values.isVideo[i]
                                    })
                                });
                                let images = {
                                    "images": body
                                }

                                if (id != undefined && order != undefined) {
                                    try {
                                        await axios.put(config.API_SERVER_URL + 'order/' + id, images, axiosConfig)
                                            .then(res => {
                                                console.log(res)
                                                history.push("/adminpanel-order")
                                            })
                                    } catch (error) {
                                        console.log(error);
                                    }
                                } else {
                                    try {
                                        await axios.post(config.API_SERVER_URL + 'order', images, axiosConfig)
                                            .then(res => {
                                                console.log(res)
                                                history.push("/adminpanel-order")
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
                                        <div className="modal-body d-flex">
                                            <div className="form-group">
                                                Ссылки на медиафайлы заказа:
                                                <FieldArray
                                                    name="path"
                                                    render={arrayHelpers => (
                                                        <div>
                                                            {values.path && values.path.length > 0 ? (
                                                                values.path.map((p, index) => (
                                                                    <div key={index}>
                                                                        <Field name={`path.${index}`} />
                                                                        
                                                                        
                                                                        <button
                                                                            type="button"
                                                                            className="btn"
                                                                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                                                        >
                                                                            -
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            className="btn"
                                                                            onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                                                                        >
                                                                            +
                                                                        </button>
                                                                        <br />
                                                                        <label htmlFor="">
                                                                             Видеофайл
                                                                            <Field type="checkbox" name={`isVideo.${index}`} /> 
                                                                        </label>
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <button className="btn" type="button" onClick={() => arrayHelpers.push("")}>
                                                                    {/* show this when user has removed all friends from the list */}
                                                                    Добавить медиафайл
                                                                </button>
                                                            )}
                                                        </div>
                                                    )}
                                                />

                                                
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

export default AdminPanelOrderEdit
