import React from 'react'
import "./ShopItem.scss"
import exampleitem from "../imgs/example.png"
import { useHistory } from 'react-router-dom'

interface ShopItemProps {
    key: number;
    id: number;
    title: string;
    image: string|undefined;
    brand: string;
    isPopular: boolean;
    isNew: boolean;
    isSale: boolean;
    price: number;
    discount: number;
}

function ShopItem({ id, title, image, brand, isNew, isPopular, isSale, price, discount }: ShopItemProps) {
    let history = useHistory();
    
    return (
        <>
            <div className="col-lg-4 col-6 " style={{ padding: "0px 5px 0px 5px" }}>
                
                <a href={"/product/" + id} className="card shop-item-card-containter">
                    {
                        isSale ?
                            <div className="shop-item-card-sticker sale">
                                SALE
                            </div>
                            : null
                    }
                    {
                        !isSale && isPopular ?
                            <div className="shop-item-card-sticker popular">
                                POPULAR
                            </div>
                            : null
                    }
                    {
                        !isSale && !isPopular && isNew ?
                            <div className="shop-item-card-sticker new">
                                NEW
                            </div>
                            : null
                    }
                    <img className="card-img-top shop-item-card-image" src={image} alt="Card image cap"></img>
                    <div className="card-body shop-item-card-body">
                        <div className="shop-item-card-brand">
                            {brand}
                        </div>
                        <div className="shop-item-card-title">
                            {title}
                        </div>
                        <div className="shop-item-card-price">
                            <div className="shop-item-card-price-actual">
                                {
                                    discount != 0 ? discount : price
                                }€
                            </div>
                            <div className="shop-item-card-price-old">
                                {
                                    discount != 0 ? price : null
                                }
                                {
                                    discount != 0 ? "€" : null
                                }
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default ShopItem
