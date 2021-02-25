import React, { useState, useEffect } from 'react';
import Field from '../../components/field';
import { getBrands } from '../../helpers/imageBrandModelRequests';

export default ({Col, value, onBrandChange}) => {
const [brands, setBrands] = useState([]);

useEffect(() => {
    getBrands(setBrands)
},[])

const handleChange = (value) => {
    onBrandChange(value)
} 

    return (
        <Field onChange={handleChange} value={value} type='select' label='Марка' name='brand' as={Col} controlId="formGridBrand">
            <option value='Избери'>Избери</option>
            {brands.map((brand, index) => <option id={index} key={index} value={brand}>{brand}</option>)}
          </Field>
    )
}