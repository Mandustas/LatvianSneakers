import React, { useEffect, useState } from 'react'
import example from '../imgs/example.png'
import ModalOrder from './ModalOrder'
import "../components/Orders.scss"
import config from '../config/config.json'
import axios from 'axios'

export interface IOrderImage {
    id: number;
    path: string;
    isVideo: boolean
}

export interface IOrder {
    id: number;
    images: IOrderImage[];
}

function Orders() {
    function ModalOrderOpen(images:IOrderImage[]) {
        setImgs(images)
        $("#ModalOrder").modal('show')
    }

    const [orders, setOrders] = useState<IOrder[]>([]);
    const [imgs, setImgs] = useState<IOrderImage[]>([]);

    useEffect(() => {
        axios.get<IOrder[]>(config.API_SERVER_URL + "order")
            .then(({ data }) => {
                setOrders(data)
            })
    }, [])

    return (
        <>
            <div className="orders-container">
                <div className="orders-header">
                    Отзывы
                </div>
                <div className="orders-list container-fluid">
                    <div className="row">
                        {
                            orders.map((order: IOrder) => (
                                <div className="orders-item col-md-3 col-6 mb-4" data-bs-toggle="modal" data-bs-target="#ModalOrder" onClick={() => ModalOrderOpen(order.images)}>
                                    <img className="orders-item-preview" src={order.images[0].path} alt="item" />
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            <ModalOrder images={imgs}></ModalOrder>
        </>
    )
}

export default Orders
