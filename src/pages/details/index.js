import React from 'react';
import Container from './styledContainer';
import Slideshow from '../../components/detailsSlideshow'
import CarTable from './carTable'
import Description from './description'
import Extras from './extras'
import { getOne as getCar } from '../../helpers/carRequests'
import { Col, Row } from 'react-bootstrap';
import Spinner from '../../components/loadingSpinner'
import { UserContext } from '../../contexts';
import { useParams } from "react-router-dom";

export default () => {
    const {id} = useParams()
    const context = React.useContext(UserContext)
    const carFromState = context.cars ? context.cars.find(car => car.id === id) : undefined
    const [car, setCar] = React.useState(carFromState);

    React.useEffect(() => {
        if (!carFromState) {
            getCar(id, setCar)    
        }
    }, [id, carFromState])

    const body = () => {
        if (car) {
            return (
                <Container>
                    <h1>{`${car.brand} ${car.model}`}</h1>
                    <Row noGutters={true}>
                        <Col xs={12} xl={7}><Slideshow images={car.images ? car.images : []} /></Col>
                        <Col ><CarTable car={car} /></Col>
                        <Col sm="auto"><Extras extras={car.extras ? car.extras : []} /></Col>
                        <Col><Description>{car.description}</Description></Col>
                    </Row>
                </Container>
            )
        } else {
            return <Spinner />
        }
    }

    return (
        <>
            {body()}
        </>
    )
}