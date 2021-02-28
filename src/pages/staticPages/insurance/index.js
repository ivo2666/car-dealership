import React from 'react';
import StaticPageLayout from '../../../components/staticPageLayout';
import { title, body } from './content'
import urls from '../../../config'

export default () => {
    return (
        <StaticPageLayout
        background={`${urls.server}/Bugatti-Chiron.jpg`}
        title={title}
        content={body}
        />
    )
}