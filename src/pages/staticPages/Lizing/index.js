import React from 'react';
import mercedes from '../../../images/forUsMercedes.jpg'
import StaticPageLayout from '../../../components/staticPageLayout';
import { title, body } from './content'

export default () => {
    return (
        <StaticPageLayout
        background={mercedes}
        title={title}
        content={body}
        />
    )
}