import axios from 'axios'
import { fromJS } from 'immutable' 
import * as constants from './constants'

const getListAction = (data) => ({
    type: constants.GET_LIST_DATA,
    value: data
})

const getMoreList =(data, nextPage) => ({
    type: constants.GET_MORE_LIST,
    list: fromJS(data),
    nextPage
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

export const loadMoreData = (nextPage) => {
    return (dispatch) => {
        axios.get('/api/homeMoreList.json?nextPage=' + nextPage).then( res => {
            // console.log(res.data.data)
            const data = res.data.data
            dispatch(getMoreList(data, nextPage))
        }).catch( err => {
            console.error(err)
        })
    }
}