import axios from 'axios';
import React, { useState, useEffect } from 'react'
import "./HeaderBrends.scss"
import config from '../config/config.json'
import HeaderBrand from './HeaderBrand';
import { useHistory } from "react-router-dom";
import { useActions } from '../hooks/useActions';

export interface IModel {
    id: number;
    title: string;
    brandId: number;
}

export interface IBrand {
    id: number;
    title: string;
    models: IModel[];
}

function HeaderBrends() {
    let history = useHistory();
    const { changeBreadcrumbs } = useActions()

    function handleClick(id: number) {
        changeBreadcrumbs(id, undefined)
        history.push("/shop/" + id);
        
    }

    const [brands, setBrands] = useState<IBrand[]>([]);
    useEffect(() => {
        axios.get<IBrand[]>(config.API_SERVER_URL + "brand")
            .then(({ data }) => {
                setBrands(data)
            })

    }, [])
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar headerbrends-wrapper">
                <div className="container-fluid headerbrends-container">
                    <ul className="navbar-nav headerbrends-menu">

                        {brands.map((brand: IBrand) => (
                            <HeaderBrand id={brand.id} key={brand.id} title={brand.title} models={brand.models} onClick={() => handleClick(brand.id)}></HeaderBrand>
                        ))}


                    </ul>
                </div>
            </nav>

        </>
    )
}

export default HeaderBrends
