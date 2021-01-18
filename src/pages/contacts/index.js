import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/pageLayout';
import ContactInf from '../../components/contactInf';
import ContactMap from '../../components/contactMap';

const Contats = styled.main`
height: 600px;
display: flex;
justify-content: space-around;
background-color: #4f4f4f;
color: white;
padding: 2% 5% 0 5%;
font-family: Roboto, sans-serif;
font-size: 20px;

a{
    padding: 0 0 20px 0;
}

div {
    width: 40%;
}

iframe {
    width: 100%;
    height: 50%;
}
`


export default () => {
    return(
        <Layout>
            <Contats>
                <ContactInf />
                <ContactMap />
        </Contats>
        </Layout>
    )
}