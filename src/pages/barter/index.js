import React from 'react';
import mercedes from '../../images/forUsMercedes.jpg'
import StaticPageLayout from '../../components/staticPageLayout';

const title = 'Изкупуване и замяна на коли с доплащане';

const content =`
Предлагаме Ви замяна на стария Ви автомобил с по-нов или от по-висок клас,
както и да го продадете без да копувате нов.
 Колите в нашите автокъщи са в отлично техническо състояние.
 Ако замяната е с доплащане от страна на клиента,
  то може да бъде еднократно или по лизингова схема.
Нашите партньри ще ви предложат най-изгодните възможности за изплащане.
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