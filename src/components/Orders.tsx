import React from 'react'
import example from '../imgs/example.png'
import ModalOrder from './ModalOrder'
import "../components/Orders.scss"


function Orders() {
    function ModalOrderOpen() {
        $("#ModalOrder").modal('show')
    }

    return (
        <>
           <div className="orders-container">
                <div className="orders-header">
                    Отзывы
                </div>
                <div className="orders-list container-fluid">
                    <div className="row">
                        <div className="orders-item col-md-3 col-6 mb-4" data-bs-toggle="modal" data-bs-target="#ModalOrder" onClick={() => ModalOrderOpen()}>
                            <img className="orders-item-preview" src={example} alt="item" />
                        </div>
                    </div>
                </div>
            </div>
            <ModalOrder></ModalOrder>
        </>
    )
}

export default Orders
