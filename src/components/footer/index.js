import React from 'react';
import styled from 'styled-components';
import Link from '../link';
import Section from './section';
import Title from './title';

const Footer = styled.footer`
background: black;
display: flex;
justify-content: space-around;
a {
    margin-top: 9px;
}
`
export default () => (
    <Footer>
        <Section>
            <Title>Контакти:</Title>
            <Link to='tel:0000'>тел: +35988888888</Link>
            <Link to='tel:0000'>тел: +35988888888</Link>
            <Link to='tel:0000'>имейл: +35988888888</Link>
        </Section>
        <Section>
            <Title>Местоположение</Title>
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d366.86039632636965!2d23.401917591691024!3d42.642636646329485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa86e38cc2fd43%3A0x7ff0b522c4407aaf!2z0JHQtdC90LfQuNC90L7RgdGC0LDQvdGG0LjRjyDQkdC10L3QuNGC0LA!5e0!3m2!1sen!2sbg!4v1603130958680!5m2!1sen!2sbg' title='map'>
            </iframe>
        </Section>
        <Section>
            <Title>Услуги:</Title>
            <Link to=''>Регистрация и застраховка</Link>
            <Link to=''>Изкупуване и замяна на автомобили</Link>
            <Link to=''>Консултация при покупка на автомобил</Link>
            <Link to=''>Поръчка и доставка на нови автомобили</Link>
            <Link to=''>Лизинг</Link>
        </Section>
    </Footer>
)