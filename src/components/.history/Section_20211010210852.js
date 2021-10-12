import React, { Component } from 'react'
import Products from './section/Products'
import Details from './section/Details'
import {Route} from 'react-router-dom'
import Cart from './section/Cart'
import Payment from './section/Payment'
import About from './section/About'
import Page from './Page.jsx'
import Sea
export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={Page} exact /> 
                <h3>HOT FASHION MODEL</h3>
                <Route path="/" component={Products} exact /> 
                <Route path="/seach" component={Seach} exact /> 
                <Route path="/product" component={Products} exact /> 
                <Route path="/product/:id" component={Details} exact /> 
                <Route path="/Cart" component={Cart} exact /> 
                <Route path="/About" component={About} exact /> 
                <Route path="/Payment" component={Payment} exact /> 
            </section>
        )
    }
}

export default Section
