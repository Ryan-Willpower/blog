import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './header'
import Home from './home'
import About from './about'

const route = () => (
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
        </div>
    </Router>
)

export default route