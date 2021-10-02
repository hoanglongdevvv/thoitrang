import React from 'react'
// import fire from '../config/Fire'
// import Menu from './sgv/bars-solid.svg'
// import Close from './sgv/times-solid.svg'
import CartIcon from './sgv/shopping-cart-solid.svg'
import { Link } from 'react-router-dom'
import './css/Header.scss'
import 
import { DataContext } from './Context'
function Header() {
    
    const { cart } = this.context;
    return(
         <>
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                                <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height={15} alt="" loading="lazy" />
                            </a>
                            {/* Left links */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Projects</a>
                                </li>
                            </ul>
                            {/* Left links */}
                        </div>
                        {/* Collapsible wrapper */}
                        {/* Right elements */}
                        <div className="d-flex align-items-center">
                            {/* Icon */}
                            <a className="text-reset me-3" href="/">
                                <span>{cart.length}</span>
                                <Link to="/cart">
                                    <img src={CartIcon} alt="" width="20" />
                                </Link>
                            </a>
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
                                <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="rounded-circle" height={25} alt="" loading="lazy" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <a className="dropdown-item" href="/">My profile</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">Settings</a>
                                </li>
                                <li><Link to="/" onClick={this.logout}>Logout</Link></li>
                            </ul>
                        </div>
                        {/* Right elements */}
                    </div>
                    {/* Container wrapper */}
                </nav>
                {/* Navbar */}
         </>
    )
    
}
export default Header














// Phần Header 
// export class Header extends Component {
//     logout = () => {
//         fire.auth().signOut();
//     }

//     static contextType = DataContext;
//     state = {
//         toggle: false
//     }
//     menuToggle = () => {
//         this.setState({ toggle: !this.state.toggle })
//     }
//     render() {
//         // const {toggle} = this.state
//         const { cart } = this.context;
//         return (
//             <div>
//                 {/* Navbar */}
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                     {/* Container wrapper */}
//                     <div className="container-fluid">
//                         {/* Toggle button */}
//                         <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <i className="fas fa-bars" />
//                         </button>
//                         {/* Collapsible wrapper */}
//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                             {/* Navbar brand */}
//                             <a className="navbar-brand mt-2 mt-lg-0" href="/">
//                                 <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height={15} alt="" loading="lazy" />
//                             </a>
//                             {/* Left links */}
//                             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="/">Dashboard</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="/">Team</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="/">Projects</a>
//                                 </li>
//                             </ul>
//                             {/* Left links */}
//                         </div>
//                         {/* Collapsible wrapper */}
//                         {/* Right elements */}
//                         <div className="d-flex align-items-center">
//                             {/* Icon */}
//                             <a className="text-reset me-3" href="/">
//                                 <span>{cart.length}</span>
//                                 <Link to="/cart">
//                                     <img src={CartIcon} alt="" width="20" />
//                                 </Link>
//                             </a>
//                             {/* Notifications */}
//                             <a className="text-reset me-3 dropdown-toggle hidden-arrow" href="/" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
//                                 <i className="fas fa-bell" />
//                                 <span className="badge rounded-pill badge-notification bg-danger">1</span>
//                             </a>
//                             <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
//                                 <li>
//                                     <a className="dropdown-item" href="/">Some news</a>
//                                 </li>
//                                 <li>
//                                     <a className="dropdown-item" href="/">Another news</a>
//                                 </li>
//                                 <li>
//                                     <a className="dropdown-item" href="/">Something else here</a>
//                                 </li>
//                             </ul>
//                             {/* Avatar */}
//                             <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="/" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
//                                 <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="rounded-circle" height={25} alt="" loading="lazy" />
//                             </a>
//                             <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
//                                 <li>
//                                     <a className="dropdown-item" href="/">My profile</a>
//                                 </li>
//                                 <li>
//                                     <a className="dropdown-item" href="/">Settings</a>
//                                 </li>
//                                 <li><Link to="/" onClick={this.logout}>Logout</Link></li>
//                             </ul>
//                         </div>
//                         {/* Right elements */}
//                     </div>
//                     {/* Container wrapper */}
//                 </nav>
//                 {/* Navbar */}
//                 <header>
//                     <div className="menu" onClick={this.menuToggle}>
//                         <img src={Menu} alt="" width="20"/>
//                     </div>
//                     <div className="logo">
//                         <h1><Link to="/">Fashion Shop</Link></h1>
//                     </div>
//                     <nav>
//                         <ul className={toggle ? "toggle" : ""}>
//                             <li><Link to="/">Home</Link></li>
//                             <li><Link to="/product">Product</Link></li>
//                             <li><Link to="/about">About</Link></li>
//                             <li><Link to="/" onClick={this.logout}>Logout</Link></li>
//                             <li className="close" onClick={this.menuToggle}>
//                                 <img src={Close} alt=""  width="20"/>
//                             </li>
//                         </ul>
//                         <div className="nav-cart">
//                             <span>{cart.length}</span>
//                             <Link to="/cart">
//                                 <img src={CartIcon} alt=""  width="20"/>
//                             </Link>
//                         </div>
//                     </nav>
//                 </header>
//             </div>
//         )
//     }
// }

