import React from 'react';
import Card from '../../components/adminCard';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardWrapper = styled.section`
display: flex;
flex-wrap: wrap; 
justify-content: space-around;

`

const Admin = styled.main`
#add-car-link {
  height: 50px;
  text-decoration: none;
}

#add-car-butt {
  width: 70%;
  margin: 70px auto 30px auto;
}
`



export default () => {
  return (
    <Admin>
      <Link id='add-car-link' to='/addCar'>
        <Button id='add-car-butt' variant="primary" size="lg" block>
          Добави кола
  </Button>
      </Link>
      <CardWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardWrapper>

    </Admin>
  )
}