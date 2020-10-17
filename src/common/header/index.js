import React, { Component }  from "react"
import { connect } from 'react-redux'
import { CSSTransition } from "react-transition-group";
import AaPic from "../../statics/images/Aa.png";
import peng from "../../statics/images/peng2.png";
import iconSearch from "../../statics/images/search.png";
import { actionCreator } from './store/index'

import {
    HeaderWrapper,
    Logo,
    HeaderContainer,
    HeaderItem,
    Search,
    Addition,
    Button,
    SearchWrapper,
    SearchContainer,
    SearchHeader,
    SearchItem,
    SearchItemContainer,
    SearchHots,
    SearchSwitch
} from "./style"
class Header extends Component {

    showSearchTitle() {
        const { hotList, pageTotal, currPage, onMouseOver, onMouseLeave, switchHot } = this.props
        const newList = hotList.toJS()
        // console.log('hotList',hotList)
        // console.log('newList',newList)
        // console.log(pageTotal)
        const currentList = []
        if(newList.length) {
            for (let i = ( currPage * 10); i < (currPage+1) * 10; i ++) {
                currentList.push(
                    <SearchItem key={newList[i]}>{newList[i]}</SearchItem>
                    )
            }
        }
        return (
            <SearchContainer onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                <SearchHeader>
                    <SearchHots>
                        热门搜索
                    </SearchHots>
                    <SearchSwitch onClick={() => ( switchHot(currPage, pageTotal) )}>
                        换一批
                    </SearchSwitch>
                </SearchHeader>
                <SearchItemContainer>
                    {
                        currentList
                        // hotList.map( item => {
                        //     return <SearchItem key={item}>{item}</SearchItem>
                        // })
                    }
                </SearchItemContainer>
            </SearchContainer>
        )
    }

    render () {
        const { focus, focused, blur, showTitle } = this.props
        return (
            <HeaderWrapper >
            <Logo href="/"/>
            <HeaderContainer>
                <HeaderItem className="left active">首页</HeaderItem>
                <HeaderItem className="left">下载App</HeaderItem>
                <HeaderItem className="right">登陆</HeaderItem>
                <HeaderItem className="right">
                    <img className="Aap" alt="" src= {AaPic}/>
                </HeaderItem>
            </HeaderContainer>
            <SearchWrapper>
                <CSSTransition
                    in={focus }
                    classNames="slid"
                    timeout={200}
                >
                    <Search className={focus ? "focus" : "" } onFocus={focused} onBlur={blur}></Search>
                </CSSTransition>
                <img className={focus ? "search iconSearch" : "" } alt="" src= {iconSearch}/>
                {
                    focus || showTitle ? this.showSearchTitle() : ''
                 // React 会将这数组自动输出，没有遍历。。。原因不详  [<h1>12</h1>,<h1>14</h1>,<h1>13</h1>,<h1>16</h1>,<h1>18</h1>,<h1>02</h1>]
                }
            </SearchWrapper>
            <Addition>
                <Button className="reg">注册</Button>
                <Button className="writer">
                    <img className="peng" alt="" src= {peng}/>
                    写文章
                </Button>
            </Addition>
        </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focus : state.getIn(['header', 'focus']), //表示获取state的header下面的focus  等价与 state.get('header').get('focus')
        // state.get('header').get('focus') // 统一将reducer返回的 state也转化为immutable 对象。state.header.get('focus')中
        hotList: state.getIn(['header', 'hotList']),
        currPage: state.getIn(['header', 'currPage']),
        pageTotal: state.getIn(['header', 'pageTotal']),
        showTitle: state.getIn(['header', 'showTitle'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        focused() {
            dispatch(actionCreator.getHotList())
            dispatch(actionCreator.focused)
        },
        blur() {
            dispatch(actionCreator.blur)
        },
        onMouseOver() {
            dispatch(actionCreator.mouseover)
        },
        onMouseLeave() {
            dispatch(actionCreator.mouseleave)
        },
        switchHot(currPage, pageTotal) {
            console.log(currPage)
            if(currPage <= pageTotal) {
                dispatch(actionCreator.switchHotList(currPage+1))
            } else {
                dispatch(actionCreator.switchHotList(currPage=0))
            }
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Header)