export interface IBreadcrumbs {
    brand?: number;
    model?: number;
}

export interface BreadcrumbsState {
    breadcrumbs: IBreadcrumbs
}

export enum BreadcrumbsActionTypes {
    BREADCRUMBS_CHANGE = 'BREADCRUMBS_CHANGE',
}

interface BreadcrumbsChangesAction {
    type: BreadcrumbsActionTypes.BREADCRUMBS_CHANGE;
    payload: IBreadcrumbs;
}


export type BreadcrumbsAction = BreadcrumbsChangesAction 

