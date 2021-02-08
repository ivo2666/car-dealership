import React from 'react';
import Style from './nav.style';
import Flags from '../flags'
import Link from '../link';



export default ({mobile, visible}) => {

        return (
                <Style mobile={mobile} visible={visible}>
                        <Link to="/cars">АВТОМОБИЛИ</Link>
                        <Link to="/forUs">ЗА НАС</Link>
                        <Link to="/servises">УСЛУГИ</Link>
                        <Link to="/contacts">КОНТАКТИ</Link>
                        <Flags />
                </Style>
        )
}