import { combineReducers } from 'redux'

import { reducer as headerReducer} from '../common/header/store'

// combineReducers 可以结合多个reducer 方便管理。
const reducer = combineReducers({
    header: headerReducer
})

export default reducer