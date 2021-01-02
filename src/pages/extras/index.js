import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import data from './data'
import styled from 'styled-components'

const Container = styled.div`
form {
    margin: 3%;
}
`


export default () => {
    return (
        <Container>
        <Form>
            <Form.Group  controlId="formBasicCheckbox">
                <Row>
            {data.map((x, index) => {
                return (
                    <Col key={index} sm={3}>
                        <Form.Check  type="checkbox" label={x} />
                        </Col>
                )
            })}
            </Row>
 </Form.Group>
            <Button variant="primary" type="submit">
                Submit
  </Button>
        </Form>
        </Container>

    )
}

