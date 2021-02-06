import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/pageLayout';
import ContactInf from '../../components/contactInf';
import ContactMap from '../../components/contactMap';

const Contats = styled.main`
min-height: 550px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
background-color: #4f4f4f;
padding: 2% 5% 0 5%;
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