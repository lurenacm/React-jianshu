import { fromJS } from 'immutable'
import * as constants from './constants'


// fromJS方法将对象转化为 immutable对象，immutable对象一旦创建就不能再改变，使用旧数据创建新数据，保证旧数据不变且可以用
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    nextPage: 1,
    showBackTop: false
})

export default (state = defaultState, action) => {
    switch(action.type){
        case constants.GET_LIST_DATA:
            return state.merge({
                topicList: fromJS(action.value.topicList),
                articleList: fromJS(action.value.articleList),
                recommendList: fromJS(action.value.recommendList)
            })
        case constants.GET_MORE_LIST:
            return state.merge({
                articleList:  state.get('articleList').concat(action.list),
                nextPage: state.get('nextPage') +1 
            })
        case constants.TOGGLE_SHOW_SCROLL:
            return state.set('showBackTop', action.show)
        default:
            return state
    }
}