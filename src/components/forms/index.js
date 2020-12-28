import React from 'react';
import { Form } from 'react-bootstrap';

export default (props) => {
    return (
<Form.Group {...props} >
      <Form.Label>{props.label}</Form.Label>
      <Form.Control as={props.type} value={props.value} placeholder={props.placeholder} >
          {props.children}
      </Form.Control>
    </Form.Group>        
    )
}

