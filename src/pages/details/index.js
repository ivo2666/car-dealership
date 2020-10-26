import React from 'react';
import styled from 'styled-components';
import H1 from '../../components/carSectionH1';
import Layout from '../../components/pageLayout'
import Slider from '../../components/slider';

const ImageBig = styled.img`
width: 100%;
height: 100%;
`

const Details = styled.main`
margin: 20px 0 20px 40px;`

const Description = styled.div`

`

export default () => (
    <Layout>
        <Details>
            <H1>Car Name</H1>
                <Slider>
                    <ImageBig src='https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg' alt='car' />
                    <ImageBig src='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt='car' />
                    <ImageBig src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' alt='car' />
                    <ImageBig src='https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg' alt='car' />
                    <ImageBig src='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt='car' />
                    <ImageBig src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' alt='car' />
                    <ImageBig src='https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg' alt='car' />
                    <ImageBig src='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt='car' />
                    <ImageBig src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' alt='car' />
                </Slider>
                <Description>
                    <h2>Описание</h2>
                </Description>
        </Details>
    </Layout>
)