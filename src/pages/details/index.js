import React from 'react';
import styled from 'styled-components';
import H1 from '../../components/carSectionH1';
import Layout from '../../components/pageLayout'

const ImageBig = styled.img`
width: 800px;
`

const SlideDiv = styled.div`
width: 800px;
display: flex;
overflow: hidden;
justify-content: center;
`
const ThumbnailsDiv = styled.div`
img {
    width: 100px;
}
`
const ImageCont = styled.div`
    display: flex;    
`

export default () => (
    <Layout>
        <H1>Car Name</H1>
        <ImageCont>
            <SlideDiv>
                <ImageBig src='//mobistatic4.focus.bg/mobile/photosmob/804/1/big/11593359944890804_MF.jpg' alt='car' />
                <ImageBig src='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt='car' />
                <ImageBig src='https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg' alt='car' />
            </SlideDiv>
            <ThumbnailsDiv>
                <img alt='car' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJ4QZbDAu9IVhbAsVCzuIRWid-yHI3fm1Kqg&usqp=CAU' />
                <img alt='car' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJ4QZbDAu9IVhbAsVCzuIRWid-yHI3fm1Kqg&usqp=CAU' />
                <img alt='car' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJ4QZbDAu9IVhbAsVCzuIRWid-yHI3fm1Kqg&usqp=CAU' />
                <img alt='car' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJ4QZbDAu9IVhbAsVCzuIRWid-yHI3fm1Kqg&usqp=CAU' />
            </ThumbnailsDiv>

        </ImageCont>
    </Layout>
)