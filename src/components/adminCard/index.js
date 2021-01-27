import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import StyledBtn from './styledButton'
import urls from '../../config'
import getCookie from '../../helpers/cookie'

export default (props) => {
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
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>{`${props.brand} ${props.model}`}</Card.Title>
    <Card.Text>
      {props.description}
    </Card.Text>
    <StyledBtn variant="primary">
      <Link to={`/addCar/${props.carId}`}>Промени</Link>
      </StyledBtn>
    <StyledBtn onClick={deleteHandler} variant="primary">Изтий</StyledBtn>
  </Card.Body>
</Card>
    )
}