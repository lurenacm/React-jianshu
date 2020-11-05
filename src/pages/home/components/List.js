import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListWrapper, ListItem, LoadMore } from '../style'
import { actionCreator } from '../store/index'


class List extends PureComponent {
    render() {
        const { articleList, LoadMoreList, nextPage } = this.props
        return (
            <div>
                <ListWrapper>
                    {
                        articleList.map( (item, index) =>  (
                        <Link to='../detail'  key={index}>
                                <ListItem>
                                    <img src={item.get("imgUrl")} alt="" />
                                    <h3>{item.get("title")}</h3>
                                    <p>{item.get("desc")}</p>
                                </ListItem>
                            </Link>
                        ))
                    }
                <LoadMore onClick={ () => {LoadMoreList(nextPage)}}>加载更多</LoadMore>
                </ListWrapper>
            </div>
        )
    }

    componentDidMount() {
        this.props.dispatchListData()
    }
}

const mapState = (state) => ({
    articleList: state.getIn(['home', 'articleList']),
    nextPage: state.getIn(['home', 'nextPage'])
})

const mapDispatchToProps = (dispatch) => ({
    dispatchListData() {
        dispatch(actionCreator.getListData())
    },

    LoadMoreList(nextPage) {
        dispatch(actionCreator.loadMoreData(nextPage))
        // console.log('event')
    }
})

export default connect(mapState, mapDispatchToProps) (List)