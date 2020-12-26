import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Field from '../../components/forms'
import BrandModel from './brandModel';

const FormContainer = styled.div`
width: 80%;
margin: 100px auto;
`

export default () => {
  const [values, setValues] = useState({
    
  })
  return (
    <FormContainer>
      <Form>

        <Form.Row>

          <BrandModel Col={Col}/>

        </Form.Row>

        <Form.Row>

          <Field as={Col} controlId="formGridModification" label='Модификация' name='modification' />

          <Field type='select' label='Двигател' as={Col} controlId="formGridEngine" name='engine'>
            <option>Избери</option>
            <option>Бензин</option>
            <option>Дизел</option>
            <option>Електрически</option>
            <option>Хибриден</option>
          </Field>

        </Form.Row>

        <Form.Row>

          <Field as={Col} controlId="formGridPower" label='Мощност [к.с.]' name='power'/>

          <Field type='select' label='Евростандарт' as={Col} controlId="formGridEurostandart" name='eurostandart'>
            <option>Евро 1</option>
            <option>Евро 2</option>
            <option>Евро 3</option>
            <option>Евро 4</option>
            <option>Евро 5</option>
            <option>Евро 6</option>
          </Field>

        </Form.Row>

        <Form.Row>

          <Field type='select' as={Col} controlId="formGridTransmition" label='Скоросна кутия' name='gearbox'>
            <option>Ръчна</option>
            <option>Автоматична</option>
            <option>Полуавтоматична</option>
          </Field>

          <Field type='select' as={Col} controlId="formGridCategory" label='Категория' name='category'>
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

          <Field as={Col} controlId="formGridPrice" label='Цена' name='price'/>

          <Field as={Col} controlId="formGridMileage" label='пробег' name='km'/>

        </Form.Row>

        <Form.Row>

          <Field type='select' as={Col} controlId="formGridBirdayDate" label='Дата на производство' name='birdayMont' >
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

          <Field as={Col} controlId="formGridYear" label='Година' name='birdayYear'/>

        </Form.Row>

        <Form.Row>

          <Field as={Col} controlId="formGridColor" label='Цвят' name='color'/>

        </Form.Row>

        <Button variant="primary" type="submit">
          Добави
  </Button>
      </Form>
    </FormContainer>
  )
}