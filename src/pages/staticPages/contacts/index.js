import React from 'react';
import Layout from '../../../components/pageLayout';
import ContactInfSection from '../../../components/contactInfSection';
import ContactMapSection from '../../../components/contactMapSection';
import Container from './styledCont'

export default () => {
    return(
        <Layout>
            <Container>
                <ContactInfSection />
                <ContactMapSection />
        </Container>
        </Layout>
    )
}