import React from 'react';
import Container from './styledContainer';
import { Image, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'



export default (props) => {
    const history = useHistory();
    const clickHandler = () => {
         history.push(`/details${props.carId}`)
    }

    return (
        <Container>
                <Col md={5} xs={12}>
            <Image alt='car' src={props.src} onClick={clickHandler} />
            </Col>
            <Col md={5} xs={12}>
            <div onClick={clickHandler} className='info'>
                <h1>{`${props.brand} / ${props.model} / ${props.engine}`}</h1>
                <div className='price'>{`${props.price} лв`}</div>
                <Button onClick={clickHandler}>Детайли</Button>
            </div>
            </Col>
            <Col>{props.children}</Col>
        </Container>
    )
} 
