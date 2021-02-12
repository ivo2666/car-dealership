import React from 'react';
import  Link  from '../../components/link';
import Card from './servise.style';


export default (props) => {
    return (
        <Link to={props.href}>
        <Card>
            
            <Card.Img variant='top' src={props.src}/>
        <Card.Title>{props.title}</Card.Title>
        
        </Card>
        </Link>
    )
}