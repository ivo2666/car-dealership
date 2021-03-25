import React, { useState, useEffect, useContext } from 'react';
import Card from '../../components/carReview'
import { get as getCars } from '../../helpers/carRequests'
import Spinner from '../../components/loadingSpinner'
import { UserContext } from "../../contexts";

const Cars = () => {
  const context = useContext(UserContext)
    const [cars, setCars] = useState(context.cars ? context.cars : null);

    useEffect(() => {
        if (!context.cars) {
          getCars(setCars)
        }
      }, [context.cars])

      const body = () => {
        if (!cars) {
          return <Spinner /> 
        }else {
          return (
            cars.map(car => {
              return <Card
                className="card"
                src={car.images[0]}
                brand={car.brand}
                model={car.model}
                modification={car.modification}
                price={car.price}
                birdayYear={car.birdayYear}
                engine={car.engine}
                km={car.km}
                id={car._id}
                key={car._id}
              />})
          )
        }
      }

    return (
        <>
            {body()}
        </>
    )
}

export default Cars