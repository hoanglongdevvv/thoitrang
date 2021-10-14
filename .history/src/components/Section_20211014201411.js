import React, { Component } from 'react'
import Products from './section/Products'
import Details from './section/Details'
import {Route, Switch} from 'react-router-dom'
import Cart from './section/Cart'
import Support from './section/Support'
import About from './section/About'
import Page from './Page.jsx'
import Seach from './section/Seach'
import Pagenotfound from './PageNotFound'
export class Section extends Component {
    render() {
        return ( 
           <>
             <section>
                <Route path="/" component={Page} exact /> 
                <Route path="/" component={Products} exact /> 
                <S
            </section>
           </>
        )
    }
}

export default Section
