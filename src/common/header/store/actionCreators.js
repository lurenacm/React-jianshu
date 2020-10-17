import axios from 'axios'
import { fromJS } from 'immutable'
import * as constants from './constants'

const getHeaderList= (data) => ({
    type: constants.GETHEADERLIST,
    value: fromJS(data), // 将data这个普通对象 转成immutable对象，统一数据格式
    pages: Math.ceil(data.length/10)
})

export const switchHotList = (currPage) => ({
    type: constants.SWITCH_HOT_LIST,
    value: currPage
})

export const focused = {
    type: constants.SEARCHFOCUSED,
    value: true
}

export const blur = {
    type: constants.SEARCHBLURS,
    value: false
}

export const mouseover = {
    type: constants.MOUSEOVER,
    value: true
}

export const mouseleave = {
    type: constants.MOUSELEAVE,
    value: false
}

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
