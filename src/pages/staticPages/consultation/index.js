import React from 'react';
import mercedes from '../../../images/forUsMercedes.jpg'
import StaticPageLayout from '../../../components/staticPageLayout';

const title = 'Консултации';

const content = `
Консултирайте се с нас и при избор на нова кола.
Ние ще ви информираме кои са всички възможни за Вас варианти, според това какви са бюджетът и изискванията Ви.

Заедно ще обсъдим какви са предимствата и недостатъците на моделите, които Ви интересуват. 
Дългогодишният ни опит ще Ви бъде от полза и ще откриете най-доброто за Вас, независимо дали търсите определен модел или просто семейна кола.`;

export default () => {
    return (
        <StaticPageLayout
        background={mercedes}
        title={title}
        content={content}
        />
    )
}