import React from 'react';
import Container from './styledContainer';
import { Image, Col } from 'react-bootstrap';



export default (props) => (
    <Container>
            <Col md={5} xs={12}>
        <a href='/details' className='imageWraper'>
        <Image alt='car' src={props.src} />
        </a>
        </Col>
        <Col md={5} xs={12}>
        <div>
        <a href='/details'>
            <h1>{`${props.brand} / ${props.model} / ${props.engine}`}</h1>
            </a>
            <span>{props.price}</span>
        </div>
        </Col>
        <Col>{props.children}</Col>
    </Container>
) 
