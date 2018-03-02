import React from 'react'
import Menus from './menus'
import styled from 'styled-components'

const Img = styled.img`
    object-fit: cover;
    -webkit-filter: blur(3px);
    filter: blur(3px);
    width: 100%;
    height: auto;
    position: relative;
`

const HeaderImg = styled.div`
    text-align: center;
    color: #FFF;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
`


export default () => {
    return(
        <header>
            <Menus />
            <div className="header-box">
                <Img src="/img/header-img.png" alt="header-img" className="header-img"/>
                <HeaderImg>
                    <span>Ryan Willpower</span>
                    <br />
                    <span>Web developer</span>
                    <br />
                    <span>
                        The student at somewhere university who love programming so much.
                    </span>
                </HeaderImg>
            </div>
        </header>
    )
}