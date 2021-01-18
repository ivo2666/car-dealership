import React from 'react';
import mercedes from '../../images/forUsMercedes.jpg'
import StaticPageLayout from '../../components/staticPageLayout';

const title = 'Лизинг с индивидуални условия';

const content = `
При необходимост ние ще Ви осигурим лизингова компания, при която нашите клиенти ползват преференции и най-добрите условия на пазара.
Също така, те ще се съобразят с индивидуалните Ви възможности и очаквания.`;

export default () => {
    return (
        <StaticPageLayout
        background={mercedes}
        title={title}
        content={content}
        />
    )
}