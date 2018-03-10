import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from 'react-redux'

import Home from './home'

import Header from '../components/header'
import About from '../components/about'

import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from '../reducers'
import rootSaga from '../actions/fetch'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

const route = () => (
    <Provider store={store}>
        <Router>
            <div>
                <Header />
                <Route exact path="/" render={() => <Home action={action} />}/>
                <Route exact path="/about" component={About} />
            </div>
        </Router>
    </Provider>
)

export default route
