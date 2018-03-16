import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from 'react-redux'

import Home from './home'

import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'

import reducer from '../reducers'
import watchFetch from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchFetch)

const route = () => (
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Home} />
            </div>
        </Router>
    </Provider>
)

export default route
