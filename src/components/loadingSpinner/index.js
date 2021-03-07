import React from 'react';
import { Spinner } from 'react-bootstrap'
import styled from 'styled-components'

const Container = styled.div`
height: ${window.innerWidth}px;
justify-content:center;
display:flex;
padding: 10%;

.spinner-grow {
    margin: 7px;
}
`

export default () => {
    return (
        <Container>
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="primary" />
        </Container>
    )
}