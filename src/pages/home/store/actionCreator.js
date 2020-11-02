import axios from 'axios'
import * as constants from './constants'

const getListAction = (data) => ({
    type: constants.GET_LIST_DATA,
    value: data
})

// redux-thunk 中间件让返回的结果可以是一个函数，可以接受一个参数dispatch
export const getListData = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const data = res.data.data
            dispatch(getListAction(data))
        }).catch(err => {
            console.log(err)
        })
    }
}