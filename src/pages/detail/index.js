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
        console.log(this.props.match.params.id)
        const id = this.props.match.params.id
        this.props.getDetail(id)
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch( actionCreator.getDetailList(id))
    }
})

export default connect(mapState, mapDispatch) (Detail)