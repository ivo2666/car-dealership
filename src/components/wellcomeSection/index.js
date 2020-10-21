import React from 'react';
import styled from 'styled-components';
import hausImg from '../../images/bmwLS.jpg';
import { Link } from 'react-router-dom';

const Wellcome = styled.section`
height: 450px;
width: 100%;
background-image: url(${hausImg});
background-size: 100% 100%;
background-repeat: no-repeat;
display: flex;
justify-content: flex-end;
align-items: flex-end;
`

const StyledLink = styled(Link)`
opacity: 0.8;
margin-bottom: 50px;
margin-right: 56px;
height: 20px;
background: #2752E1; 
color: white;
font-family: 'Helvetica', sans-serif;
font-size: 18px;
font-weight: 800;
line-height: 18px;
text-align: right;
padding: 20px 40px 20px 40px;
text-align: center;
border-radius: 5px;
text-decoration: none;
`

export default () => (
    <>
        <Wellcome>
            <StyledLink to="/cars">
            РАЗГЛЕДАЙТЕ НАШИТЕ ПРЕДЛОЖЕНИЯ
            </StyledLink>
        </Wellcome>
    </>

)