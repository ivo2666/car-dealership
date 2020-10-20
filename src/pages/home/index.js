import React from 'react';
import PageLayot from '../../components/pageLayout'
import WellcomeSection from '../../components/wellcomeSection';
import Presentcar from '../../components/presentCar'

const Home = () => {
    return (
        <PageLayot>
            <WellcomeSection />     
            <Presentcar />   
        </PageLayot>
    )
}

export default Home