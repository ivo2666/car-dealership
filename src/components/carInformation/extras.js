import React from 'react';
import styled from 'styled-components';

const Extras = styled.ul`
font-size: 15px;
color: black;
display: flex;
flex-wrap: wrap;
line-height: 20px;
li {
    margin: 0 60px 15px 0;
    width: 160px;
}
span {
    color: #2752E1;
}
`

export default () => (
    <Extras>
        <li><span>Audio video</span></li>
        <li><span>Автоматичен контрол на стабилността</span></li>
        <li><span>Адаптивни предни светлини</span></li>
        <li><span>Адаптивни предни светлини</span></li>
        <li><span>Адаптивни предни светлини</span></li>
        <li><span>Адаптивни предни светлини</span></li>
        <li><span>Адаптивни предни светлини</span></li>
    </Extras>
)