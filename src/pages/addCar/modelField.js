import React, { useState, useEffect } from 'react';
import Field from '../../components/field'
import { getModels } from '../../helpers/imageBrandModelRequests'

export default ({Col, brand, onModelChange, model, value}) => {
    const [models, setModels] = useState([])
  const [selectModel, setSelectModel] = useState(true)

  useEffect(() => {
    getModels(brand, setModels)
    setSelectModel(true)
},[brand])

  const handleChange = (data) => {
    if (data.model === 'Напиши сам') {
      return setSelectModel(false)
    }else {
      return onModelChange(data)
    }
  }

  const handletextChange = (data) => {
      return onModelChange(data)
  }

  if (selectModel) {
    return <Field value={model} onChange={handleChange} type='select' label='Модел' name='model'  as={Col} controlId="formGridModel"  >
      <option value="Избери">Избери</option>
      <option value='Напиши сам'>Напиши сам</option>
      {models.map((model, index) => <option key={index} value={model}>{model}</option>)}
    </Field>
  } else {
    return <Field value={model} onChange={handletextChange} label='Модел' as={Col} controlId="formGridModel" name='model'></Field>
  }
    
} 