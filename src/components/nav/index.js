import React from 'react';
import styled from 'styled-components';
import Flags from '../../components/flags'
import Link from '../link';

const Nav = styled.nav`
width: 50%;
list-style-type: none;
display: flex;
justify-content: space-around;
align-items: center;
`

export default () => (
        <Nav>
                <Link to="/cars">АВТОМОБИЛИ</Link>
                <Link to="/">ЗА НАС</Link>
                <Link to="/">УСЛУГИ</Link>
                <Link to="/">КОНТАКТИ</Link>
                <Flags />
        </Nav>
)