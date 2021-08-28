import React from 'react'
import { useTranslation } from 'react-i18next';
import "../components/Delivery.scss"

import ExclamationPoint from '../imgs/ExclamationPoint.svg'
import Partners from '../imgs/Partners.svg'


function Delivery() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="delivery-container">
                <div className="delivery-header">{t("Delivery.Title")}</div>
                <div className="delivery-container container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-12" style={{ marginBottom: "20px", }}>
                            <div className="delivery-bordered-item">
                                <img className="delivery-bordered-item-img" src={ExclamationPoint} alt="" />
                                <div className="delivery-bordered-item-text">
                                    {t("Delivery.Attention")}
                                </div>
                            </div>
                            <img className="delivery-partners" src={Partners} alt="Partners" />
                        </div>
                        <div className="col-md-6 col-12 ">
                            <div className="" style={{ marginBottom: "20px" }}>
                                {t("Delivery.Part1")}
                            </div>
                            <div className="" style={{ marginBottom: "20px" }}>
                                {t("Delivery.Part2")}

                            </div>
                            <div className="" style={{ marginBottom: "20px" }}>
                                {t("Delivery.Part3")}
                            </div>
                            <div className="" style={{ marginBottom: "20px" }}>
                                {t("Delivery.Part4")}
                            </div>
                            <div className="" style={{ marginBottom: "20px" }}>
                                {t("Delivery.Part5")}
                            </div>
                            <div className="" style={{ marginBottom: "20px" }}>
                                {t("Delivery.Part6")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Delivery
