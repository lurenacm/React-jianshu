import React, { Component } from 'react'
import Topic  from './components/Topic'
import {
    HomeContainer
} from './style'

class Home extends Component {
    render() {
        return (
            <HomeContainer>
                <Topic/>
            </HomeContainer>

        )
    }
}

export default Home