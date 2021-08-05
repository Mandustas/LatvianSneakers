import axios from "axios"
import config from '../../config/config.json'

import { Dispatch } from "react"
import { ProductsAction, ProductsActionTypes } from "../../types/product"
import { IProduct } from "../../components/ShopList"

export const fetchProducts = (url: string) => {
    return async (dispatch: Dispatch<ProductsAction>) => {
        try {
            dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS })

            const responseProducts = await axios.get(url)
            dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payloadProducts: responseProducts.data })
        } catch (error) {
            dispatch({
                type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
                payload: "Произошла ошибка при загрузке товаров"
            })
        }
    }
}
export const sortPriceProducts = (products: IProduct[], reverse: boolean) => {
    return async (dispatch: Dispatch<ProductsAction>) => {
        try {
            dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS })

            products.sort(function (a, b) {
                return a.price - b.price;
            });
            if (reverse) {
                products = products.reverse()
            }
            dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payloadProducts: products })
        } catch (error) {
            dispatch({
                type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
                payload: "Произошла ошибка при загрузке товаров"
            })
        }
    }
}

export const sortDefaultProducts = (products: IProduct[]) => {
    return async (dispatch: Dispatch<ProductsAction>) => {
        try {
            dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS })

            products.sort(function (a, b) {
                return a.id - b.id;
            });

            dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payloadProducts: products })
        } catch (error) {
            dispatch({
                type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
                payload: "Произошла ошибка при загрузке товаров"
            })
        }
    }
}

export const sortNewProducts = (products: IProduct[]) => {
    return async (dispatch: Dispatch<ProductsAction>) => {
        try {
            dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS })

            products.sort(function (a, b) {
                return (a === b)? 0 : a.isNew? -1 : 1;;
            });

            dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payloadProducts: products })
        } catch (error) {
            dispatch({
                type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
                payload: "Произошла ошибка при загрузке товаров"
            })
        }
    }
}