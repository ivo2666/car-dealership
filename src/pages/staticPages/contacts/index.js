import React from 'react';
import ContactInfSection from '../../../components/contactInfSection';
import ContactMapSection from '../../../components/contactMapSection';
import Container from './styledCont'
import urls from '../../../config'

export default () => {
    if (window.innerWidth < 550) {
        return <></>
    }
    return(
            <Container background={`${urls.server}/Bugatti-Chiron.jpg`}> 
            <div className="wrapper">
                <ContactInfSection />
                <ContactMapSection />
                </div>
        </Container>
    )
}