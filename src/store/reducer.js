const defaultState = {
    focus: false,
}

export default (state = defaultState, action) => {
    if (action.type === 'focus') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.focus = action.value
        return newState
    }
    if (action.type === 'blur') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.focus = action.value
        return newState
    }
    return state
}