import React, { Component } from 'react'
import fire from '../config/Fire'
import Menu from './sgv/bars-solid.svg'
import Close from './sgv/times-solid.svg'
import CartIcon from './sgv/shopping-cart-solid.svg'
import { Link } from 'react-router-dom'
import './css/Header.scss'
import { DataContext } from './Context'
export class Header extends Component {
    logout = () => {
        fire.auth().signOut();
    }

    static contextType = DataContext;
    state = {
        toggle: false
    }
    menuToggle = () => {
        this.setState({toggle: !this.state.toggle})
    }
    render() {
        const {toggle} = this.state
        const {cart} = this.context;
        return (
            <div>
                
                {/* <header>
                    <div className="menu" onClick={this.menuToggle}>
                        <img src={Menu} alt="" width="20"/>
                    </div>
                    <div className="logo">
                        <h1><Link to="/">Fashion Shop</Link></h1>
                    </div>
                    <nav>
                        <ul className={toggle ? "toggle" : ""}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/product">Product</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/" onClick={this.logout}>Logout</Link></li>
                            <li className="close" onClick={this.menuToggle}>
                                <img src={Close} alt=""  width="20"/>
                            </li>
                        </ul>
                        <div className="nav-cart">
                            <span>{cart.length}</span>
                            <Link to="/cart">
                                <img src={CartIcon} alt=""  width="20"/>
                            </Link>
                        </div>
                    </nav>
                </header> */}
            </div>
        )
    }
}

export default Header
