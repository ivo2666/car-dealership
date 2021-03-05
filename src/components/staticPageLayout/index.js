import React from 'react';
import Layout from '../../components/pageLayout';
import Container from './styledCont'



export default (props) => {
    return (
        <Layout>
            <Container background={`url(${props.background})`}>
            <div className='content'>
            <div className='text'>
    <h2>{props.title}</h2>
    <p>{props.content}</p>
            </div>
        </div>
            </Container>
        </Layout>
    )
}