import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import data from './data'
import Container from './styledCont';
import PageLayout from '../../components/pageLayout'
import { useHistory, useParams } from 'react-router-dom';
import {getOne, put} from '../../helpers/carRequests'
import { eventErrHandler } from "../../helpers"; 

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
        if (e.target.checked) {
            setCar({...car, extras: [...car.extras, e.target.value]})
        }else {
            const arr = [...car.extras]
            const index = arr.findIndex(x => x === value)
            arr.splice(index, 1)
            return setCar({...car, extras: arr})
        }
    }

    const items = data.map((i, index) => {
        if (car.extras && car.extras.includes(i)) {
            return (
                <Col key={index} sm={3}>
                       <Form.Check onChange={e => eventErrHandler(() => changeHandler(e))} id={i} inline value={i} type="checkbox" defaultChecked label={i} />
                   </Col>
               )
        }else {
            return (
                <Col key={index} sm={3}>
                       <Form.Check onChange={e => eventErrHandler(() => changeHandler(e))} id={i} inline value={i} type="checkbox" label={i} />
                   </Col>
               )
        }
    })
    
    return (
        <PageLayout>
        <Container>
            <Form onSubmit={e => eventErrHandler(() => submitHandler(e))}>
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

