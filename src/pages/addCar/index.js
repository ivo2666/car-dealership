import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import brands from './carBrands'
import Field from '../../components/forms'

const FormContainer = styled.div`
width: 80%;
margin: 100px auto;
`

export default () => {
  const [models, setModels] = useState([])
const [selectModel, setSelectModel] = useState(true)

let modelField;



  


  const addModels = (e) => {
    if (brands[e.target.options.selectedIndex - 1]) {
        setModels(brands[e.target.options.selectedIndex - 1].models)
        setSelectModel(true)
    }
  }

  const addNewModel = (e) => {
    if (e.target.value === 'Напиши сам') {
      setSelectModel(false)
    }
  }

  if (selectModel) {
    modelField = <Field onChange={addNewModel} type='select' label='Модел'  as={Col} controlId="formGridModel" >
    <option>Избери</option>
    <option>Напиши сам</option>
    {models.map((model, index) => <option key={index} value={model}>{model}</option>)}
  </Field>
  }else {
    modelField = <Field label='Модел' as={Col} controlId="formGridModel" ></Field>
  }

  return (
    <FormContainer>
      <Form>

        <Form.Row>

          <Field onChange={addModels} type='select' label='Марка' as={Col} controlId="formGridBrand">
            <option>Избери</option>
            {brands.map((car, index) => <option id={index} key={index} value={car.brand}>{car.brand}</option>)}
          </Field>

          {modelField}

        </Form.Row>

        <Form.Row>

          <Field as={Col} controlId="formGridModification" label='Модификация' />

          <Field type='select' label='Двигател' as={Col} controlId="formGridEngine">
            <option>Избери</option>
            <option>Бензин</option>
            <option>Дизел</option>
            <option>Електрически</option>
            <option>Хибриден</option>
          </Field>

        </Form.Row>

        <Form.Row>

          <Field as={Col} controlId="formGridPower" label='Мощност [к.с.]'  />

          <Field type='select' label='Евростандарт' as={Col} controlId="formGridEurostandart">
            <option>Евро 1</option>
            <option>Евро 2</option>
            <option>Евро 3</option>
            <option>Евро 4</option>
            <option>Евро 5</option>
            <option>Евро 6</option>
          </Field>

        </Form.Row>

        <Form.Row>

          <Field type='select' as={Col} controlId="formGridTransmition" label='Скоросна кутия'>
            <option>Ръчна</option>
            <option>Автоматична</option>
            <option>Полуавтоматична</option>
          </Field>

          <Field type='select' as={Col} controlId="formGridCategory" label='Категория'>
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
        
        <Field as={Col} controlId="formGridPrice" label='Цена' />

        <Field as={Col} controlId="formGridMileage" label='пробег' />

        </Form.Row>

        <Form.Row>

        <Field type='select' as={Col} controlId="formGridBirdayDate" label='Дата на производство' >
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

          <Field as={Col} controlId="formGridYear" label='Година' />
          
        </Form.Row>

        <Form.Row>

        <Field as={Col} controlId="formGridColor" label='Цвят' />          
        
        </Form.Row>

        <Button variant="primary" type="submit">
          Добави
  </Button>
      </Form>
    </FormContainer>
  )
}