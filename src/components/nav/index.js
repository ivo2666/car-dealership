import React from 'react';
import styled from 'styled-components';
import Flags from '../flags'
import Link from '../link';

const Nav = styled.nav`
width:60%;
min-width: 300px;
list-style-type: none;
display: flex;
justify-content: space-around;
align-items: center;
a {
        font-size: 1.5vw;
}
`

export default () => (
        <Nav>
                <Link to="/cars">АВТОМОБИЛИ</Link>
                <Link to="/forUs">ЗА НАС</Link>
                <Link to="/servises">УСЛУГИ</Link>
                <Link to="/contacts">КОНТАКТИ</Link>
                <Flags />
        </Nav>
)