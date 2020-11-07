import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DetailWrapper, Header, Content } from './style'
import * as actionCreator from './store/actionCreator'

class Detail extends Component {
    render() {
        return (
            <div>
                <DetailWrapper>
                    <Header>{ this.props.title}</Header>
                    <Content dangerouslySetInnerHTML={{  __html: this.props.content }}  />  
                </DetailWrapper>
            </div>
        )
    }

    componentDidMount() {
        this.props.getDetail()
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
    getDetail() {
        dispatch( actionCreator.getDetailList())
    }
})

export default connect(mapState, mapDispatch) (Detail)