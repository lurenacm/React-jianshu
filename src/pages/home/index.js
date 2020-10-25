import React, { Component } from 'react'
import Topic  from './components/Topic'
import List from './components/List'
import Recommends from './components/Recommends'
import {
    HomeContainer
} from './style'

class Home extends Component {
    render() {
        return (
            <HomeContainer>
                <Topic/>
                <List/>
                <Recommends/>
            </HomeContainer>
        )
    }
}

export default Home