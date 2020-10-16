import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Flags from '../../components/flags'

const StyledLink = styled(Link)`
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    font-weight: 68px;
    text-align: right;
    color: white;
    &:hover {
    color: #2752E1; 
  }
`

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
                <StyledLink to="/">АВТОМОБИЛИ</StyledLink>
            </Item>
            <Item>
                <StyledLink to="/">ЗА НАС</StyledLink>
            </Item>
            <Item>
                <StyledLink to="/">УСЛУГИ</StyledLink>
            </Item>
            <Item>
                <StyledLink to="/">КОНТАКТИ</StyledLink>
            </Item>
            <Item>
                <Flags />
            </Item>
        </Nav>
    </nav>
)