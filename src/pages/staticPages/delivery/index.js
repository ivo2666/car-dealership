import React from 'react';
import mercedes from '../../../images/forUsMercedes.jpg'
import StaticPageLayout from '../../../components/staticPageLayout';

const title = 'Поръчка на автомобили';

const content = `
LS Auto има дългогодишен опит във вноса на автомобили,
познаваме всички изисквания, необходими за него, както и за регистрация на автомобили от чужбина.
 Можем да Ви съдействаме, за да се справите с цялата нужна документация.
Бързата и сигурна доставка на автомобил от чужбина е важна за клиента и 
екипът ни ще се погрижи тя да се случи в най-кратки срокове.
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