import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import config from '../config/config.json'
import * as yup from 'yup'
import "./FilterPanel.scss"
import { IBrand, IModel } from './HeaderBrends';
import { useActions } from '../hooks/useActions';
import { useHistory } from 'react-router-dom';

export interface ISize {
    id: number;
    value: string;
}


$(document).on('click', '.filter-brands-radio', function () {
    $(".filter-brands-radio").removeClass("filter-brands-selected")
    $(this).addClass("filter-brands-selected")
});

function FilterPanel() {
    const [sizes, setSizes] = useState<ISize[]>([]);
    const [brands, setBrands] = useState<IBrand[]>([]);
    const { fetchProducts, changeBreadcrumbs } = useActions()
    let history = useHistory()

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

    let initialValuesCreate = {
        sizes: [],
        picked: '',
    }

    return (
        <>
            <Formik
                initialValues={
                    initialValuesCreate
                }

                validateOnBlur
                onSubmit={async (values, { resetForm }) => {

                    let url = config.API_SERVER_URL + "product?"
                    if (values.sizes.length != 0) {
                        values.sizes.forEach(size => url = url + "sizes=" + size + "&")
                    }
                    let brandRes = values.picked.split("-")
                    if (brandRes[0] == "b") {
                        url = url + "BrandId=" + brandRes[1] + "&"
                        changeBreadcrumbs(parseInt(brandRes[1]), undefined)
                    }
                    if (brandRes[0] == "m") {
                        url = url + "ModelId=" + brandRes[1] + "&"
                        changeBreadcrumbs(parseInt(brandRes[3]), parseInt(brandRes[1]))
                    }
                    $('.banners-container').css('display', 'none');
                    fetchProducts(url);


                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, setFieldValue }) => (
                    <div className="">
                        <Form>
                            <div className="filter-wrapper">
                                <div className="filter-container">
                                    <div className="filter-title">
                                        Фильтры
                                        <i className="fa fa-filter filter-title-icon"></i>
                                    </div>
                                    <div className="filter-sizes-container">
                                        <div className="filter-sizes-title">
                                            РАЗМЕР
                                        </div>
                                        <div role="group" aria-labelledby="checkbox-group" className="filter-sizes-list">
                                            {
                                                sizes.map((size: ISize) => (
                                                    <article className="feature">
                                                        {/* <input type="checkbox" id="feature1" /> */}
                                                        <Field type="checkbox" name="sizes" value={size.id.toString()} />

                                                        <div>
                                                            <span>
                                                                {size.value}
                                                            </span>
                                                        </div>
                                                    </article>
                                                ))
                                            }


                                        </div>
                                    </div>
                                    <div className="filter-brends-container">
                                        <div className="filter-brends-title">
                                            БРЕНД
                                        </div>
                                        <div className="filter-brends-list">
                                            <div role="group" id="accordion">
                                                {
                                                    brands.map((brand: IBrand, index) => (
                                                        <div className="filter-brends-item">
                                                            <div className="" >
                                                                <div className="mb-0 d-flex justify-content-between align-items-center">
                                                                    <label className="filter-brends-item-title filter-brands-radio">
                                                                        <Field
                                                                            type="radio"
                                                                            name="picked"
                                                                            value={"b-" + brand.id}
                                                                        />
                                                                        {brand.title}
                                                                    </label>

                                                                    <i id={"Plus-" + index} className={index == 0 ? "fa fa-minus filter-brends-item-icon " : "fa fa-plus filter-brends-item-icon "} data-toggle="collapse" data-target={"#collapse" + index} aria-expanded="true" aria-controls={"collapse" + index} onClick={() => {
                                                                        // $('.filter-brends-item-icon').removeClass('fa-plus fa-minus');
                                                                        // $('.filter-brends-item-icon').addClass('fa-plus');
                                                                        if ($('#Plus-' + index).hasClass("fa-plus")) {
                                                                            $('.filter-brends-item-icon').removeClass('fa-plus fa-minus');
                                                                            $('.filter-brends-item-icon').addClass('fa-plus');
                                                                            $('#Plus-' + index).removeClass('fa-plus');
                                                                            $('#Plus-' + index).addClass('fa-minus');
                                                                        } else if ($('#Plus-' + index).hasClass("fa-minus")) {
                                                                            $('.filter-brends-item-icon').removeClass('fa-plus fa-minus');
                                                                            $('.filter-brends-item-icon').addClass('fa-plus');
                                                                        }


                                                                    }}></i>
                                                                </div>
                                                            </div>

                                                            <div id={"collapse" + index} className={index == 0 ? "collapse show" : "collapse"} data-parent="#accordion">
                                                                {
                                                                    brand.models.map((model: IModel, index) => (
                                                                        <label className="filter-brends-line filter-brands-radio">
                                                                            <Field
                                                                                type="radio"
                                                                                name="picked"
                                                                                value={"m-" + model.id + "-b-" + brand.id}
                                                                            />
                                                                            {model.title}
                                                                        </label>
                                                                    ))
                                                                }

                                                            </div>
                                                        </div>
                                                    ))
                                                }

                                            </div>
                                        </div>
                                    </div>
                                    <div className="filter-buttons-container">
                                        <button
                                            type="submit"
                                            className="filter-button filter-button-submit"
                                        >Применить</button>
                                        <button
                                            type="reset"
                                            className="filter-button filter-button-clear"
                                            onClick={() => {
                                                $(".filter-brands-radio").removeClass("filter-brands-selected")
                                                fetchProducts(config.API_SERVER_URL + "product")
                                                history.push("/")
                                            }}
                                        >Сбросить</button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </>
    )
}

export default FilterPanel
