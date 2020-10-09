import React, { Component } from "react"
import AaPic from "../../statics/images/Aa.png";
import peng from "../../statics/images/peng2.png";

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
                    <HeaderItem className="right">
                        <img className="Aap" alt="" src= {AaPic}/>
                    </HeaderItem>
                </HeaderContainer>
                <Search></Search>
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

export default Header