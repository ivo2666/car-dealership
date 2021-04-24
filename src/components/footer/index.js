import React from 'react';
import styled from 'styled-components';
import ContactInfSection from '../contactInfSection';
import ContactMapSection from '../contactMapSection';
import Services from '../../components/footerServicesSection';

const Footer = styled.footer`
background: black;
padding:40px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-content: space-around;
`
export default () => (
    <Footer>
        <ContactInfSection />
        <ContactMapSection />
        <Services />
    </Footer>
)