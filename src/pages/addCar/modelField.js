import React, { useState, useEffect } from 'react';
import Field from '../../components/forms'
import urls from '../../config'


export default ({Col, brand}) => {
    const [models, setModels] = useState([])
  const [value, setValue] = useState('Избери')
  const [selectModel, setSelectModel] = useState(true)

  useEffect(() => {
    fetch(`${urls.getModels}/${brand}`)
    .then(x => x.json())
    .then(md => setModels(md.models))
    .catch(err => console.log(err))
},[brand])


  //const addModels = (e) => {
  //  if (brands[e.target.options.selectedIndex - 1]) {
  //    setModels(brands[e.target.options.selectedIndex - 1].models)
  //    setSelectModel(true)
  //  }
  //}

  const handleChange = (e) => {
    if (e.target.value === 'Напиши сам') {
      return setSelectModel(false)
    }else {
      return setValue(e.target.value)
    }
  }

  const handletextChange = (e) => {
      return setValue(e.target.value)
  }

  if (selectModel) {
    return <Field value={value} onChange={handleChange} type='select' label='Модел' name='model'  as={Col} controlId="formGridModel"  >
      <option value="Избери">Избери</option>
      <option value='Напиши сам'>Напиши сам</option>
      {models.map((model, index) => <option key={index} value={model}>{model}</option>)}
    </Field>
  } else {
    return <Field value={value} onChange={handletextChange} label='Модел' as={Col} controlId="formGridModel" name='model'></Field>
  }
    
} 