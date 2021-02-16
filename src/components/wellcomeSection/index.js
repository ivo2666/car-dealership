import React from 'react';
import bmw from '../../images/Front Page wall.jpg';
import  Link  from '../link';
import { Image } from 'react-bootstrap';
import Container from './styledCont';


export default () => (
<Container>
    <Link to='/cars'>
    <Image src={bmw} rounded alt='car'/>
    </Link>
</Container>
)