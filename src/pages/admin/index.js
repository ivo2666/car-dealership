import React, { useState, useEffect } from 'react';
import Card from '../../components/carReview';
import { Button } from 'react-bootstrap'
import EditDeletePanel from '../../components/editDeletePanel'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/header'
import { get as getCars } from '../../helpers/carRequests'

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
    getCars(setCars)
  }, [counter])

  return (
    <Admin>
      <Header />
      <Link id='add-car-link' to='/addCar'>
        <Button id='add-car-butt' variant="primary" size="lg" block>
          Добави кола
  </Button>
      </Link>
      <CardWrapper>
        {cars.map(car => {
          return <Card
            className="card"
            src={car.images[0]}
            brand={car.brand}
            model={car.model}
            engine={car.modification}
            price={car.price}
            key={car._id}
            id={car._id}
          >
            <EditDeletePanel
              carId={car._id}
              onDel={x => setCounter(counter + x)}
            />
          </Card>
        })}

      </CardWrapper>
    </Admin>
  )
}