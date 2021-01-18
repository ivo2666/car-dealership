import React, { useState } from 'react';
import { Form, Col, Button, Alert } from 'react-bootstrap';
import styled from 'styled-components';
import Field from '../../components/forms'
import ModelField from './modelField';
import BrandField from './brandfield';
import validationChek from './validationChek';
import urls from '../../config';
import getCookie from '../../helpers/cookie';
import { useHistory } from "react-router-dom"

const FormContainer = styled.div`
width: 80%;
margin: 100px auto;
`

export default () => {
  const [validation, setValidation] = useState(<></>)
  const [brand, setBrand] = useState('Mercedes')
  const [model, setModel] = useState('')
  const [modification, setModification] = useState('')
  const [engine, setEngine] = useState('Бензин')
  const [power, setPower] = useState('')
  const [eurostandart, setEurostandart] = useState('Евро 1')
  const [gearbox, setGearbox] = useState('Ръчна')
  const [category, setCategory] = useState('Ван')
  const [price, setPrice] = useState('')
  const [km, setKm] = useState('')
  const [birdayMont, setBirdayMont] = useState('Януари')
  const [birdayYear, setBirdayYear] = useState('')
  const [color, setColor] = useState('')

  const history = useHistory();

  const onBrandChange = (brand) => {
    setBrand(brand)
  }


  const submitHandler = async (e) => {
    e.preventDefault()
    
    const data = {
      brand,
      model,
      modification,
      engine,
      power,
      eurostandart,
      gearbox,
      category,
      price,
      km,
      birdayMont,
      birdayYear,
      color
    }
    const validationObj = {
      Марка: brand,
      Модел: model,
      Модификация: modification,
      Двигател: engine,
      Мошност: power,
      Евростандарт: eurostandart,
      'Скоростна кутия': gearbox,
      Категория: category,
      Цена: price,
      Пробег: km,
      'Дата на производство': birdayMont,
      Година: birdayYear,
      Цвят: color,
    };
    const valid = validationChek(validationObj)
    if (valid) {
      setValidation(<Alert variant='danger'>{valid}</Alert>)
    }
    else {
      const promis = await fetch(urls.postCar, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': getCookie('x-auth-token')
        }
      });
        const resCar =  await promis.json();
        history.push(`/addCar/extras/${resCar._id}`)
    }
  }

  return (
    <FormContainer>
      {validation}
      <Form onSubmit={submitHandler}>
        <Form.Row>
          <BrandField onBrandChange={onBrandChange} Col={Col} />
          <ModelField brand={brand} model={model} onModelChange={d => setModel(d)} Col={Col} />

        </Form.Row>

        <Form.Row>

          <Field as={Col} onValueChg={d => setModification(d)} value={modification} controlId="formGridModification" label='Модификация' name='modification' />

          <Field type='select' label='Двигател' as={Col} onValueChg={d => setEngine(d)} value={engine} controlId="formGridEngine" name='engine'>
            <option>Избери</option>
            <option>Бензин</option>
            <option>Дизел</option>
            <option>Електрически</option>
            <option>Хибриден</option>
          </Field>

        </Form.Row>

        <Form.Row>

          <Field as={Col} onValueChg={d => setPower(d)} value={power} controlId="formGridPower" label='Мощност [к.с.]' name='power' />

          <Field type='select' onValueChg={d => setEurostandart(d)} value={eurostandart} label='Евростандарт' as={Col} controlId="formGridEurostandart" name='eurostandart'>
            <option>Евро 1</option>
            <option>Евро 2</option>
            <option>Евро 3</option>
            <option>Евро 4</option>
            <option>Евро 5</option>
            <option>Евро 6</option>
          </Field>

        </Form.Row>

        <Form.Row>

          <Field type='select' as={Col} onValueChg={d => setGearbox(d)} value={gearbox} controlId="formGridTransmition" label='Скоросна кутия' name='gearbox'>
            <option>Ръчна</option>
            <option>Автоматична</option>
            <option>Полуавтоматична</option>
          </Field>

          <Field type='select' as={Col} onValueChg={d => setCategory(d)} value={category} controlId="formGridCategory" label='Категория' name='category'>
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

          <Field as={Col} onValueChg={d => setPrice(d)} value={price} controlId="formGridPrice" label='Цена' name='price' />

          <Field as={Col} onValueChg={d => setKm(d)} value={km} controlId="formGridMileage" label='Пробег' name='km' />

        </Form.Row>

        <Form.Row>

          <Field type='select' as={Col} onValueChg={d => setBirdayMont(d)} value={birdayMont} controlId="formGridBirdayDate" label='Дата на производство' name='birdayMont' >
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

          <Field as={Col} onValueChg={d => setBirdayYear(d)} value={birdayYear} controlId="formGridYear" label='Година' name='birdayYear' />

        </Form.Row>

        <Form.Row>

          <Field as={Col} onValueChg={d => setColor(d)} value={color} controlId="formGridColor" label='Цвят' name='color' />

        </Form.Row>

        <Button variant="primary" type="submit">
          Към добавяне на екстри
  </Button>
      </Form>
    </FormContainer>
  )
}