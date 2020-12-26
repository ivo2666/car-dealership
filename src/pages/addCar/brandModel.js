import React, { useState } from 'react';
import brands from './carBrands'
import Field from '../../components/forms'


export default ({Col}) => {
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
    modelField = <Field onChange={addNewModel} type='select' label='Модел' name='model'  as={Col} controlId="formGridModel"  >
      <option>Избери</option>
      <option>Напиши сам</option>
      {models.map((model, index) => <option key={index} value={model}>{model}</option>)}
    </Field>
  } else {
    modelField = <Field label='Модел' as={Col} controlId="formGridModel" name='model'></Field>
  }
    return (
        <>
<Field onChange={addModels} type='select' label='Марка' name='make' as={Col} controlId="formGridBrand">
            <option>Избери</option>
            {brands.map((car, index) => <option id={index} key={index} value={car.brand}>{car.brand}</option>)}
          </Field>

          {modelField}
          </>
    )
} 