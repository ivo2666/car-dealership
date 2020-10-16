import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-white.png';

const Logo = styled.img`
height: ${props => props.height ? props.height : "100px"};
margin-left: 110px;
`

export default () => (
    <Link to='/'>
        <Logo src={logo} alt='logo' height='70px'/>
    </Link>    
)