import React, { useState, useEffect } from 'react';
import Field from '../../components/forms'
import urls from '../../config'


export default ({Col, brand, onModelChange, model, value}) => {
    const [models, setModels] = useState([])
  const [selectModel, setSelectModel] = useState(true)

  useEffect(() => {
    fetch(`${urls.getModels}/${brand}`)
    .then(x => x.json())
    .then(md => setModels(md.models))
    .catch(err => console.log(err))
},[brand])

  const handleChange = (data) => {
    if (data === 'Напиши сам') {
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