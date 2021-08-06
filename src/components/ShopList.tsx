import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ShopItem from './ShopItem'
import config from '../config/config.json'
import axios from 'axios';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { IModel } from './HeaderBrends';


export interface Brand {
    id: number;
    title: string;
}

export interface Size {
    id: number;
    value: string;
}

export interface Image {
    id: number;
    path: string;
}

export interface IProduct {
    id: number;
    title: string;
    dateCreate: Date;
    isPopular: boolean;
    isNew: boolean;
    isSale: boolean;
    price: number;
    discount: number;
    brandId: number;
    brand: Brand;
    sizes: Size[];
    images: Image[];
    model: IModel
}




function ShopList() {
    let { brandid, modelid } = useParams<{ brandid: string, modelid: string }>();
    // const [products, setProducts] = useState<IProduct[]>([]);
    const { products, error, loading } = useTypedSelector(state => state.products)
    const { fetchProducts } = useActions()



    useEffect(() => {
        let query = config.API_SERVER_URL + "product?";
        if (brandid != undefined) {
            query = query + "BrandId=" + brandid + "&"
            if (modelid != undefined) {
                query = query + "ModelId=" + modelid + "&"
            }
        }
        fetchProducts(query)
        // axios.get<IProduct[]>(query)
        //     .then(({ data }) => {
        //         setProducts(data)
        //     })
    }, [brandid, modelid])
    console.log(products);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {
                        products.length != 0 ?
                        products.map((product: IProduct) => (
                            <ShopItem key={product.id} id={product.id} title={product.title} brand={product.brand.title} isNew={product.isNew} isPopular={product.isPopular} isSale={product.isSale} price={product.price} discount={product.discount} image={product.images[0].path}></ShopItem>
                        ))
                        :
                        "Товары по выбранному фильтру не найдены"
                    }
                </div>
            </div>
        </>
    )
}

export default ShopList
