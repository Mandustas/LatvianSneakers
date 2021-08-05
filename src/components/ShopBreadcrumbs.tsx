import React, { useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import config from '../config/config.json'
import axios from 'axios';
import { IBrand, IModel } from './HeaderBrends';
import { useActions } from '../hooks/useActions';


interface ShopBreadcrumbsProps {
    product?: string
}

function ShopBreadcrumbs({ product }: ShopBreadcrumbsProps) {
    const [brand, setBrands] = useState<IBrand>();
    const [model, setModels] = useState<IModel>();
    const { changeBreadcrumbs } = useActions()

    let history = useHistory()
    const { breadcrumbs } = useTypedSelector(state => state.breadcrumbs)
    useEffect(() => {
        if (breadcrumbs.brand != undefined) {
            axios.get<IBrand>(config.API_SERVER_URL + "brand/" + breadcrumbs.brand)
                .then(({ data }) => {
                    setBrands(data)
                })
        }
    }, [breadcrumbs])
    useEffect(() => {
        if (breadcrumbs.model != undefined) {
            axios.get<IModel>(config.API_SERVER_URL + "model/" + breadcrumbs.model)
                .then(({ data }) => {
                    setModels(data)
                })
        }
    }, [breadcrumbs])

    return (
        <>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={() => {
                    history.push("/")
                }}>
                    Home
                </Link>
                {
                    breadcrumbs.brand != undefined ?
                        <Link color="inherit" style={{ cursor: "pointer" }} onClick={() => {
                            changeBreadcrumbs(breadcrumbs.brand)
                            history.push("/shop/" + breadcrumbs.brand)
                        }}>
                            {brand != undefined ? brand.title : ""}
                        </Link>
                        : null
                }
                {
                    breadcrumbs.brand != undefined && breadcrumbs.model != undefined ?
                        <Link color="inherit" style={{ cursor: "pointer" }} onClick={() => {
                            history.push("/shop/" + breadcrumbs.brand + "/" + breadcrumbs.model)
                        }}>
                            {model != undefined ? model.title : ""}
                        </Link>
                        : null
                }
                {
                    breadcrumbs.brand != undefined && breadcrumbs.model != undefined && product != null ?
                        <Typography color="textPrimary">{product}</Typography>
                        : null
                }
            </Breadcrumbs>
        </>
    )
}
export default ShopBreadcrumbs
