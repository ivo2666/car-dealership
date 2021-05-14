import React, { useState, useEffect } from 'react';
import { Form, Col, Button, Alert } from 'react-bootstrap';
import Container from './styleCont';
import Field from '../../components/field'
import ModelField from './modelField';
import BrandField from './brandfield';
import validationChek from './validationChek';
import { getOne, put, post } from '../../helpers/carRequests'
import { useHistory, useParams } from "react-router-dom"
import { eventErrHandler } from "../../helpers";

export default () => {
  const [validation, setValidation] = useState(<></>)
  const [car, setCar] = useState({
    brand: '',
    model: '',
    modification: '',
    engine: 'Бензин',
    power: '',
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
  const method = id ? (data, cb) => put(data, id, cb) : (data, cb) => post(data, cb);

  useEffect( () => {
    if (id) {
    getOne(id, setCar)
    }
  }, [id]);

  const handleChange = (field) => {
    eventErrHandler(() => setCar({ ...car, ...field }))
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const valid = validationChek(car)
    if (valid) {
      setValidation(<Alert variant='danger'>{valid}</Alert>)
    }
    else {
      method(car, (carResp) => history.push(`/addCar/extras/${carResp._id ? carResp._id : id}`))
         
    }
  }

  return (
      <Container>
        {validation}
        <Form onSubmit={e => eventErrHandler(() => submitHandler(e))}>
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
      </Container>
  )
}