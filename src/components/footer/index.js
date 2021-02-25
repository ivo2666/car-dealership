import React from 'react';
import styled from 'styled-components';
import ContactInfSection from '../contactInfSection';
import ContactMapSection from '../contactMapSection';
import Servises from '../footerServisesSection';

const Footer = styled.footer`
background: black;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-content: space-around;
`
export default () => (
    <Footer>
        <ContactInfSection />
        <ContactMapSection />
        <Servises />
    </Footer>
)