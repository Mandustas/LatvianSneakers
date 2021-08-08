import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import config from '../config/config.json'
import { axiosConfig } from './AdminPanel';
import AdminSidebar from './AdminSidebar';
import ModalOrder from './ModalOrder';
import ShopItem from './ShopItem';
import { IProduct } from './ShopList';

function AdminPanelProduct() {
    const history = useHistory()
    const [products, setProducts] = useState<IProduct[]>();

    useEffect(() => {
        axios.get<IProduct[]>(config.API_SERVER_URL + "product")
            .then(({ data }) => {
                setProducts(data)
            })
    }, [])


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <AdminSidebar></AdminSidebar>
                    </div>
                    <div className="col-8">
                        <nav className="navbar navbar-light" style={{ marginTop: "7px" }}>
                            <a className="navbar-brand">ТОВАРЫ</a>
                            <button className="btn my-2 my-sm-0" type="submit" onClick={() => {
                                history.push("/adminpanel-product-edit")
                            }}>
                                <i className='fa fa-plus' aria-hidden="true" ></i>
                            </button>
                        </nav>

                        <div className="orders-list container-fluid">
                            <div className="row">
                                {
                                    products?.map((product: IProduct) => (
                                        <div className="col-lg-4 col-6 " style={{ padding: "0px 5px 0px 5px" }}>
                                            <div className="adminbrand-buttons mt-3" style={{display:"flex", justifyContent:"flex-end"}}>
                                                <button className="btn adminbrand-edit" onClick={() => {
                                                    history.push("/adminpanel-product-edit/" + product.id)
                                                }}>
                                                    <i className='fa fa-pencil' aria-hidden="true"></i>
                                                </button>
                                                <button className="btn adminorder-delete" onClick={async () => {
                                                    const isDelete = window.confirm("Подтвердите удаление товара")
                                                    if (isDelete) {
                                                        await axios.delete(config.API_SERVER_URL + 'product/' + product.id, axiosConfig);
                                                        await axios.get<IProduct[]>(config.API_SERVER_URL + "product")
                                                            .then(({ data }) => {
                                                                setProducts(data)
                                                            })
                                                    }
                                                }}>
                                                    <i className='fa fa-times' aria-hidden="true"></i>
                                                </button>
                                            </div>
                                            <div className="card shop-item-card-containter" onClick={() => {
                                                history.push("/product/" + product.id)
                                            }}>
                                                {
                                                    product.isSale ?
                                                        <div className="shop-item-card-sticker sale">
                                                            SALE
                                                        </div>
                                                        : null
                                                }
                                                {
                                                    !product.isSale && product.isPopular ?
                                                        <div className="shop-item-card-sticker popular">
                                                            POPULAR
                                                        </div>
                                                        : null
                                                }
                                                {
                                                    !product.isSale && !product.isPopular && product.isNew ?
                                                        <div className="shop-item-card-sticker new">
                                                            NEW
                                                        </div>
                                                        : null
                                                }
                                                <img className="card-img-top shop-item-card-image" src={product.images[0]?.path} alt="Card image cap"></img>
                                                <div className="card-body shop-item-card-body">
                                                    <div className="shop-item-card-brand">
                                                        {product.brand.title}
                                                    </div>
                                                    <div className="shop-item-card-title">
                                                        {product.title}
                                                    </div>
                                                    <div className="shop-item-card-price">
                                                        <div className="shop-item-card-price-actual">
                                                            {
                                                                product.discount != 0 ? product.discount : product.price
                                                            }€
                                                        </div>
                                                        <div className="shop-item-card-price-old">
                                                            {
                                                                product.discount != 0 ? product.price : null
                                                            }
                                                            {
                                                                product.discount != 0 ? "€" : null
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>




                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPanelProduct
