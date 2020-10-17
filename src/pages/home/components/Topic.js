import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TopicContainer, TopicItem } from '../style'

class Topic extends Component {
    render() {
        const { topicList } = this.props
        return (
            <TopicContainer>
                <img  src="https://upload.jianshu.io/admin_banners/web_images/5006/537c82a858e7b0739b26ccb64d318f5e2ba6fbab.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" 
                    alt=""
                />
                {
                    topicList.map( (item) => (
                        <TopicItem key={item.get("id")}>
                            <img src={item.get("imgUrl")}
                                alt=""
                            />
                            <div className="text">{item.get("title")}</div>
                        </TopicItem>
                    ))
                }
            </TopicContainer>
        )
    }
}

const mapState = (state) => {
    return {
        topicList : state.get('home').get('topicList')
    }
}

export default connect(mapState, null) (Topic)