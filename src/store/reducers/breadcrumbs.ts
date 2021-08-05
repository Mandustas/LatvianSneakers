import { BreadcrumbsAction, BreadcrumbsActionTypes, BreadcrumbsState } from "../../types/breadcrumbs";

const initialState: BreadcrumbsState = {
    breadcrumbs: {
        brand: undefined,
        model: undefined
    }
}

export const breadcrumbsReducer = (state: BreadcrumbsState = initialState, action: BreadcrumbsAction): BreadcrumbsState => {
    switch (action.type) {
        case BreadcrumbsActionTypes.BREADCRUMBS_CHANGE:
            return { ...state, breadcrumbs: action.payload }
        default:
            return state;
    }
}