import React from 'react';
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Container from './styledContainer';
import urls from '../../config'
import getCookie from '../../helpers/cookie'

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
    <Button onClick={clickHandler} variant="primary">Промени</Button>
    <Button onClick={deleteHandler} variant="primary">Изтий</Button>
</Container>
    )
}