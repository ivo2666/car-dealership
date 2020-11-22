import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/pageLayout';

const Page = styled.main`
width: 100%;
background-image: ${props => props.background };
background-size: 100% 100%;
background-repeat: no-repeat;

.content {
    height: 700px;
    background: rgba(0, 0, 0, 0.8);
    font-family: "Roboto Condensed", sans-serif;
    color: white;
    display: flex;
    flex-direction: column;
    //align-items: center;
}

h2 {
    margin-top: 10px;
    font-weight: 600;
    font-size: 40px;
}

.text {
    width: 65%;
    font-size: 20px;
    line-height: 38px;
    margin-top: 80px;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 80px;
}
`

export default (props) => {
    return (
        <Layout>
            <Page background={`url(${props.background})`}>
            <div className='content'>
            <div className='text'>
    <h2>{props.title}</h2>
    <p>{props.content}</p>
            </div>
        </div>
            </Page>
        </Layout>
    )
}