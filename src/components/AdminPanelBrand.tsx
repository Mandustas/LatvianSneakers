import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import config from '../config/config.json'
import { IBanner } from './Carousel';
import axios from 'axios';
import "./AdminPanelBanner.scss"
import { useHistory } from 'react-router-dom';
import { axiosConfig } from './AdminPanel';
import { IBrand, IModel } from './HeaderBrends';
import "./AdminPanelBrand.scss"

function AdminPanelBrand() {
    const history = useHistory()
    const [brands, setBrands] = useState<IBrand[]>([]);

    useEffect(() => {
        axios.get<IBrand[]>(config.API_SERVER_URL + "brand")
            .then(({ data }) => {
                setBrands(data)
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
                            <a className="navbar-brand">БРЕНДЫ</a>
                            <button className="btn my-2 my-sm-0" type="submit" onClick={() => {
                                history.push("/adminpanel-brand-edit")
                            }}>
                                <i className='fa fa-plus' aria-hidden="true" ></i>
                            </button>
                        </nav>


                        <div className="adminbrand-container">
                            {
                                brands.map((brand: IBrand) => (
                                    <div className="adminbrand-item">
                                        <div className="adminbrand-item-container">

                                            <div className="adminbrand-title">
                                                {brand.title}
                                            </div>
                                            <div className="adminbrand-buttons">
                                                <button className="btn my-2 my-sm-0" type="submit" onClick={() => {
                                                    history.push("/adminpanel-model-edit/" + brand.id)
                                                }}>
                                                    <i className='fa fa-plus' aria-hidden="true" ></i>
                                                </button>
                                                <button className="btn adminbrand-edit" onClick={() => {
                                                    history.push("/adminpanel-brand-edit/" + brand.id)
                                                }}>
                                                    <i className='fa fa-pencil' aria-hidden="true"></i>
                                                </button>
                                                <button className="btn adminbrand-delete" onClick={async () => {
                                                    const isDelete = window.confirm("Подтвердите удаление бренда")
                                                    if (isDelete) {
                                                        await axios.delete(config.API_SERVER_URL + 'brand/' + brand.id, axiosConfig);
                                                        await axios.get<IBrand[]>(config.API_SERVER_URL + "brand")
                                                            .then(({ data }) => {
                                                                setBrands(data)
                                                            })
                                                    }

                                                }}>
                                                    <i className='fa fa-times' aria-hidden="true"></i>
                                                </button>

                                            </div>
                                        </div>

                                        {
                                            brand.models.map((model: IModel) => (
                                                <div className="adminmodel-item">
                                                    <div className="adminmodel-title">
                                                        {model.title}
                                                    </div>
                                                    <div className="adminbrand-buttons">
                                                        <button className="btn adminbrand-edit" onClick={() => {
                                                            history.push("/adminpanel-model-edit/" + brand.id + "/" + model.id)
                                                        }}>
                                                            <i className='fa fa-pencil' aria-hidden="true"></i>
                                                        </button>
                                                        <button className="btn adminbrand-delete" onClick={async () => {
                                                            const isDelete = window.confirm("Подтвердите удаление модели")
                                                            if (isDelete) {
                                                                await axios.delete(config.API_SERVER_URL + 'model/' + model.id, axiosConfig);
                                                                await axios.get<IBrand[]>(config.API_SERVER_URL + "brand")
                                                                    .then(({ data }) => {
                                                                        setBrands(data)
                                                                    })
                                                            }

                                                        }}>
                                                            <i className='fa fa-times' aria-hidden="true"></i>
                                                        </button>

                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPanelBrand
