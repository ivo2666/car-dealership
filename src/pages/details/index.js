import React from 'react';
import styled from 'styled-components';
import H1 from '../../components/carSectionH1';
import Layout from '../../components/pageLayout'
import Slideshow from '../../components/detailsSlideshow'
import CarInf from '../../components/carInformation'


const Details = styled.main`
margin: 20px 0 20px 2%;
`

export default () => (
    <Layout>
        <Details>
            <H1>Car Name</H1>
<Slideshow>
<img src='//mobistatic2.focus.bg/mobile/photosmob/270/1/big/11600440485723270_Mu.jpg' alt='car' />
                    <img src='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt='car' />
                    <img src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' alt='car' />
                    <img src='https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg' alt='car' />
                    <img src='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt='car' />
                    <img src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' alt='car' />
                    <img src='https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg' alt='car' />
                    <img src='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt='car' />
                    <img src='https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt='car' />

</Slideshow>
<CarInf />
        </Details>
    </Layout>
)