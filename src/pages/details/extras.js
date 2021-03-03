import React from 'react';
import styled from 'styled-components';
import Title from './title';

const Extras = styled.ul`
text-align:center;
font-size: 15px;
color: black;
display: flex;
//flex-direction: column;
flex-wrap: wrap;
line-height: 20px;
li {
    margin: 0 60px 15px 0;
    width: 160px;
}
span {
    color: #2752E1;
}
`

export default ({extras}) => (
    <><Title>Екстри</Title>
    <Extras>
        {
            extras.map((extra, index) => (<li key={index}><span>{extra}</span></li>))
        }
        
    </Extras>
    </>
)