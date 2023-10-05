import "./navbar.css";
import {Link} from "react-router-dom";

import {useContext,} from 'react';
import StoreContext from '../state/storeContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    let user = useContext(StoreContext).user;
    let cart = useContext(StoreContext).cart;

    return (
        <header className="navbarcomponent">
            <h1 className="title">IoT Market</h1>
            <nav className="header-nav">
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/about">About</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/cart"> <FontAwesomeIcon icon={faShoppingCart} /> {cart.length}</Link>


                <div className="user-container">
                    <FontAwesomeIcon icon={faUser}/>
                    <label>{user.name}</label>
                </div>
                
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">IoT Market</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/catalog">Catalog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart"> <FontAwesomeIcon icon={faShoppingCart} /> {cart.length}</Link>
                            </li>
                            <li className="nav-item">
                                <label><FontAwesomeIcon icon={faUser} />  {user.name}</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;