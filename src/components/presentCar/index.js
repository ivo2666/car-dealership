import React from 'react';
import Container from './styledContainer';
import { Image, Row, Col } from 'react-bootstrap';



export default (props) => (
    <Container>
        <Row>
            <Col >
        <a href='/details' className='imageWraper'>
        <Image alt='car' src={props.src} />
        </a>
        </Col>
        <Col >
        <div>
        <a href='/details'>
            <h1>{`${props.brand} / ${props.engine} / ${props.engine}`}</h1>
            </a>
            <span>{props.price}</span>
        </div>
        </Col>
        </Row>
    </Container>
) 
