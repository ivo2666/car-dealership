import React, { useContext } from 'react';
import Style from './nav.style';
import Flags from '../flags'
import Link from '../link';
import { LanguageContext, UserContext } from '../../contexts'
import { eventErrHandler } from "../../helpers";
import content from './content';


export default ({mobile, visible, onClick}) => {

const context = useContext(UserContext)
const loggedIn = context.user && context.user.loggedIn
const language = useContext(LanguageContext).language

const clickHandler = () => {
        context.logOut();
}

const mobileCloseHandl = () => {
        onClick()
}

        return (
                <Style mobile={mobile} visible={visible}>
                        <Link to="/cars" onClick={mobileCloseHandl}>{content[language].cars}</Link>
                        <Link to="/forUs" onClick={mobileCloseHandl}>{content[language].forUs} </Link>
                        <Link to="/services" onClick={mobileCloseHandl}>{content[language].services}</Link>
                        <Link to="/contacts" onClick={mobileCloseHandl}>{content[language].contacts}</Link>
                        {loggedIn ? <Link onClick={() => eventErrHandler(clickHandler)} to="#">Излез</Link> : <></>}
                        <Flags />
                </Style>
        )
}