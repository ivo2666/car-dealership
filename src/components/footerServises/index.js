import React from 'react';
import Section from '../ContactsSection';
import {Link} from 'react-router-dom';

export default () => {
    return (
        <Section>
            <h2>Услуги:</h2>
            <Link to='/servises/insurance'>Регистрация и застраховка</Link>
            <Link to='/servises/barter'>Изкупуване и замяна на автомобили</Link>
            <Link to='/servises/consultation'>Консултация при покупка на автомобил</Link>
            <Link to='/servises/delivery'>Поръчка и доставка на нови автомобили</Link>
            <Link to='/servises/lizing'>Лизинг</Link>
        </Section>
    )
}