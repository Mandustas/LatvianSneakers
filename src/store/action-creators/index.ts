import * as ProductActionCreators from './products'
import * as BreadcrumbsActionCreators from './breadcrumbs'
import * as AuthActionCreators from './auth'


export default {
    ...ProductActionCreators,
    ...BreadcrumbsActionCreators,
    ...AuthActionCreators
}
