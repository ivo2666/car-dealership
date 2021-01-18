import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../ContactsSection';

export default () => {
    return (
        <Section>
            <h2>Контакти:</h2>
            <Link to='#'>София бул. Самоковско шосе 1Ж (До бензиностанция Бенита)</Link>
            <Link to='tel:0000'>тел: +35988888888</Link>
            <Link to='tel:0000'>тел: +35988888888</Link>
            <Link to='tel:0000'>имейл: +35988888888</Link>
        </Section>
    )
}