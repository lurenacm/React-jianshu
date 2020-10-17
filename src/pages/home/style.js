import styled from 'styled-components'

export const HomeContainer = styled.div`
    width: 960px;
    margin: 0 auto;
    height: 200px;
    background: red;
`
export const TopicContainer = styled.div`
    width: 640px;
    margin-top: 20px;
    img{
        width: 625px;
        height: 270px;
    }
`
export const TopicItem = styled.div`
    height: 36px;
    line-height: 36px;
    margin: 15px 15px 15px 0px;
    background: #fbf5f5;
    display: inline-block;
    font-size: 14px;
    border: solid 1px #ccc;
    color: #000;
    float: left;
    border-radius: 4px;
    img{
        height: 36px;
        width: 36px;
        float: left;
    }
    .text{
        margin-left: 18px;
        padding: 0px 10px 0px 26px;
    }
`