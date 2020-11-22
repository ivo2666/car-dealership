import React from 'react';
import styled from 'styled-components';
import ContactInf from '../contactInf';
import ContactMap from '../contactMap';
import Servises from '../footerServises';

const Footer = styled.footer`
background: black;
display: flex;
justify-content: space-around;

div{
    width: 265px;
    margin-left: 40px;
}
a {
    margin-top: 9px;
}
`
export default () => (
    <Footer>
        <ContactInf />
        <ContactMap />
        <Servises />
    </Footer>
)