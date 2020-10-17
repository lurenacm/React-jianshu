import { fromJS } from 'immutable'
import * as constants from './constants'

// fromJS方法将对象转化为 immutable对象，immutable对象一旦创建就不能再改变，使用旧数据创建新数据，保证旧数据不变且可以用
const defaultState = fromJS({
    focus: false,
    hotList: [],
    currPage: 0,
    pageTotal: 1,
    showTitle: false
})

export default (state = defaultState, action) => {
    switch(action.type){
        case constants.SEARCHFOCUSED:
            return state.set('focus', true)
        case constants.SEARCHBLURS:
            return state.set('focus', false)
        case constants.GETHEADERLIST:
            return state.set('hotList', action.value).set("pageTotal", action.pages-2)
        case constants.MOUSEOVER:
                return state.set('showTitle', action.value)
        case constants.MOUSELEAVE:
                return state.set('showTitle', action.value)
        case constants.SWITCH_HOT_LIST:
            return state.set('currPage', action.value)
        default:
            return state
    }
}