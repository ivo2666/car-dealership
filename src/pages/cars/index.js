import React, { useState, useEffect } from 'react';
import PageLayot from '../../components/pageLayout'
import Card from '../../components/carReview'
import { get as getCars } from '../../helpers/carRequests'

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getCars(setCars)
      }, [])

    return (
        <PageLayot>
            {cars.map(car => {
          return <Card
            className="card"
            src={car.images[0]}
            brand={car.brand}
            model={car.model}
            engine={car.modification}
            price={car.price}
            id={car._id}
            key={car._id}
          />})}
        </PageLayot>
    )
}

export default Cars