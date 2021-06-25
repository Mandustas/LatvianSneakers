import React from 'react'
import "./ShopItem.scss"
import exampleitem from "../imgs/example.png"

function ShopItem() {
    return (
        <>
            <div className="col-lg-4 col-6 " style={{padding: "0px 5px 0px 5px"}}>
                <div className="card shop-item-card-containter">
                    <img className="card-img-top shop-item-card-image" src={exampleitem} alt="Card image cap"></img>
                    <div className="card-body shop-item-card-body">
                        <div className="shop-item-card-brand">
                            Nike
                        </div>
                        <div className="shop-item-card-title">
                            Air Force 1 Air Force 1Air Force 1Air Force 1
                        </div>
                        <div className="shop-item-card-price">
                            <div className="shop-item-card-price-actual">
                                299$
                            </div>
                            <div className="shop-item-card-price-old">
                                300$
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopItem
