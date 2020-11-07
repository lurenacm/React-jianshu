import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DetailWrapper, Header, Content } from './style'

class Detail extends Component {
    render() {
        return (
            <div>
                <DetailWrapper>
                    <Header>{ this.props.title}</Header>
                    <Content dangerouslySetInnerHTML={{  __html: this.props.content }}  />  
                    {/* dangerouslySetInnerHTML 双{{}} 包裹 */}
                </DetailWrapper>
            </div>
        )
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

export default connect(mapState, null) (Detail)