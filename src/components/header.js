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

const BigSpan = styled.span`
    font-size: 5.5em;
`

const NormalSpan = styled.span`
    font-size: 1.2em;
`

const SmallSpan = styled.span`
    font-size: 1em;
`

export default () => {
    return(
        <header>
            <Menus />
            <div className="header-box">
                <Img src="/img/header-img.png" alt="header-img"/>
                <HeaderImg>
                    <BigSpan>Ryan Willpower</BigSpan>
                    <br />
                    <SmallSpan>some kind of developer</SmallSpan>
                    <br />
                    <NormalSpan>The student at Mahanakorn University of Technology who love programming so much.</NormalSpan>
                </HeaderImg>
            </div>
        </header>
    )
}