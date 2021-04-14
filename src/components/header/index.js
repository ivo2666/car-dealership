import React from 'react';
import StyledContainer from './styleContainer';
import Logo from '../logo';
import Nav from '../nav';
import { Image, Row, Col } from 'react-bootstrap';
import { eventErrHandler } from "../../helpers";
import urls from '../../config'



export default () => {
    const [width, setWidth] = React.useState(typeof window !== "undefined" ? window.innerWidth : 500)
    const [visible, setVisible] = React.useState('')

    React.useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth))
    },[])

    const clickHandler = () => {
        const check = visible ? false : true;
        setVisible(check)
    }

    const mobile = width < 550;
    return (
        <StyledContainer>
        <Row>
            <Col  md={4} xs={6} ><Logo /></Col>
            <Col  className="iconCont">
            {mobile ? 
            <Image className='icon' onClick={() => eventErrHandler(clickHandler)} src={visible ? `${urls.server}/xMenu.png` : `${urls.server}/hbMenu.png`}/>
             : <Nav visible={'yes'} mobile={mobile} onClick={() => {}}/>}
             </Col>
             </Row>
            <Nav mobile={mobile} visible={visible} onClick={clickHandler}/> 
        </StyledContainer>
    )
}