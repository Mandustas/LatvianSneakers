import { combineReducers } from "redux";
import {productsReducer} from "./products"
import {breadcrumbsReducer} from "./breadcrumbs"
import {authReducer} from "./authReducer"

export const rootReducer = combineReducers(
    {
        products: productsReducer,
        breadcrumbs: breadcrumbsReducer,
        auth: authReducer,
    }
)
export type RootState = ReturnType<typeof rootReducer>;