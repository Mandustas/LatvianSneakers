import React from 'react'
import "../components/Delivery.scss"

import ExclamationPoint from '../imgs/ExclamationPoint.svg'
import Partners from '../imgs/Partners.svg'


function Delivery() {
    return (
        <>
            <div className="delivery-container">
                <div className="delivery-header">Доставка</div>
                <div className="delivery-container container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-12" style={{ marginBottom: "20px",  }}>
                            <div className="delivery-bordered-item">
                                <img className="delivery-bordered-item-img" src={ExclamationPoint} alt="" />
                                <div className="delivery-bordered-item-text">
                                    Важно! Время доставки может варьироваться от загруженности курьерских служб.
                                </div>
                            </div>
                            <img className="delivery-partners" src={Partners} alt="Partners" />
                        </div>
                        <div className="col-md-6 col-12 ">
                            <div className="" style={{ marginBottom: "20px" }}>
                                1. Вы находите в интернете/у нас в Instagram/на сайте, нужную вам модель, присылаете нам, мы подтверждаем наличие товара/размера.
                            </div>
                            <div className="" style={{ marginBottom: "20px" }}>
                                2. Затем следует оплата от клиента в 100% сумме заказа + цена доставка.
                            </div>
                            <div className="" style={{ marginBottom: "20px" }}>
                                3. Как только мы получаем платеж от Вас, в течение 1-3 рабочих дней, упаковываем и подготавливаем к отправке купленный вами товар.
                            </div>
                            <div className="" style={{ marginBottom: "20px" }}>
                                4. Курьерской службой купленный вами товар отправляется с нашего склада в Ригу.
                            </div>
                            <div className="" style={{ marginBottom: "20px" }}>
                                5. С Риги наш менеджер расфасовывает и отправляет кроссовки пакоматом Omniva по всей Балтии.
                            </div>
                            <div className="" style={{ marginBottom: "20px" }}>
                                6. Средний срок доставки от 7 до 15 рабочих дней с момента отправки вашего товара в центр курьерской службы.

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Delivery
