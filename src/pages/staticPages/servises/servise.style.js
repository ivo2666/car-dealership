import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export default styled(Card)`
    width: 15rem;
background-color: rgba(0, 0, 0, 0.3);
text-align: center;
margin: 25px;
&:hover{
        color:inherit;
        border-bottom: 1px solid skyblue;
    }


.card-title {
    font-size: 24px;
font-family: 'Roboto', sans-serif;
font-weight: 600;
color: inherit;

    
}

`