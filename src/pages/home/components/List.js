import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListWrapper, ListItem } from '../style'
import { actionCreator } from '../store/index'


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
        this.props.dispatchListData()
    }
}

const mapState = (state) => ({
    articleList: state.getIn(['home', 'articleList'])
})

const mapDispatchToProps = (dispatch) => ({
    dispatchListData() {
        dispatch(actionCreator.getListData())
    }
})

export default connect(mapState, mapDispatchToProps) (List)