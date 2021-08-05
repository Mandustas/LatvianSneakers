import * as ProductActionCreators from './products'
import * as BreadcrumbsActionCreators from './breadcrumbs'


export default {
    ...ProductActionCreators,
    ...BreadcrumbsActionCreators
}
