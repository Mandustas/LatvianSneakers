import { Dispatch } from "react"
import { BreadcrumbsAction, BreadcrumbsActionTypes } from "../../types/breadcrumbs"

export const changeBreadcrumbs = (brand?: number, model?: number) => {

    return (dispatch: Dispatch<BreadcrumbsAction>) => {
        dispatch({ type: BreadcrumbsActionTypes.BREADCRUMBS_CHANGE, payload: { brand, model } })
    }
}
