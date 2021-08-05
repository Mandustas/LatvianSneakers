import React from 'react'
import ShopBreadcrumbs from './ShopBreadcrumbs'
import SortDropdown from './SortDropdown'
import './Shop.scss'
import ShopList from './ShopList'
import { useParams } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { reverse } from 'dns'

function Shop() {
    let { brandid, modelid } = useParams<{ brandid: string, modelid: string }>();

    const { sortPriceProducts, sortDefaultProducts, sortNewProducts } = useActions()
    const { products, error, loading } = useTypedSelector(state => state.products)

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
                                    По умолчанию
                                    <i className="fa fa-caret-down"></i>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href='javascript:;' onClick={() => {
                                        sortDefaultProducts(products)
                                    }}>По умолчанию</a>
                                    <a className="dropdown-item" href='javascript:;' onClick={() => {
                                        sortPriceProducts(products, false);
                                    }}>Цена: по возрастанию</a>
                                    <a className="dropdown-item" href='javascript:;' onClick={() => {
                                        sortPriceProducts(products, true);
                                    }}>Цена: по убыванию</a>
                                    <a className="dropdown-item" href='javascript:;' onClick={() => {
                                        sortNewProducts(products)
                                    }}>Новинки</a>
                                </div>
                            </div>
                        </div>
                        <div className="shop-buttons-container">
                            <button id="sidebarCollapse" className="shop-button shop-button-submit">
                                <i className="fa fa-filter filter-title-icon"></i>
                                Фильтр товаров
                            </button>
                            <button className="shop-button shop-button-clear" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                По умолчанию
                                <i className="fa fa-caret-down"></i>

                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="javascript:;" onClick={() => {
                                    sortDefaultProducts(products)
                                }}>По умолчанию</a>
                                <a className="dropdown-item" href="javascript:;" onClick={() => {
                                    sortPriceProducts(products, false);
                                }}>Цена: по возрастанию</a>
                                <a className="dropdown-item" href="javascript:;" onClick={() => {
                                    sortPriceProducts(products, true);
                                }}>Цена: по убыванию</a>
                                <a className="dropdown-item" href="javascript:;" onClick={() => {
                                    sortNewProducts(products)
                                }}>Новинки</a>
                            </div>
                        </div>
                    </div>
                    <h1 className="shop-header-title">
                        Air Force 1
                    </h1>
                </div>
                <ShopList></ShopList>
            </div>
        </>
    )
}

export default Shop
