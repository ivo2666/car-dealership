import React from 'react';
import  Link  from '../../../components/link';
import Card from './service.style';


export default (props) => {
    return (
        <Link to={props.href} hovercolor="white">
        <Card>
            
            <Card.Img variant='top' src={props.src}/>
        <Card.Title>{props.title}</Card.Title>
        
        </Card>
        </Link>
    )
}