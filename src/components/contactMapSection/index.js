import React from 'react';
import Section from '../ContactsSectionLayout';

export default () => {
    return (
        <Section>
            <h2>Местоположение</h2>
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d366.86039632636965!2d23.401917591691024!3d42.642636646329485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa86e38cc2fd43%3A0x7ff0b522c4407aaf!2z0JHQtdC90LfQuNC90L7RgdGC0LDQvdGG0LjRjyDQkdC10L3QuNGC0LA!5e0!3m2!1sen!2sbg!4v1603130958680!5m2!1sen!2sbg' title='map'>
            </iframe>
        </Section>
    )
}