import React from 'react';
import ContactInfSection from '../../../components/contactInfSection';
import ContactMapSection from '../../../components/contactMapSection';
import Container from './styledCont'

export default () => {
    return(
            <Container background={`Bugatti-Chiron.jpg`}> 
            <div className="wrapper">
                <ContactInfSection />
                <ContactMapSection />
                </div>
        </Container>
    )
}