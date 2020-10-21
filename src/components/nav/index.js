import React from 'react';
import styled from 'styled-components';
import Flags from '../../components/flags'
import Link from '../link';

const Nav = styled.ul`
list-style-type: none;
width: 600px;
display: flex;
justify-content: space-around;
align-items: center;
`

const Item = styled.li`
`
export default () => (
    <nav>
        <Nav>
            <Item>
                <Link to="/cars">АВТОМОБИЛИ</Link>
            </Item>
            <Item>
                <Link to="/">ЗА НАС</Link>
            </Item>
            <Item>
                <Link to="/">УСЛУГИ</Link>
            </Item>
            <Item>
                <Link to="/">КОНТАКТИ</Link>
            </Item>
            <Item>
                <Flags />
            </Item>
        </Nav>
    </nav>
)