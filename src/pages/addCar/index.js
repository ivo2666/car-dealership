import React, { useState, useEffect } from 'react';
import { Form, Col, Button, Alert } from 'react-bootstrap';
import styled from 'styled-components';
import PageLayout from '../../components/pageLayout'
import Field from '../../components/forms'
import ModelField from './modelField';
import BrandField from './brandfield';
import validationChek from './validationChek';
import { getCar, getCookie } from '../../helpers'
import urls from '../../config'
import { useHistory, useParams } from "react-router-dom"

const FormContainer = styled.div`
width: 80%;
margin: 100px auto;
`

export default () => {
    const [validation, setValidation] = useState(<></>)
    const [car, setCar] = useState({
brand: 'Mercedes',
model: '',
modification: '',
engine: 'Бензин',
power : '',
eurostandart: 'Евро 1',
gearbox: 'Ръчна',
category: 'Ван',
price: '',
km: '',
birdayMonth: 'Януари',
birdayYear: '',
color: '',
description: ''
    });

  const { id } = useParams();
  const history = useHistory();
  const method = id ? "PUT" : "POST";

  useEffect(() => {
    if (id) {
     getCar(id, setCar);
    }
  }, [id] );



  const handleChange = (field) => {
    setCar({...car, ...field})
  }

  const submitHandler = (e) => {
    e.preventDefault()
    
    const valid = validationChek(car)
    if (valid) {
      setValidation(<Alert variant='danger'>{valid}</Alert>)
    }
    else {
      fetch( id ? `${urls.postCar}/${id}` : `${urls.postCar}`, {
        method: method,
        body: JSON.stringify(car),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': getCookie('x-auth-token')
        }
      })
      .then(promis => promis.json())
      .then(resCar => {
        const _id = id ? id : resCar._id;
        return history.push(`/addCar/extras/${_id}`)
      })
        .catch(err => console.log(err))
    }
  }

  return (
    <PageLayout>
    <FormContainer>
      {validation}
      <Form onSubmit={submitHandler}>
        <Form.Row>
          <BrandField onBrandChange={handleChange} Col={Col} value={car.brand} />
          <ModelField brand={car.brand} model={car.model} onModelChange={handleChange} Col={Col} />

        </Form.Row>

        <Form.Row>

          <Field as={Col} onChange={handleChange} value={car.modification} controlId="formGridModification" label='Модификация' name='modification' />

          <Field type='select' label='Двигател' as={Col} onChange={handleChange} value={car.engine} controlId="formGridEngine" name='engine'>
            <option>Избери</option>
            <option>Бензин</option>
            <option>Дизел</option>
            <option>Електрически</option>
            <option>Хибриден</option>
          </Field>

        </Form.Row>

        <Form.Row>

          <Field as={Col} onChange={handleChange} value={car.power} controlId="formGridPower" label='Мощност [к.с.]' name='power' />

          <Field type='select' onChange={handleChange} value={car.eurostandart} label='Евростандарт' as={Col} controlId="formGridEurostandart" name='eurostandart'>
            <option>Евро 1</option>
            <option>Евро 2</option>
            <option>Евро 3</option>
            <option>Евро 4</option>
            <option>Евро 5</option>
            <option>Евро 6</option>
          </Field>

        </Form.Row>

        <Form.Row>

          <Field type='select' as={Col} onChange={handleChange} value={car.gearbox} controlId="formGridTransmition" label='Скоросна кутия' name='gearbox'>
            <option>Ръчна</option>
            <option>Автоматична</option>
            <option>Полуавтоматична</option>
          </Field>

          <Field type='select' as={Col} onChange={handleChange} value={car.category} controlId="formGridCategory" label='Категория' name='category'>
            <option>Ван</option>
            <option>Джип</option>
            <option>Кабрио</option>
            <option>Комби</option>
            <option>Купе</option>
            <option>Миниван</option>
            <option>Пикап</option>
            <option>Седан</option>
            <option>Хечбек</option>
            <option>Стреч лимузина</option>
          </Field>

        </Form.Row>

        <Form.Row>

          <Field as={Col} onChange={handleChange} value={car.price} controlId="formGridPrice" label='Цена' name='price' />

          <Field as={Col} onChange={handleChange} value={car.km} controlId="formGridMileage" label='Пробег' name='km' />

        </Form.Row>

        <Form.Row>

          <Field type='select' as={Col} onChange={handleChange} value={car.birdayMonth} controlId="formGridBirdayDate" label='Дата на производство' name='birdayMonth' >
            <option>Януари</option>
            <option>Февруари</option>
            <option>Март</option>
            <option>Април</option>
            <option>Май</option>
            <option>Юни</option>
            <option>Юли</option>
            <option>Август</option>
            <option>Септември</option>
            <option>Октомври</option>
            <option>Ноември</option>
            <option>Декември</option>
          </Field>

          <Field as={Col} onChange={handleChange} value={car.birdayYear} controlId="formGridYear" label='Година' name='birdayYear' />

        </Form.Row>

        <Form.Row>

          <Field as={Col} onChange={handleChange} value={car.color} controlId="formGridColor" label='Цвят' name='color' />

        </Form.Row>
        <Form.Row>

          <Field as={Col} type="textarea" onChange={handleChange} value={car.description} controlId="formGridDescription" label='Описание' name='description' />

        </Form.Row>

        <Button variant="primary" type="submit">
          Към добавяне на екстри
  </Button>
      </Form>
    </FormContainer>
    </PageLayout>
  )
}