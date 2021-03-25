import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import urls from '../../config'

const Logo = styled.img`
//width: 250px;
height: 45px;
display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
`

export default () => (
    <Link to='/'>
        <Logo src={`${urls.server}/logo-white.png`} alt='logo' height='70px'/>
    </Link>    
)