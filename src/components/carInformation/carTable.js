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


export default () => (
    <AdditionalInf>
        <tbody>
        <tr>
            <th>Дата на производство</th>
            <td>октомври 2008 г.</td>
        </tr>
        <tr>
            <th>Двигател</th>
            <td>Дизелов</td>
        </tr>
        <tr>
            <th>Категория</th>
            <td>Седан</td>
        </tr>
        <tr>    
            <th>Скоростна кутия</th>
            <td>Автоматична</td>
        </tr>
        <tr>
            <th>Мощност</th>
            <td>190 к.с.</td>
        </tr>
        <tr>
            <th>Пробег</th>
            <td>200 000</td>
        </tr>
        <tr>
            <th>Цвят</th>
            <td>Син</td>
        </tr>
        </tbody>
    </AdditionalInf>
)