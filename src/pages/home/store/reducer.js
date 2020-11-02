import { fromJS } from 'immutable'
import * as constants from './constants'


// fromJS方法将对象转化为 immutable对象，immutable对象一旦创建就不能再改变，使用旧数据创建新数据，保证旧数据不变且可以用
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
})

export default (state = defaultState, action) => {
    switch(action.type){
        case constants.GET_LIST_DATA:
            return state.merge({
                topicList: fromJS(action.value.topicList),
                articleList: fromJS(action.value.articleList),
                recommendList: fromJS(action.value.recommendList)
            })
        default:
            return state
    }
}