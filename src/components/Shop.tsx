import React, { useEffect, useState } from 'react'
import ShopBreadcrumbs from './ShopBreadcrumbs'
import SortDropdown from './SortDropdown'
import './Shop.scss'
import ShopList from './ShopList'
import { useParams } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { reverse } from 'dns'
import { IBrand, IModel } from './HeaderBrends'
import axios from 'axios'
import config from '../config/config.json'
import { useTranslation } from 'react-i18next'

function Shop() {
    const { t, i18n } = useTranslation();
    let { brandid, modelid } = useParams<{ brandid: string, modelid: string }>();
    const [brand, setBrands] = useState<IBrand>();
    const [model, setModels] = useState<IModel>();
    const { sortPriceProducts, sortDefaultProducts, sortNewProducts } = useActions()
    const { products, error, loading } = useTypedSelector(state => state.products)

    const { breadcrumbs } = useTypedSelector(state => state.breadcrumbs)
    useEffect(() => {
        if (breadcrumbs.brand != undefined) {
            axios.get<IBrand>(config.API_SERVER_URL + "brand/" + breadcrumbs.brand)
                .then(({ data }) => {
                    setBrands(data)
                })
        }
    }, [breadcrumbs])
    useEffect(() => {
        if (breadcrumbs.model != undefined) {
            axios.get<IModel>(config.API_SERVER_URL + "model/" + breadcrumbs.model)
                .then(({ data }) => {
                    setModels(data)
                })
        }
    }, [breadcrumbs])

    return (
        <>
            <div className="shop-container">
                <div className="shop-header">
                    <div className="shop-header-top-container">
                        <div className="shop-header-breadcrumbs">
                            <ShopBreadcrumbs></ShopBreadcrumbs>
                        </div>
                        <div className="shop-header-dropdown-desctop">
                            {/* <SortDropdown></SortDropdown> */}
                            <div className="dropdown">
                                <button className="d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ backgroundColor: "white", width: "255px", outline: "0", border: "solid 1px darkgray", }}>
                                    <div className="sort-button-text">
                                        {t("Shop.SortDefault")}
                                    </div>
                                    <i className="fa fa-caret-down"></i>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href='javascript:;' onClick={() => {
                                        const Default = t("Shop.SortDefault")
                                        $(".sort-button-text").text(Default)
                                        sortDefaultProducts(products)
                                    }}>{t("Shop.SortDefault")}</a>
                                    <a className="dropdown-item" href='javascript:;' onClick={() => {
                                        const SortPriceAsc = t("Shop.SortPriceAsc")
                                        $(".sort-button-text").text(SortPriceAsc)
                                        sortPriceProducts(products, false);
                                    }}>{t("Shop.SortPriceAsc")}</a>
                                    <a className="dropdown-item" href='javascript:;' onClick={() => {
                                        const SortPriceDesc = t("Shop.SortPriceDesc")
                                        $(".sort-button-text").text(SortPriceDesc)
                                        sortPriceProducts(products, true);
                                    }}>{t("Shop.SortPriceDesc")}</a>
                                    <a className="dropdown-item" href='javascript:;' onClick={() => {
                                        const SortNews = t("Shop.SortNews")
                                        $(".sort-button-text").text(SortNews)
                                        sortNewProducts(products)
                                    }}>{t("Shop.SortNews")}</a>
                                </div>
                            </div>
                        </div>
                        <div className="shop-buttons-container">
                            <button id="sidebarCollapse" className="shop-button shop-button-submit">
                                <i className="fa fa-filter filter-title-icon"></i>
                                Фильтр товаров
                            </button>
                            <button className="shop-button shop-button-clear sort-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="sort-button-text">
                                    {t("Shop.SortDefault")}
                                </div>
                                <i className="fa fa-caret-down"></i>

                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href='javascript:;' onClick={() => {
                                    const Default = t("Shop.SortDefault")
                                    $(".sort-button-text").text(Default)
                                    sortDefaultProducts(products)
                                }}>{t("Shop.SortDefault")}</a>
                                <a className="dropdown-item" href='javascript:;' onClick={() => {
                                    const SortPriceAsc = t("Shop.SortPriceAsc")
                                    $(".sort-button-text").text(SortPriceAsc)
                                    sortPriceProducts(products, false);
                                }}>{t("Shop.SortPriceAsc")}</a>
                                <a className="dropdown-item" href='javascript:;' onClick={() => {
                                    const SortPriceDesc = t("Shop.SortPriceDesc")
                                    $(".sort-button-text").text(SortPriceDesc)
                                    sortPriceProducts(products, true);
                                }}>{t("Shop.SortPriceDesc")}</a>
                                <a className="dropdown-item" href='javascript:;' onClick={() => {
                                    const SortNews = t("Shop.SortNews")
                                    $(".sort-button-text").text(SortNews)
                                    sortNewProducts(products)
                                }}>{t("Shop.SortNews")}</a>
                            </div>
                        </div>
                    </div>
                    <h1 className="shop-header-title">
                        {model != undefined && brand != undefined ? model?.title : null}
                        {model == undefined && brand != undefined ? brand?.title : null}
                        {model == undefined && brand == undefined ? t("Shop.AllModels") : null}
                    </h1>
                </div>
                <ShopList></ShopList>
            </div>
        </>
    )
}

export default Shop
