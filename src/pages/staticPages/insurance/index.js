import React from 'react';
import mercedes from '../../../images/forUsMercedes.jpg'
import StaticPageLayout from '../../../components/staticPageLayout';

const title = 'Регистрация и застраховка';

const content = `Нашият екип е добре запознат с всички разпоредби за регистрация на превозни средства в системата на КАТ. Следим нововъведените изменения и сме готови да съдействаме с цялата необходима документация в процеса на регистрация на нов автомобил.

LS Auto може да Ви съдейства при сключването на застраховка Автокаско и Гражданска отговорност.

Заедно ще намерим най-изгодната за Вас застраховка, като внимателно подберем офертите от различните компании.`;

export default () => {
    return (
        <StaticPageLayout
        background={mercedes}
        title={title}
        content={content}
        />
    )
}