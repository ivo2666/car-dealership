import React, { useState, useEffect } from 'react';
import Field from '../../components/forms';
import urls from '../../config';

export default ({Col, value, onBrandChange}) => {
const [brands, setBrands] = useState([]);
//const [value, setValue] = useState('Избери');

useEffect(() => {
    fetch(urls.getBrands)
    .then(x => x.json())
    .then(br => setBrands(br.brands))
    .catch(err => console.log(err))
},[])

const handleChange = (e) => {
    //setValue(e.target.value);
    onBrandChange(e.target.value)
} 

    return (
        <Field onChange={handleChange} value={value} type='select' label='Марка' name='make' as={Col} controlId="formGridBrand">
            <option value='Избери'>Избери</option>
            {brands.map((brand, index) => <option id={index} key={index} value={brand}>{brand}</option>)}
          </Field>
    )
}