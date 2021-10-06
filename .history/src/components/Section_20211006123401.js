import React, { Component } from 'react'
import Products from './section/Products'
import Details from './section/Details'
import {Route} from 'react-router-dom'
import Cart from './section/Cart'
import Payment from './section/Payment'
import About from './section/About'
im
export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={Products} exact /> 
                <Route path="/product" component={Products} exact /> 
                <Route path="/product/:id" component={Details} exact /> 
                <Route path="/Cart" component={Cart} exact /> 
                <Route path="/About" component={About} exact /> 
                <Route path="/Payment" component={Payment} exact /> 
                <Route path="/thanhtoan" component={Thanhtoan} exact /> 
            </section>
        )
    }
}

export default Section
