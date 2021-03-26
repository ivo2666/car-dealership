import styled from 'styled-components';
import React from 'react'
import Title from './title'

const Description = styled.p`
color: #4f4f4f;
line-height: 31px;
margin: 10px;
//text-align:center;
`

export default (props) => {
    return (
        <>
    <Title>Описание</Title>
    <Description>{props.children}</Description>
    </>
    )
}