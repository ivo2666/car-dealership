import React from 'react';
import { useHistory } from 'react-router-dom'
import { Button, Col } from 'react-bootstrap';
import Container from './styledContainer';
import urls from '../../../config'
import getCookie from '../../../helpers/cookie'

export default (props) => {
  const history = useHistory();

  const clickHandler = () => history.push(`/addCar/${props.carId}`)

  const deleteHandler = () => {
    fetch(`${urls.postCar}/${props.carId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('x-auth-token')
      }
    })
    .then(promis => {
      return promis.json();
    })
  .then(resCar => {
    props.onDel(1)
      return resCar
  })
  .catch(err => {
      return console.log(err);
  })
  }

    return( 
      <Container>
        <Col md={12} xs={6}>
        <Button onClick={clickHandler} variant="primary">Промени</Button>
        </Col>
        <Col >
        <Button onClick={deleteHandler} variant="primary">Изтий</Button>
        </Col>
</Container>
    )
}