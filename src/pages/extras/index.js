import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import data from './data'
import styled from 'styled-components'
import urls from '../../config'
import { useHistory, useParams } from 'react-router-dom';
import getCookie from '../../helpers/cookie'
import getCar from '../../helpers/getCar'

const Container = styled.div`
form {
    margin: 3%;
    font-family: Verdana, Geneva, Tahoma, sans-serif
}
input, label {
    cursor: pointer;
}
`



export default () => {
    const [extras, setExtras] = useState([]);
    const [car, setCar] = useState({});

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
         getCar(id, setCar);
      }, [id] );

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
        const arr = Array.from(extras)
        if (e.target.checked) {
            arr.push(value)
            setExtras(arr)
        }else {
            const index = arr.findIndex(x => x === value)
            arr.splice(index, 1)
            return setExtras(
                arr
            )
        }
    }
    
    return (
        <Container>
            <Form onSubmit={submitHandler}>
                    <Row>
                        {data.map((i, index) => {
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
                        })}
                    </Row>
                <Button variant="primary" type="submit">
                    Към качване на снимки
  </Button>
            </Form>
        </Container>

    )
}

