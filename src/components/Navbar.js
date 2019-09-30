import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ryo from '../ryo.png';
import styled from "styled-components";

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={ryo} alt="ryo" className="navbar-brand w-25" />
                </Link>
                <ul className="ul.navbar-nav.align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Products</Link>
                    </li>
                    </ul>   
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                            <i className="fas fa-cart-plus" /> 
                            </span>
                            My Cart 
                        </ButtonContainer>
                    </Link>
            </nav>
         );
    }
}

const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
`
 
export default NavBar;