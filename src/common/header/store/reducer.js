import * as constants from './constants'

const defaultState = {
    focus: false,
}

export default (state = defaultState, action) => {
    if (action.type === constants.SEARCHFOCUSED) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.focus = action.value
        return newState
    }
    if (action.type === constants.SEARCHBLURS) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.focus = action.value
        return newState
    }
    return state
}