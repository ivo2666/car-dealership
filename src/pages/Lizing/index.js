import React from 'react';
import mercedes from '../../images/forUsMercedes.jpg'
import StaticPageLayout from '../../components/staticPageLayout';

const title = 'Лизинг при наши парньори с индивидуални условия';

const content = `
При неоходимост Ние ще ви осигорим лизингова компания при която нашите клиенти ползват преференции и най-добрите условия на пазара
Също така те ще се съобразят с индивидуалните Ви възможности и очаквания.`;

export default () => {
    return (
        <StaticPageLayout
        background={mercedes}
        title={title}
        content={content}
        />
    )
}