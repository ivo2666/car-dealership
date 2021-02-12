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
                {`${props.brand} / ${props.model} / ${props.engine}`}
                </h1>
                <div className='price'>{`${props.price} лв`}</div>
                <Button>Детайли</Button>
                </Link>
            </Col>
            <Col>{props.children}</Col>
        </Container>
    )
} 
