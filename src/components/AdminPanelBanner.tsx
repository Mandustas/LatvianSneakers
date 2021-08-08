import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import config from '../config/config.json'
import { IBanner } from './Carousel';
import axios from 'axios';
import "./AdminPanelBanner.scss"
import { useHistory } from 'react-router-dom';
import { axiosConfig } from './AdminPanel';

function AdminPanelBanner() {
    const history = useHistory()

    const [banners, setBanners] = useState<IBanner[]>([]);
    useEffect(() => {
        axios.get<IBanner[]>(config.API_SERVER_URL + "banner")
            .then(({ data }) => {
                setBanners(data)
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
                            <a className="navbar-brand">БАННЕРЫ</a>
                            <button className="btn my-2 my-sm-0" type="submit" onClick={() => {
                                history.push("/adminpanel-banner-edit")
                            }}>
                                <i className='fa fa-plus' aria-hidden="true" ></i>
                            </button>
                        </nav>

                        <div className="adminbanner-container">
                            {
                                banners.map((banner: IBanner) => (
                                    <div className="adminbanner-item">
                                        <div className="adminbanner-number">
                                            {banner.order}
                                        </div>
                                        <div className="adminbanner-image-block">
                                            <img className="adminbanner-image" src={banner.path} alt="img" />
                                        </div>
                                        <div className="adminbanner-buttons">
                                            <button className="btn adminbanner-delete" onClick={async () => {
                                                const isDelete = window.confirm("Подтвердите удаление баннера")
                                                if (isDelete) {
                                                    await axios.delete(config.API_SERVER_URL + 'banner/' + banner.id, axiosConfig);
                                                    await axios.get<IBanner[]>(config.API_SERVER_URL + "banner")
                                                        .then(({ data }) => {
                                                            setBanners(data)
                                                        })
                                                }

                                            }}>
                                                <i className='fa fa-times' aria-hidden="true"></i>
                                            </button>
                                            <button className="btn adminbanner-edit" onClick={() => {
                                                history.push("/adminpanel-banner-edit/" + banner.id)
                                            }}>
                                                <i className='fa fa-pencil' aria-hidden="true"></i>
                                            </button>
                                        </div>
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

export default AdminPanelBanner
