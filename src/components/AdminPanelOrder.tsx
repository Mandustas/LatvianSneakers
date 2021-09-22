import config from '../config/config.json'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { axiosConfig } from './AdminPanel';
import AdminSidebar from './AdminSidebar';
import { IOrder, IOrderImage } from './Orders';
import ModalOrder from './ModalOrder';
import "./AdminPanelOrder.scss"

function AdminPanelOrder() {
    const history = useHistory()
    const [orders, setOrders] = useState<IOrder[]>();
    const [imgs, setImgs] = useState<IOrderImage[]>([]);

    function ModalOrderOpen(images: IOrderImage[]) {
        setImgs(images)
        $("#ModalOrder").modal('show')
    }

    useEffect(() => {
        axios.get<IOrder[]>(config.API_SERVER_URL + "order")
            .then(({ data }) => {
                setOrders(data)
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
                            <a className="navbar-brand">ЗАКАЗЫ</a>
                            <button className="btn my-2 my-sm-0" type="submit" onClick={() => {
                                history.push("/adminpanel-order-edit")
                            }}>
                                <i className='fa fa-plus' aria-hidden="true" ></i>
                            </button>
                        </nav>

                        <div className="orders-list container-fluid">
                            <div className="row">
                                {
                                    orders?.map((order: IOrder) => (
                                        <div className="orders-item col-md-4 col-6 mb-4" data-bs-toggle="modal" data-bs-target="#ModalOrder" >
                                            <img className="orders-item-preview" src={order.images[0]?.path} alt="item" onClick={() => ModalOrderOpen(order.images)} />
                                            <div className="adminbrand-buttons">
                                                <button className="btn adminbrand-edit" onClick={() => {
                                                    history.push("/adminpanel-order-edit/" + order.id)
                                                }}>
                                                    <i className='fa fa-pencil' aria-hidden="true"></i>
                                                </button>
                                                <button className="btn adminorder-delete" onClick={async () => {
                                                    const isDelete = window.confirm("Подтвердите удаление заказа")
                                                    if (isDelete) {
                                                        await axios.delete(config.API_SERVER_URL + 'order/' + order.id, axiosConfig);
                                                        await axios.get<IOrder[]>(config.API_SERVER_URL + "order")
                                                            .then(({ data }) => {
                                                                setOrders(data)
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
                        </div>

                        <ModalOrder images={imgs}></ModalOrder>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPanelOrder
