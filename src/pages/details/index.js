import React from 'react';
import Container from './styledContainer';
import Layout from '../../components/pageLayout'
import Slideshow from '../../components/detailsSlideshow'
import CarTable from './carTable'
import Description from './description'
import Extras from './extras'
import { getOne as getCar } from '../../helpers/carRequests'
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Spinner from '../../components/loadingSpinner'

export default () => {
    const [car, setCar] = React.useState(undefined);
    const { id } = useParams()

    React.useEffect(() => {
        getCar(id, setCar)
    }, [id])

    const body = () => {
        if (car) {
            return (
                <Container>
                    <h1>{`${car.brand} ${car.model}`}</h1>
                    <Row noGutters={true}>
                        <Col><Slideshow images={car.images ? car.images : []} /></Col>
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
        <Layout>
            {body()}
        </Layout>
    )
}