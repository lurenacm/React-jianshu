import React, { Component } from "react"
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



class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            focus: false
        }
        this.focus = this.focus.bind(this)
        this.blur = this.blur.bind(this)
    }

    render() {
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
                <CSSTransition
                    in={this.state.focus}
                    classNames="slid"
                    timeout={200}
                >
                    <SearchWrapper>
                        <Search className={this.state.focus ? "focus" : "" } onFocus={this.focus} onBlur={this.blur}></Search>
                        <img className={this.state.focus ? "search iconSearch" : "" } alt="" src= {iconSearch}/>
                    </SearchWrapper>
                </CSSTransition>
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

    focus() {
        this.setState({
            focus: true
        })
        console.log(this.state.focus)
    }

    blur() {
        this.setState({
            focus: false
        })
        console.log(this.state.focus)
    }
}

export default Header