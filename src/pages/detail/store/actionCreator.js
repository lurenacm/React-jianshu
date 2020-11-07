import axios from 'axios'
import * as constants from './constant'

const getDetailAction = (data)=> ({
    type:  constants.GET_DETAIL_LIST,
    value: data
})


export const getDetailList = () => {
    return (dispatch) => {
            axios.get("/api/detail.json").then( r => {
                const dataObj = r.data.data
                return dispatch(getDetailAction(dataObj))
            }).catch(e => {
                console.log(e)
            })
    }
}