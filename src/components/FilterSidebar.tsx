import React, { useEffect, useState } from 'react'
import "./FilterSidebar.css"
import "./FilterSidebar.scss"
import "./FilterPanel.scss"
import { IBrand, IModel } from './HeaderBrends';
import { useActions } from '../hooks/useActions';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import config from '../config/config.json'
import * as yup from 'yup'
import { ISize } from './FilterPanel';


$(document).on('click', '.filter-brands-radio', function () {

    $(".filter-brands-radio").removeClass("filter-brands-selected")
    $(this).addClass("filter-brands-selected")

});

function FilterSidebar() {
    useEffect(() => {
        $('#dismiss, .overlay').on('click', function () {
            // hide sidebar
            $('#sidebar').removeClass('active');
            // hide overlay
            $('.overlay').removeClass('active');
        })

        $('#sidebarCollapse').on('click', function () {
            // open sidebar

            $('#sidebar').addClass('active')
            // fade in the overlay
            $('.overlay').addClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        })
    });

    const [sizes, setSizes] = useState<ISize[]>([]);
    const [brands, setBrands] = useState<IBrand[]>([]);
    const { fetchProducts } = useActions()

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
                    }
                    if (brandRes[0] == "m") {
                        url = url + "ModelId=" + brandRes[1] + "&"
                    }
                    fetchProducts(url);
                    $('#sidebar').removeClass('active');
                    $('.overlay').removeClass('active');

                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, setFieldValue }) => (
                    <div className="">
                        <Form>
                            <div className="wrapper filter-sidebar-wrapper">
                                <nav id="sidebar">
                                    <div className="filter-sidebar-header">
                                        <div className="filter-sidebar-header-title">
                                            ФИЛЬТР ТОВАРОВ
                                        </div>
                                        <div id="dismiss" className="filter-sidebar-header-dismiss">
                                            <i className="fa fa-times"></i>
                                        </div>
                                    </div>

                                    <div className="filter-container">
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

                                                                        <i className="fa fa-plus filter-brends-item-icon " data-toggle="collapse" data-target={"#collapse" + index} aria-expanded="true" aria-controls={"collapse" + index}></i>
                                                                    </div>
                                                                </div>

                                                                <div id={"collapse" + index} className={index == 0 ? "collapse show" : "collapse"} data-parent="#accordion">
                                                                    {
                                                                        brand.models.map((model: IModel, index) => (
                                                                            <label className="filter-brends-line filter-brands-radio">
                                                                                <Field
                                                                                    type="radio"
                                                                                    name="picked"
                                                                                    value={"m-" + model.id}
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
                                                    $('#sidebar').removeClass('active');
                                                    // hide overlay
                                                    $('.overlay').removeClass('active');
                                                    fetchProducts(config.API_SERVER_URL + "product")
                                                }}
                                            >Сбросить</button>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </>
    )
}

export default FilterSidebar
