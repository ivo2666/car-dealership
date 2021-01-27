import React from 'react';
import { Form } from 'react-bootstrap';

export default (props) => {
    const handleChange = (e) => {
    const prop = e.target.name
const value = e.target.value;
        const obj = {[prop]:  value}
        props.onChange(obj)
    }
    return (
        <Form.Group as={props.as}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control  onChange={handleChange} name={props.name} as={props.type} value={props.value} placeholder={props.placeholder} >
                {props.children}
            </Form.Control>
        </Form.Group>
    )
}

