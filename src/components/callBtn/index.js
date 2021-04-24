import React from 'react';
import styled from 'styled-components'
import { Image } from 'react-bootstrap'

const StyledImage = styled(Image)`
margin-left: 3%;
width:5%;
`

export default (props) => {
    return (
        <StyledImage src={props.src}/>
    )
}