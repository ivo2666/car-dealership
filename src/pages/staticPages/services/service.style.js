import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export default styled(Card)`
    width: 12rem;
background-color: rgba(0, 0, 0, 0.5) !important; 
text-align: center;
margin: 35px;
&:hover{
    background-color: rgba(255, 255, 255, 0.3) !important;
        color:black;
        border-bottom: 1px solid black;
    }


.card-title {
    font-size: 24px;
font-family: 'Roboto', sans-serif;
font-weight: 600;
color: inherit;

    
}

`