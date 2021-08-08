import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import config from '../config/config.json'
import { useActions } from '../hooks/useActions'
import "./AdminLogin.scss"

function AdminLogin() {
    const { authChange } = useActions()
    const history = useHistory()
    const validationSchema = yup.object().shape({
        userName: yup.string()
            .required('Обязательное поле'),
        password: yup.string()
            .required('Обязательное поле')

    })

    let initialValuesCreate = {
        userName: "",
        password: "",
    }

    return (
        <>
            <div className="login-wrapper">
                <div className="login-container">
                    <Formik
                        initialValues={
                            initialValuesCreate
                        }

                        validateOnBlur
                        onSubmit={async (values, { resetForm }) => {
                            let axiosConfig = {
                                headers: {
                                    'Content-Type': 'application/json;charset=UTF-8',
                                    "Access-Control-Allow-Origin": "*",
                                }
                            };
                            try {
                                const response = await axios.post(config.AUTH_SERVER_URL + "login", values, axiosConfig)
                                localStorage.setItem("token", response.data.access_token)
                                authChange(true)
                                history.push("/adminpanel")
                            } catch (error) {
                                console.log(error);
                                resetForm({})
                            }


                        }}
                        validationSchema={validationSchema}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, setFieldValue }) => (
                            <div className="">
                                <Form>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <input
                                                type={`text`}
                                                className="form-control"
                                                style={{ marginBottom: "10px" }}
                                                id="exampleFormControlInput9"
                                                placeholder="Логин"
                                                name={`userName`}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.userName}
                                            >
                                            </input>
                                            {touched.userName && errors.userName && <p className="form-error-msg">{errors.userName}</p>}
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type={`password`}
                                                className="form-control"
                                                style={{ marginBottom: "10px" }}
                                                id="exampleFormControlInput4"
                                                placeholder="Пароль"
                                                name={`password`}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                            >
                                            </input>
                                            {touched.password && errors.password && <p className="form-error-msg">{errors.password}</p>}
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        
                                        <button
                                            type={`submit`}
                                            className="btn btn-dark"
                                            data-dismiss="modal"
                                            disabled={!isValid && !dirty}
                                        >
                                            Войти
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        )}
                    </Formik>
                </div>
            </div>


        </>
    )
}

export default AdminLogin
