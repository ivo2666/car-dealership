import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';

const MyButton = styled(Button)`
margin-left: 12%;
`

export default (props) => {
    return( 
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>{`${props.brand} ${props.model}`}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <MyButton variant="primary">Промени</MyButton>
    <MyButton variant="primary">Изтий</MyButton>
  </Card.Body>
</Card>
    )
}