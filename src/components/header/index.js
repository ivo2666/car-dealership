import React from 'react';
import StyledContainer from './styleContainer';
import Logo from '../logo';
import Nav from '../nav';
import menuIcon from '../../images/hbMenu.png'
import closeMenu from '../../images/xMenu.png'
import { Image, Row, Col } from 'react-bootstrap';



export default () => {
    const [width, setWidth] = React.useState(window.innerWidth)
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
        {console.log(mobile)}
        <Row>
            <Col  md={4} xs={6} ><Logo /></Col>
            <Col  className="iconCont">
            {mobile ? 
            <Image className='icon' onClick={clickHandler} src={visible ? closeMenu : menuIcon}/>
             : <Nav visible={'yes'} mobile={mobile}/>}
             </Col>
             </Row>
            <Nav mobile={mobile} visible={visible}/> 
        </StyledContainer>
    )
}