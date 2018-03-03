import React, { Component } from 'react'
import Card from './card'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import axios from 'axios'

const Main = styled(Container)`
    margin-top: 40px;
`

class Home extends Component {

    // test axois
    componentWillMount() {
        axios.get('http://128.199.181.203/posts').then(
            (res) => {
                console.log(res)
            }
        )
    }

    render() {
        return(
            <Main>
                <Card />
            </Main>
        )
    }
}

export default Home
