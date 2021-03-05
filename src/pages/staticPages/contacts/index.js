import React from 'react';
import Layout from '../../../components/pageLayout';
import ContactInfSection from '../../../components/contactInfSection';
import ContactMapSection from '../../../components/contactMapSection';
import Container from './styledCont'
import urls from '../../../config'

export default () => {
    return(
        <Layout>
            <Container background={`${urls.server}/Bugatti-Chiron.jpg`}> 
            <div className="wrapper">
                <ContactInfSection />
                <ContactMapSection />
                </div>
        </Container>
        </Layout>
    )
}