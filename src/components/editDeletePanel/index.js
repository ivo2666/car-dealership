import React from 'react';
import { useHistory } from 'react-router-dom'
import { Button, Col } from 'react-bootstrap';
import Container from './styledContainer';
import { delOne } from '../../helpers/carRequests'
import { eventErrHandler } from '../../helpers'

export default (props) => {
  const history = useHistory();

  const clickHandler = () => history.push(`/addCar/${props.carId}`)

  const deleteHandler = () => {
   delOne(props.carId, props.onDel(1)) 
  }

    return( 
      <Container>
        <Col md={12} xs={6}>
        <Button onClick={() => eventErrHandler(clickHandler)} variant="primary">Промени</Button>
        </Col>
        <Col >
        <Button onClick={() => eventErrHandler(deleteHandler)} variant="primary">Изтий</Button>
        </Col>
</Container>
    )
}