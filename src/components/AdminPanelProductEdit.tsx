import React, { useEffect, useState } from 'react'
import config from '../config/config.json'
import * as yup from 'yup'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { Formik, Form, FieldArray, Field } from 'formik'
import { axiosConfig } from './AdminPanel'
import AdminSidebar from './AdminSidebar'
import { IProduct } from './ShopList'
import { ISize } from './FilterPanel'
import { IBrand, IModel } from './HeaderBrends'

function AdminPanelProductEdit() {
    const history = useHistory()
    const validationSchema = yup.object().shape({
    })

    let { id } = useParams<{ id: string }>();

    const [isAllCheck, setIsAllCheck] = useState(false);
    const [product, setProduct] = useState<IProduct>();
    const [sizesProd, setSizesProd] = useState<string[]>([]);
    const [images, setImages] = useState<string[]>();

    const [sizes, setSizes] = useState<ISize[]>([]);
    const [brands, setBrands] = useState<IBrand[]>([]);
    const [models, setModels] = useState<IModel[]>([]);

    useEffect(() => {
        axios.get<ISize[]>(config.API_SERVER_URL + "size")
            .then(({ data }) => {
                setSizes(data)
            })
    }, [])
    useEffect(() => {
        axios.get<IBrand[]>(config.API_SERVER_URL + "brand")
            .then(({ data }) => {
                setBrands(data)
            })
    }, [])

    useEffect(() => {
        if (id != undefined) {
            axios.get<IProduct[]>(config.API_SERVER_URL + "product?Id=" + id)
                .then(({ data }) => {
                    setProduct(data[0])
                }).catch(err => history.push("/"));
        }
    }, [id])

    const changeAll = () => {
        setIsAllCheck(!isAllCheck)
    };

    // useEffect(() => {
    //     if (isAllCheck) {
    //         sizes.forEach((size, i) => {
    //             $('#Checkbox' + i).prop('checked', true);
    //         });
    //     } else {
    //         sizes.forEach((size, i) => {
    //             $('#Checkbox' + i).prop('checked', false);
    //         });
    //     }
    // }, [isAllCheck])

    useEffect(() => {
        if (id != undefined) {
            const temp = product?.brandId != undefined ? product?.brandId.toString() : ""
            axios.get<IModel[]>(config.API_SERVER_URL + "model?BrandId=" + temp)
                .then(({ data }) => {
                    setModels(data)
                })
        }
    }, [product])

    sizes.forEach((size, i) => {
        if (product?.sizes.find(x => x.id == size.id)) {
            $('#Checkbox' + i).prop('checked', true);
        }
    });

    let sizesProduct: string[] = [];
    product?.sizes.forEach(s => {
        sizesProduct.push(s.id.toString())
    });

    let imgs: string[] = [];

    product?.images?.forEach(img => {
        imgs.push(img.path)
    });

    let initialValues = {
        "title": "",
        "isPopular": false,
        "isNew": false,
        "isSale": false,
        "price": 0,
        "discount": 0,
        "brandId": 0,
        "modelId": 0,
        "sizes": [""],
        "images": [""]
    }


    useEffect(() => {
        setSizesProd(sizesProduct)
        setImages(imgs)
    }, [product])

    if (product != undefined && id != undefined) {
        initialValues = {
            "title": product.title,
            "isPopular": product.isPopular,
            "isNew": product.isNew,
            "isSale": product.isSale,
            "price": product.price,
            "discount": product.discount,
            "brandId": product.brandId,
            "modelId": product.modelId != undefined ? product.modelId : 0,
            "sizes": sizesProd,
            "images": images != undefined ? images : [],
        }
    }
    console.log(initialValues);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <AdminSidebar></AdminSidebar>
                    </div>
                    <div className="col-8">
                        <nav className="navbar navbar-light" style={{ marginTop: "7px" }}>
                            <a className="navbar-brand"> {id != undefined ? "ОБНОВИТЬ ПРОДУКТ" : "ДОБАВИТЬ ПРОДУКТ"}</a>

                        </nav>
                        <Formik
                            enableReinitialize
                            initialValues={initialValues}
                            validateOnBlur
                            onSubmit={async (values) => {
                                if (isAllCheck) {
                                    values.sizes = sizes.map((size) => size.id.toString());
                                    console.log(JSON.stringify(values.sizes));
                                    
                                } else {
                                    values.sizes = values.sizes.filter(s => s != "");
                                    console.log(JSON.stringify(values.sizes));
                                }
                                if (values.images.length == 0) {
                                    alert("Добавьте хотя бы одно изображение")

                                    return
                                }
                                if (id != undefined && product != undefined) {
                                    try {
                                        await axios.put(config.API_SERVER_URL + 'product/' + id, values, axiosConfig)
                                            .then(res => {
                                                console.log(res)
                                                history.push("/adminpanel-product")
                                            })
                                    } catch (error) {
                                        console.log(error);
                                    }
                                } else {
                                    try {
                                        await axios.post(config.API_SERVER_URL + 'product', values, axiosConfig)
                                            .then(res => {
                                                console.log(res)
                                                history.push("/adminpanel-product")
                                            })
                                    } catch (error) {
                                        console.log(error);
                                    }
                                }

                            }}

                            validationSchema={validationSchema}
                        >
                            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, setFieldValue }) => (
                                <div className="">
                                    <Form>
                                        <div className="modal-body">
                                            <div className="form-group">
                                                <label htmlFor="">Название товара</label>
                                                <input
                                                    type={`text`}
                                                    className="form-control border border-dark"
                                                    placeholder="Введите название товара"
                                                    name={`title`}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.title}
                                                >
                                                </input>
                                                {touched.title && errors.title && <p className="form-error-msg">{errors.title}</p>}

                                                <br />
                                                <label htmlFor="">Стоимость товара</label>
                                                <input
                                                    type={`number`}
                                                    className="form-control border border-dark"
                                                    placeholder="Введите стоимость в ЕВРО"
                                                    name={`price`}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.price}
                                                ></input>
                                                {touched.price && errors.price && <p className="form-error-msg">{errors.price}</p>}

                                                <br />
                                                <label htmlFor="">Скидка</label>
                                                <input
                                                    type={`number`}
                                                    className="form-control border border-dark"
                                                    placeholder="Введите стоимость со скидкой в ЕВРО"
                                                    name={`discount`}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.discount}
                                                ></input>
                                                {touched.discount && errors.discount && <p className="form-error-msg">{errors.discount}</p>}

                                                <br />
                                                <label htmlFor="">Бренд</label>
                                                <select
                                                    className="form-control border border-dark"
                                                    placeholder="Укажите Бренд"
                                                    name={`brandId`}
                                                    onChange={async e => {
                                                        const { value } = e.target
                                                        axios.get<IModel[]>(config.API_SERVER_URL + "model?BrandId=" + value)
                                                            .then(({ data }) => {
                                                                setModels(data)
                                                            })
                                                        if (value == "0") {
                                                            $(".form-product-model").prop('disabled', true);

                                                        } else {
                                                            $(".form-product-model").prop('disabled', false);

                                                        }

                                                        setFieldValue("brandId", value);
                                                        setFieldValue("modelId", "0");
                                                    }

                                                    }
                                                    onBlur={handleBlur}
                                                    value={values.brandId}
                                                >
                                                    <option value="0">Выберите бренд...</option>

                                                    {
                                                        brands.map((brand: IBrand) => (
                                                            <option value={brand.id}>{brand.title}</option>
                                                        ))
                                                    }
                                                </select>


                                                <br />
                                                <label htmlFor="">Модель</label>
                                                <select
                                                    disabled={
                                                        id == undefined
                                                    }
                                                    className="form-control border border-dark form-product-model"
                                                    name={`modelId`}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.modelId}
                                                >
                                                    <option value="0">Выберите модель...</option>

                                                    {
                                                        models.map((model: IModel) => (
                                                            <option value={model.id}>{model.title}</option>
                                                        ))
                                                    }
                                                </select>
                                                {touched.price && errors.price && <p className="form-error-msg">{errors.title}</p>}
                                                <br />
                                                <div>Теги</div>

                                                <div className="checboxes-product row">
                                                    <label className="col" >
                                                        <Field type="checkbox" name="isSale" />
                                                        Скидка
                                                    </label>

                                                    <label className="col">
                                                        <Field type="checkbox" name="isNew" />
                                                        Новинка
                                                    </label>

                                                    <label className="col">
                                                        <Field type="checkbox" name="isPopular" />
                                                        Популярно
                                                    </label>
                                                </div>

                                                <br />

                                                <div className="">
                                                    Размеры:
                                                </div>
                                                <div className="sizes-products row">
                                                    <label className="col-4">
                                                        <input type="checkbox"
                                                            name="allSizes"
                                                            id={"AllCheckbox"}
                                                            onChange={() => changeAll()}
                                                        />
                                                        Все размеры
                                                    </label>
                                                    {
                                                        sizes.map((size: ISize, i) => (
                                                            <label className="col-4">
                                                                <input type="checkbox"
                                                                    name="sizes"
                                                                    id={"Checkbox" + i}
                                                                    value={size.id.toString()}
                                                                    onChange={handleChange}
                                                                />
                                                                {size.value}
                                                            </label>
                                                        ))
                                                    }
                                                </div>


                                                <br />

                                                <div className="">
                                                    Ссылки на изображения:
                                                </div>


                                                <FieldArray
                                                    name="images"
                                                    render={arrayHelpers => (
                                                        <div>
                                                            {values.images && values.images.length > 0 ? (
                                                                values.images.map((p, index) => (
                                                                    <div key={index}>
                                                                        <Field name={`images.${index}`} />


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
                                                                            onClick={() => arrayHelpers.push("")} // insert an empty string at a position
                                                                        >
                                                                            +
                                                                        </button>
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <button className="btn" type="button" onClick={() => arrayHelpers.push("")}>
                                                                    Добавить изображение
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

export default AdminPanelProductEdit
