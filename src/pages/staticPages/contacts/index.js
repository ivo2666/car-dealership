import React from 'react';
import ContactInfSection from '../../../components/contactInfSection';
import ContactMapSection from '../../../components/contactMapSection';
import Container from './styledCont'
import urls from '../../../config'

export default () => {
    return(
            <Container background={`${urls.server}/Bugatti-Chiron.jpg`}> 
            <div className="wrapper">
                <ContactInfSection />
                <ContactMapSection />
                </div>
        </Container>
    )
}