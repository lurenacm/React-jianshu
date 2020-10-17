import { combineReducers } from 'redux-immutable' // 统一为immutable的 数据格式
import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'

// combineReducers 可以结合多个reducer 方便管理。
// redux-immutable 中也有 combineReducers 转化为immutable对象
const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer
})

export default reducer