import React from 'react';
import styled from 'styled-components';
import PageLayot from '../../components/pageLayout'
import car from '../../images/ferrary.jpg'
import {
    insurance,
    lizing,
    barter,
    consultation,
    delivery

} from '../../images/services png'; 
import Servise from './servise';

const Servises = styled.main`
//min-height: 550px;
background: #212121;
background-image: url(${car});
background-size: cover;
background-repeat: no-repeat;
background-position: bottom center;

display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

`



export default () => {
    return (
        <PageLayot>
            <Servises>
            <Servise href="/servises/barter" title='Изкупуване и замяна на автомобили' src={barter} />
            <Servise href={`/servises/lizing`} title='Лизинг' src={lizing} />
            <Servise href={`/servises/insurance`} title='Регистрация и застраховка' src={insurance} />
            <Servise href={`/servises/consultation`} title='Консултация при покупка на автомобил' src={consultation} />
            <Servise href={`/servises/delivery`} title='Поръчка на нови и използвани автомобили' src={delivery} />
            </Servises>
        </PageLayot>
    )
}