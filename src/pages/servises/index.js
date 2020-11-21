import React from 'react';
import { useRouteMatch } from 'react-router-dom';
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
position: relative;
background-color: black;
.servCont {
    position: absolute;
    //width: 75%;
    top: 10%;
    left: 12%;
    right: 12%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.background {
    width:100%;
}
`



export default () => {
    let { url } = useRouteMatch();
    return (
        <PageLayot>
            <Servises>
            <div className='servCont'>
            <Servise href={`${url}/barter`} title='Изкупуване и замяна на автомобили' src={barter} />
            <Servise href={`${url}/lizing`} title='Лизинг' src={lizing} />
            <Servise href={`${url}/insurance`} title='Регистрация и застраховка' src={insurance} />
            <Servise href={`${url}/consultation`} title='Консултация при покупка на автомобил' src={consultation} />
            <Servise href={`${url}/delivery`} title='Поръчка на нови и използвани автомобили' src={delivery} />
        </div>
                <img className='background' alt='car' src={car} />
            </Servises>
        </PageLayot>
    )
}