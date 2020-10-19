import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    font-weight: 68px;
    color: white;
    &:hover {
    color: #2752E1; 
  }
`

export default StyledLink