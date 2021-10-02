import React, { Component } from 'react'
import fire from '../config/Fire'
// import Menu from './sgv/bars-solid.svg'
// import Close from './sgv/times-solid.svg'
// import CartIcon from './sgv/shopping-cart-solid.svg'
import { Link } from 'react-router-dom'
import './css/Header.scss'
import { DataContext } from './Context'
export class Header extends Component {
    logout = () => {
        fire.auth().signOut();
    }
    static contextType = DataContext;
    render() {
        // const {toggle} = this.state
        const { cart } = this.context;
        return (
            <div>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-white bg-white">
                    {/* Container wrapper */}
                    <div className="container-fluid">
                        {/* Toggle button */}
                        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars" />
                        </button>
                        {/* Collapsible wrapper */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Navbar brand */}
                            <a className="navbar-brand mt-2 mt-lg-0" href="/">
                                <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhl98yirgR0gauMY481dRz0d4TmvPL3cDgsjQrrMM1E8d-6GELoRAuSLJmkfjVKID3DSSB45rVcDoUG8DPdHU2D4FYQkG3dvNybgFvlGdgP3NiZBhQ0MA83YGsjuVg_ILGsU_VHdcZ0L5WRLEq_XnrqNlMuryczyOfF5gOpL2Wzg8Br_1xQCVcin8uqTg" height={40} width={90} alt="" loading="lazy" />
                            </a>
                            {/* Left links */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{fontSize:'17px', color:'#636e72'}}>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/product">Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                            </ul>
                            {/* Left links */}
                        </div>
                        {/* Collapsible wrapper */}
                        {/* Right elements */}
                        <div className="d-flex align-items-center">
                            {/* Icon */}
                            <div className="text-reset me-3">
                                <span>{cart.length}</span>
                                <Link to="/cart">
                                    <i className="fas fa-shopping-cart" />
                                </Link>
                            </div>
                            {/* Notifications */}
                            <a className="text-reset me-3 dropdown-toggle hidden-arrow" href="/" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-bell" />
                                <span className="badge rounded-pill badge-notification bg-danger">1</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <a className="dropdown-item" href="/">Some news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">Another news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">Something else here</a>
                                </li>
                            </ul>
                            {/* Avatar */}
                            <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="/" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                <img src="https://blogger.googleusercontent.com/img/a/AVvXsEgM5U-Prdl4OPWQkiVegnCspY8qVQ_PM9WZW11ZNG-ruiO7pcsLcKjFZ4K56gQzZ-gTh-U76Rzxf63naD8QgagzgZSeBQasbemfOaghNecE8bHAx2YlLUV4ah05y_68rcCi6pSXzMX47VipVsdhU8Y9S5XUeptZUaMWg9_VyAkOFFSsYTlJL0s3GVv_zw=s320" className="rounded-circle" height={25} alt="" loading="lazy" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <a className="dropdown-item" href="/">My profile</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">Settings</a>
                                </li>
                                <li><Link className="dropdown-item" to="/" onClick={this.logout}>Logout</Link></li>
                            </ul>
                        </div>
                        {/* Right elements */}
                    </div>
                    {/* Container wrapper */}
                </nav>
                {/* Navbar */}
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


