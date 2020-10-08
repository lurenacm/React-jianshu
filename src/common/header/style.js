import  styled from "styled-components"
import LogoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
    height: 56px;
    background: white;
    border-bottom: solid 1px #eee;
    position: relative;
`
export const Logo = styled.a`
    width: 100px;
    height: 56px;
    position: absolute;
    top: 0px;
    left: 0px;
    background: url(${LogoPic});
    background-size: contain;
`
export const HeaderContainer = styled.div`
    with: 200px;
    margin: 0px 200px;
`
export const HeaderItem = styled.div`
    display: inline;
    height: 56px;
    line-height: 56px;
    padding: 0px 50px;
    font-size: 17px;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color:  #ea6f5a;
    }
`
export const Search = styled.input.attrs({
    placeholder: '搜索'
})`
    position: absolute;
    top: 0px;
    width: 160px;
    height: 38px;
    outline: none;
    background: #eee;
    border-radius: 25px;
    border: 1px solid #eee;
    padding: 0 30px 0 20px;
    margin-top: 9px;
`
export const Addition = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    float: right;
`

export const Button = styled.div`
    width: 120px;
    height: 56px;
    line-height: 56px;
    margin: 0px 10px;
    display: inline;
    border-radius: 17px ;
    border: 1px solid #ec6149;
    font-size: 14px;
    color: #ec6149;
    &.reg {
        padding: 6px 20px;
    }
    &.writer {
        padding: 6px 20px;
    }
`