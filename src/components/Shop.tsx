import React from 'react'
import ShopBreadcrumbs from './ShopBreadcrumbs'
import SortDropdown from './SortDropdown'
import './Shop.scss'
import ShopList from './ShopList'

function Shop() {
    return (
        <>
            <div className="shop-container">
                <div className="shop-header">
                    <div className="shop-header-top-container">
                        <div className="shop-header-breadcrumbs">
                            <ShopBreadcrumbs></ShopBreadcrumbs>
                        </div>
                        <div className="shop-header-dropdown-desctop">
                            <SortDropdown></SortDropdown>
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
                                <a className="dropdown-item" href="#">По умолчанию</a>
                                <a className="dropdown-item" href="#">Цена: по возрастанию</a>
                                <a className="dropdown-item" href="#">Цена: по убыванию</a>
                                <a className="dropdown-item" href="#">Новинки</a>
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
