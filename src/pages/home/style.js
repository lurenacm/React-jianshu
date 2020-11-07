import styled from 'styled-components'

export const HomeContainer = styled.div`
    width: 960px;
    margin: 0 auto;
    height: 200px;
    position: relative;
`
export const TopicContainer = styled.div`
    cursor: pointer;
    width: 640px;
    margin: 20px 0px;
    display: block;
    padding-bottom: 53px;
    min-height: 274px;
    img{
        width: 625px;
        height: 270px;
    }
`
export const TopicItem = styled.div`
    cursor: pointer;
    height: 36px;
    line-height: 36px;
    margin: 15px 15px 15px 0px;
    background: #fbf5f5;
    display: block;
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
export const ListWrapper = styled.div`
    cursor: pointer;
    height: 136px;
    width: 625px;
`
export const ListItem = styled.div`
    cursor: pointer;
    height: 136px;
    float: left;
    border-bottom: solid 1px #f0f0f0;
    img{
        padding: 30px 0px 0px 9px;
        width:150px;
        height: 100px;
        float: right;
        border-radius: 4px;
    }
    h3 {
        color: #969696;
    }
    p {
        color: #999;
        font-size: 13px;
    }
`
export const RecommendsWrapper = styled.div`
    float: right;
    width: 280px;
    height: 228px;
    position: absolute;
    top: 0px;
    right: 0px;
`
export const RecommendsItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(prop) => prop.imgUrl});
    background-size: contain;
    margin: 5px 0px;
`
export const LoadMore = styled.div`
    float: left;
    margin: 20px 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #a5a5a5;
    color: #fff;
    border-radius: 20px;
    cursor: pointer;
`

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 80px;
    width: 100px;
    height: 100px;
    line-height: 100px;
    border-radius: 10px;
    border: solid 1px #ccc;
    text-align: center;
`
