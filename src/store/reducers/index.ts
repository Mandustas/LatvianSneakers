import { combineReducers } from "redux";
import {productsReducer} from "./products"
import {breadcrumbsReducer} from "./breadcrumbs"

export const rootReducer = combineReducers(
    {
        products: productsReducer,
        breadcrumbs: breadcrumbsReducer,
    }
)
export type RootState = ReturnType<typeof rootReducer>;