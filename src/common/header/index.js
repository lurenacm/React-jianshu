import React, { Component } from "react"
import {
    HeaderWrapper,
    Logo,
    HeaderContainer,
    HeaderItem,
    Search,
    Addition,
    Button
} from "./style"

class Header extends Component {
    render() {
        return ( 
            <HeaderWrapper >
                <Logo href="/"/>
                <HeaderContainer>
                    <HeaderItem className="left active">首页</HeaderItem>
                    <HeaderItem className="left">下载App</HeaderItem>
                    <HeaderItem className="right">登陆</HeaderItem>
                    <HeaderItem className="right">Aa</HeaderItem>
                </HeaderContainer>
                <Search></Search>
                <Addition>
                    <Button className="reg">注册</Button>
                    <Button className="writer">写文章</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header