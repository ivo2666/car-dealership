import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import data from './data'
import Container from './styledCont';
import PageLayout from '../../components/pageLayout'
import { useHistory, useParams } from 'react-router-dom';
import {getOne, put} from '../../helpers/carRequests'

export default () => {
    const [car, setCar] = useState({});

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
         getOne(id, setCar);
      }, [id] );

    const submitHandler = async (e) => {
        e.preventDefault()
        put({extras: car.extras}, id, ({id}) => history.push(`/addCar/images/${id}`))
    }

    const changeHandler = (e) => {
        const value = e.target.value;
        const arr = Array.from(car.extras)
        if (e.target.checked) {
            arr.push(value)
            setCar({...car, extras: arr})
        }else {
            const index = arr.findIndex(x => x === value)
            arr.splice(index, 1)
            return setCar({...car, extras: arr})
        }
    }

    const items = data.map((i, index) => {
        if (car.extras && car.extras.includes(i)) {
            return (
                <Col key={index} sm={3}>
                       <Form.Check onChange={changeHandler} id={i} inline value={i} type="checkbox" defaultChecked label={i} />
                   </Col>
               )
        }else {
            return (
                <Col key={index} sm={3}>
                       <Form.Check onChange={changeHandler} id={i} inline value={i} type="checkbox" label={i} />
                   </Col>
               )
        }
    })
    
    return (
        <PageLayout>
        <Container>
            <Form onSubmit={submitHandler}>
                    <Row>
                        {items}
                    </Row>
                <Button variant="primary" type="submit">
                    Към качване на снимки
  </Button>
            </Form>
        </Container>
        </PageLayout>
    )
}

