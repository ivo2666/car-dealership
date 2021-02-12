import styled from 'styled-components';

export default styled.nav`
flex-direction: ${props => props.mobile ? 'column' : 'row'};
width: 96%;
//min-width: 300px;
list-style-type: none;
display: ${props => props.visible ? 'flex' : 'none'};
justify-content: space-around;
align-items: left;
line-height: 50px;
margin-left: 17px;
a {
    border-bottom: ${props => props.mobile ? '1px solid white' : 'none'};
        //font-size: 1.5vw;
}
`