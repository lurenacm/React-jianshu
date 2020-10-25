import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { ListWrapper, ListItem } from '../style'

class List extends Component {
    render() {
        const { articleList } = this.props
        return (
            <div>
                <ListWrapper>
                    {
                        articleList.map( item => (
                            <ListItem key={item.get("id")}>
                                <img src={item.get("imgUrl")} alt="" />
                                <h3>{item.get("title")}</h3>
                                <p>{item.get("desc")}</p>
                            </ListItem>
                        ))
                    }
                </ListWrapper>
            </div>
        )
    }

    componentDidMount() {
        this.getListData()
    }

    getListData() {
        axios.get('/api/home.json').then((res) => {
            const data = res.data.data
            this.props.dispatchListData(data)
        }).catch(e => {
            console.log(e)
        })
    }
}

const mapState = (state) => ({
    articleList: state.getIn(['home', 'articleList'])
})

const mapDispatchToProps = (dispatch) => ({
    dispatchListData(data) {
        const action = {
            type: 'get_list_data',
            value: data
        }
        dispatch(action)
    }
})

export default connect(mapState, mapDispatchToProps) (List)