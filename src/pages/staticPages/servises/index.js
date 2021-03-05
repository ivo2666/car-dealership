import React from 'react';
import PageLayot from '../../../components/pageLayout'
import Container from './styledCont'
import { Row } from 'react-bootstrap'
import {
    insurance,
    lizing,
    barter,
    consultation,
    delivery

} from '../../../images/services png'; 
import Servise from './servise';

export default () => {
    return (
        <PageLayot>
            <Container>
                <Row>
            <Servise href="/servises/barter" title='Изкупуване и замяна на автомобили' src={barter} />
            <Servise href={`/servises/lizing`} title='Лизинг' src={lizing} />
            <Servise href={`/servises/insurance`} title='Регистрация и застраховка' src={insurance} />
            </Row>
            <Row>
            <Servise href={`/servises/consultation`} title='Консултация при покупка на автомобил' src={consultation} />
            <Servise href={`/servises/delivery`} title='Поръчка на нови и използвани автомобили' src={delivery} />
            </Row>
            </Container>
        </PageLayot>
    )
}