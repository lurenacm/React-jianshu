import React, { Component } from 'react'
import { connect } from 'react-redux'
import Topic  from './components/Topic'
import List from './components/List'
import Recommends from './components/Recommends'
import {
    HomeContainer,
    BackTop
} from './style'
import { actionCreator } from './store'

class Home extends Component {
    render() {
        return (
            <HomeContainer>
                <Topic/>
                <List/>
                <Recommends/>
                {
                    this.props.showBackTop ? <BackTop onClick={this.backTop}>返回</BackTop> : ''
                }   
            </HomeContainer>
        )
    }

    componentDidMount() {
        this.listenerBackTop()
    }

    listenerBackTop() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)   // addEventListener 的type类型触发时，将执行第二个参数，listener函数
    }

    changeScrollTopShow() {
        const scrollTop = document.body.scrollTop+document.documentElement.scrollTop
        console.log(scrollTop)
    }

    backTop(e) {
        window.scroll(0,0)
    }
}

const mapState = (state) => ({
    showBackTop: state.getIn(['home', 'showBackTop'])
})

const mapDispatch = (dispatch) => ({
    changeScrollTopShow() {
        const scrollTop = document.documentElement.scrollTop
        if (scrollTop >=400) {
            dispatch(actionCreator.toggleShowScroll(true))
        }else {
            dispatch(actionCreator.toggleShowScroll(false))
        }
    }
})



export default connect(mapState, mapDispatch) (Home)