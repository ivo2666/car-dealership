import React from 'react';
import styled from 'styled-components';

const AdditionalInf = styled.table`
tbody {
    display: flex;
    flex-wrap: wrap;
}

th {
width: 140px;
margin: 20px
}

td {
    padding: 0 0 0 20px;
}

table, tr {
    //border-top: 1px solid rgba(0,0,0,.05);
    //border-bottom: 1px solid rgba(0,0,0,.05);
    border-collapse: collapse;
    width: 100%;
    height: 50px;
}
`


export default ({car}) => (
    <AdditionalInf>
        <tbody>
        <tr>
            <th>Дата на производство</th>
            <td>{`${car.birdayMonth} ${car.birdayYear}` }</td>
        </tr>
        <tr>
            <th>Двигател</th>
            <td>{car.engine}</td>
        </tr>
        <tr>
            <th>Категория</th>
            <td>{car.category}</td>
        </tr>
        <tr>    
            <th>Скоростна кутия</th>
            <td>{car.gearbox}</td>
        </tr>
        <tr>
            <th>Мощност</th>
            <td>{car.power}</td>
        </tr>
        <tr>
            <th>Пробег</th>
            <td>{car.km}</td>
        </tr>
        <tr>
            <th>Цвят</th>
            <td>{car.color}</td>
        </tr>
        </tbody>
    </AdditionalInf>
)