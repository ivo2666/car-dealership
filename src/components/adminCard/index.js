import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';

const MyButton = styled(Button)`
margin-left: 12%;
`

export default () => {
    return( 
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
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