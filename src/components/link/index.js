import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    text-decoration: none;
    font-family: ${props => props.fontFamily ? props.fontFamily : "'Roboto', sans-serif"};
    font-size: ${props => props.fontSize ? props.fontSize : '17px'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : '68px'};
    color: ${props => props.color ? props.color : 'white'};
    &:hover {
    color: ${props => props.hovercolor ? props.hovercolor : 'skyblue'}; 
    text-decoration: none;
  }
`



export default StyledLink