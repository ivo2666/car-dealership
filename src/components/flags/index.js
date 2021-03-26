import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../contexts';
import urls from '../../config'

const Flag = styled.img`
width: 30px;
margin: 5px;
`

const Flags = styled.div`
width: 100px;
a {
    border-bottom: none ;
}
`

export default () => {
    const changeLang = React.useContext(LanguageContext).changeLang
    return (
        <Flags>
            <Link to="#">
            <Flag onClick={() => changeLang('english')} src={`${urls.server}/flags/united-kingdom.png`} alt='united-kingdom-flag'/>
        </Link>
        <Link to="#">
            <Flag onClick={() => changeLang('bulgarian')} src={`${urls.server}/flags/bulgaria.png`} alt='bulgaria-flag'/>
        </Link>
        </Flags>
    )
}