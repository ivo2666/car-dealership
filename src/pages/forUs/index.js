import React from 'react';
import mercedes from '../../images/forUsMercedes.jpg'
import StaticPageLayout from '../../components/staticPageLayout';

const title = 'За нас';

const content = `
В автокъщата на LS Auto ще откриете използвани автомобили за различни цели.
Нашето намерение е да Ви осигурим високо качествено обслужване.
Също така се грижим и за вашата сигурност, като не правим никакъв компромис с техническата изправност на предлаганите от нас автомобили.
На този сайт ще откриете реални снимки и точна информация за състоянието на всяка от наличните коли. 
Разполагаме с опит от над 20 години в сферата и бихме могли да Ви помогнем при закупуването на чисто ново превозно средство.
Партньорите ни могат да Ви осигурят лизинг с индивидуална оферта според възможностите на всеки от Вас.
Ако искате да продадете старата си кола, заповядайте и
след като обсъдим пазарната ситуация ще Ви направим оферта.
 Ние ще се погрижим да откриете това, което търсите!
`;

export default () => {
    return (
        <StaticPageLayout
        background={mercedes}
        title={title}
        content={content}
        />
    )
}