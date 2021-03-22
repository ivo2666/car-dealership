import React from 'react';
//import img from '../../../public';
import  Link  from '../link';
import { Image } from 'react-bootstrap';
import Container from './styledCont';


export default () => (
<Container>
    <Link to='/cars'>
    <Image src='Front Page wall.jpg' rounded alt='car'/>
    </Link>
</Container>
)