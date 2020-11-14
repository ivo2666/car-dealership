import React from 'react';
import styled from 'styled-components';
import H1 from '../carSectionH1';

const Section = styled.section`
display: flex;
padding: 40px;
border-bottom: 1px solid red;

img {
    width: 596px;
}
div {
    width: 596px;
    margin: 0px 0 0 30px;
    font-family: 'Roboto', sans-serif;
    color: #4f4f4f;
    font-weight: 700;
}



a {
    text-decoration: none;
}
`

export default () => (
    <Section>
        <a href='/details'>
        <img alt='car' src='https://res.cloudinary.com/retro-cars/image/upload/v1595752811/slideCar6_iyoooo.jpg' />
        </a>
        <div>
        <a href='/details'>
            <H1>Audi A4 Automat/Navi/LED/Подгрев</H1>
            </a>
            <span>лв.11,900.00</span>
        </div>
    </Section>
) 
