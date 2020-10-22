import React from 'react';
import styled from 'styled-components';
import Logo from '../logo';
import Nav from '../nav';

const StyledHeader = () => {
    return (
        <Header>
            <Logo />
            <Nav />
        </Header>
    )
}

const Header = styled.header`
height: 100px;
background: black;
display: flex;
justify-content: space-between;
align-items: center;
`

export default StyledHeader