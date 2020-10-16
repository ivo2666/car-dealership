import React from 'react';
import uk from '../../images/flags/united-kingdom.png'
import bul from '../../images/flags/bulgaria.png'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Flag = styled.img`
width: 30px;
margin: 5px;
`
export default () => (
    <>
    <Link to="#">
        <Flag src={uk} alt='flag'/>
    </Link>
    <Link to="#">
        <Flag src={bul} alt='flag'/>
    </Link>
    </>
)