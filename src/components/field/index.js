import React from 'react';
import { Form } from 'react-bootstrap';
import { eventErrHandler } from '../../helpers'

export default (props) => {
    const handleChange = (e) => {
    const prop = e.target.name
const value = e.target.value;
        const obj = {[prop]:  value}
        props.onChange(obj)
    }
    return (
        <Form.Group as={props.as} >
            <Form.Label>{props.label}</Form.Label>
            <Form.Control as={props.type} type={props.password} onChange={e => eventErrHandler(() => handleChange(e))} name={props.name} value={props.value} placeholder={props.placeholder} >
                {props.children}
            </Form.Control>
        </Form.Group>
    )
}

