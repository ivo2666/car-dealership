import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import brands from './carBrands'

const FormContainer = styled.div`
width: 80%;
margin: 100px auto;
`

export default () => {
    const [models, setModels] = useState([])
    const handleModels = (e) => {
        return (
            setModels(brands[e.target.options.selectedIndex - 1].models)
        )
    }
    
    return (
        <FormContainer>
            <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridBrand">
      <Form.Label>Марка</Form.Label>
      <Form.Control onChange={handleModels} as="select" defaultValue="Избери">
          <option>Избери</option>
          {brands.map((car, index) => {
              return (
                <option id={index} key={index} value={car.brand}>{car.brand}</option>
              )
          })}
      </Form.Control>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridModel">
      <Form.Label>Model</Form.Label>
      <Form.Control as="select" defaultValue="Избери">
          <option>Избери</option>
          {models.map((model, index) => {
              return (
                <option key={index} value={model}>{model}</option>
              )
          })}
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </FormContainer>
    )
}