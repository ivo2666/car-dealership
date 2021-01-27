import React, { useState, useEffect} from 'react';
import Card from '../../components/adminCard';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import urls from '../../config';

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

.card {
  margin: 10px;
}
`



export default () => {
const [cars, setCars] = useState([]);
const [counter, setCounter] = useState(0);

useEffect(() => {
  fetch(urls.getCars)
  .then(x => x.json())
  .then(data => {
     setCars(data)
  })
  .catch(err => console.log(err))
},[counter])

  return (
    <Admin>
      <Link id='add-car-link' to='/addCar'>
        <Button id='add-car-butt' variant="primary" size="lg" block>
          Добави кола
  </Button>
      </Link>
      <CardWrapper>
        {cars.map(car => {
          return <Card
          className="card"
          img={car.images[0]}
          brand={car.brand}
          model={car.model}
          description={car.description}
          key={car._id}
          carId={car._id}
          onDel={x => setCounter(counter + x)}
           /> 
        })}
        
      </CardWrapper>

    </Admin>
  )
}