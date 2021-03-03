import React from 'react';
import Container from './styledContainer';
import { Image, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'



export default (props) => {
    return (
        <Container>
                <Col md={5} xs={12}>
                    <Link to={`/details/${props.id}`}>
            <Image alt='car' src={props.src} />
            </Link>
            </Col>
            <Col md={5} xs={12}>
            <Link to={`/details/${props.id}`}>
            <h1>
                {`${props.brand} / ${props.model} / ${props.modification}`}
                </h1>
                <div className='price'>{`${props.price} лв.`}</div>
                <div className='inf'>{`${props.birdayYear} г.`}</div>
                <div className='inf'>{`${props.km} км.`}</div>
                <div className='inf'>{`${props.engine} `}</div>
                <Button>Детайли</Button>
                </Link>
            </Col>
            <Col>{props.children}</Col>
        </Container>
    )
} 
