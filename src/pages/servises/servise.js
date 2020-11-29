import React from 'react';
import styled from 'styled-components';

const Container = styled.a`
background-color: rgba(0, 0, 0, 0.3); 
width: 22%;
//height: 280px;
text-align: center;
text-decoration: none;
display: block;
margin-bottom: 20px;
margin-right: 4%;

:hover {
    background-color: rgba(0, 0, 0, 0.6);
    text-decoration: none;
}


h2 {
    font-size: 24px;
    font-family: Roboto, sans-serif;
    font-weight: 600;
    color: white;
    margin: auto;
}

img {

    width:70%;
    //max-width: 100%;
}
`

export default (props) => {
    return (
        <Container href={props.href}>
            <img src={props.src} alt='png' />
            <h2>{props.title}</h2>
        </Container>
    )
}