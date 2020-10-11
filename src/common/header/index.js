import React  from "react"
import { connect } from 'react-redux'
import { CSSTransition } from "react-transition-group";
import AaPic from "../../statics/images/Aa.png";
import peng from "../../statics/images/peng2.png";
import iconSearch from "../../statics/images/search.png";

import {
    HeaderWrapper,
    Logo,
    HeaderContainer,
    HeaderItem,
    Search,
    Addition,
    Button,
    SearchWrapper
} from "./style"

const Header = (props) => {
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
                    in={ props.focus }
                    classNames="slid"
                    timeout={200}
                >
                    <Search className={props.focus ? "focus" : "" } onFocus={props.focused} onBlur={props.blur}></Search>
                </CSSTransition>
                <img className={props.focus ? "search iconSearch" : "" } alt="" src= {iconSearch}/>
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

const mapStateToProps = (state) => {
    return {
        focus : state.header.focus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        focused() {
            const action = {
                type: 'focus',
                value: true
            }
            dispatch(action)
        },

        blur() {
            const action = {
                type: 'blur',
                value: false
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Header)