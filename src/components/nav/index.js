import React, { useContext } from 'react';
import Style from './nav.style';
import Flags from '../flags'
import Link from '../link';
import UserContext from '../../context'
import { eventErrHandler } from "../../helpers";


export default ({mobile, visible}) => {

const context = useContext(UserContext)
const loggedIn = context.user && context.user.loggedIn

const clickHandler = () => {
        context.logOut();
}

        return (
                <Style mobile={mobile} visible={visible}>
                        <Link to="/cars">АВТОМОБИЛИ</Link>
                        <Link to="/forUs">ЗА НАС</Link>
                        <Link to="/servises">УСЛУГИ</Link>
                        <Link to="/contacts">КОНТАКТИ</Link>
                        {loggedIn ? <Link onClick={() => eventErrHandler(clickHandler)} to="#">Излез</Link> : <></>}
                        <Flags />
                </Style>
        )
}