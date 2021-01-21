import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import data from './data'
import styled from 'styled-components'
import urls from '../../config'
import { useHistory, useParams } from 'react-router-dom';
import getCookie from '../../helpers/cookie'

const Container = styled.div`
form {
    margin: 3%;
    font-family: Verdana, Geneva, Tahoma, sans-serif
}
`


export default () => {
    const [extras, setExtras] = useState([]);

    const { id } = useParams();
    const history = useHistory();

    const submitHandler = async (e) => {
        e.preventDefault()
        
        fetch(`${urls.postCar}/${id}`, {
            method: 'PUT',
                body: JSON.stringify({extras: extras}),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': getCookie('x-auth-token')
            }
          })
          .then(promis => {
            return promis.json();
          })
        .then(resCar => {
            return history.push(`/addCar/images/${resCar.id}`)
        })
        .catch(err => {
            return console.log(err);
        }) 
            
    }

    const changeHandler = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            setExtras([...extras, value])
            
        }else {
            const index = extras.findIndex(x => x === value)
            extras.splice(index, 1)
            return setExtras(
                extras
            )
        }
    }
    return (
        <Container>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="formBasicCheckbox">
                    <Row>
                        {data.map((x, index) => {
                            return (
                                <Col key={index} sm={3}>
                                    <Form.Check onChange={changeHandler} value={x} type="checkbox" label={x} />
                                </Col>
                            )
                        })}
                    </Row>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Към качване на снимки
  </Button>
            </Form>
        </Container>

    )
}

