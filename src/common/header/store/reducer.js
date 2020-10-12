import { fromJS } from 'immutable'
import * as constants from './constants'

// fromJS方法将对象转化为 immutable对象，immutable对象一旦创建就不能再改变，使用旧数据创建新数据，保证旧数据不变且可以用
const defaultState = fromJS({
    focus: false,
})

export default (state = defaultState, action) => {
    if (action.type === constants.SEARCHFOCUSED) {
        // const newState = JSON.parse(JSON.stringify(state))
        // newState.focus = action.value
        return state.set('focus', true)   // 并没有改变state的数据
    }
    if (action.type === constants.SEARCHBLURS) {
        // const newState = JSON.parse(JSON.stringify(state))
        // newState.focus = action.value
        return state.set('focus', false)
    }
    return state
}