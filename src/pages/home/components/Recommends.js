import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
    RecommendsWrapper,
    RecommendsItem
} from '../style'

class Recommends extends PureComponent {
    render() {
        return (
            <div>
                <RecommendsWrapper>
                    {
                        this.props.recommendList.map( item => (
                            <RecommendsItem imgUrl={item.get('imgUrl')} key={item.get('id')} />
                        ))
                    }
                </RecommendsWrapper>
            </div>
        )
    }
}

const mapState = (state) => ({
    recommendList: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null) (Recommends)