import React from 'react';
import img from '../../images/Front Page wall.jpg';
import  Link  from '../link';
import { Image } from 'react-bootstrap';
import Container from './styledCont';


export default () => (
<Container>
    <Link to='/cars'>
    <Image src={img} rounded alt='car'/>
    </Link>
</Container>
)