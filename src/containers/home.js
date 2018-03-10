import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { REQUEST_POST } from '../actions/fetch'

import { Container } from 'reactstrap'
import styled from 'styled-components'

import Card from '../components/card'

const Main = styled(Container)`
    margin-top: 40px;
`

class Home extends Component {
    componentWillMount() {
        axios.get('https://www.willpower.in.th/posts').then(post => {
            console.log(post.data)
        })
        this.props.action(REQUEST_POST)
        console.log(this.props.post)
    }

    render() {
        return(
            <Main>
                <Card />
            </Main>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        post: state.fetch
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        requestPost: () => dispatch({type: REQUEST_POST})
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
