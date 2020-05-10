import { URLS } from 'constants/urls'
import { requestData } from 'utils/api'

export function queryArticleList() {
    return requestData(
        'GET', 
        URLS.home.queryArticleList,
        {}
    )
}