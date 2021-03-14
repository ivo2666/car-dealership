import React from 'react';
import Link from '../../../components/link'
import { Image } from 'react-bootstrap' 
import urls from '../../../config'
import styled from 'styled-components'

const StyledCont = styled.div`
background:  #0C0C0E;
display: flex;
justify-content: center;

`
export default () => {
    return (
        <StyledCont>
        <Link to="/">
            <Image src={`${urls.server}/404 Error Page Not Found.jpg`}/>
        </Link>
        </StyledCont>
    )
}