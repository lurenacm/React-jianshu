import { fromJS } from 'immutable'
import * as constants from './constant'

const defaultState = fromJS({
    title: '',
    content: ''
})

export default  ( state= defaultState, action) => {
    switch (action.type) {
        case constants.GET_DETAIL_LIST:
            return state.merge({
                title: action.value.title,
                content: action.value.content
            })
        default:
        return state
    }
}
