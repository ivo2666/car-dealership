import React from 'react';
import styled from 'styled-components';
import ContactInf from '../contactInf';
import ContactMap from '../contactMap';
import Servises from '../footerServises';

const Footer = styled.footer`
background: black;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-content: space-around;
`
export default () => (
    <Footer>
        <ContactInf />
        <ContactMap />
        <Servises />
    </Footer>
)