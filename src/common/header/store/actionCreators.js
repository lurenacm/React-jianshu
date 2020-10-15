import axios from 'axios'
import { fromJS } from 'immutable'
import * as constants from './constants'

export const focused = {
    type: constants.SEARCHFOCUSED,
    value: true
}

export const blur = {
        type: constants.SEARCHBLURS,
        value: false
}

const getHeaderList= (data) => ({
    type: constants.GETHEADERLIST,
    value: fromJS(data) // 将data这个普通对象 转成immutable对象，统一数据格式
})

export const getHotList = () => {
    return  (dispatch) => {
        axios.get('/api/headerList.json').then( res => {
            const data =res.data.data
            dispatch(getHeaderList(data))
        }).catch( e => {
            console.log(e)
        })
    }
}
