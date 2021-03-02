import styled from 'styled-components';

export default styled.main`

background-image: url(${props => props.background});
background-size: cover;
background-repeat: no-repeat;
background-position: bottom center;
//padding: 2% 5% 0 5%;

.wrapper {
    min-height: 550px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
    background: rgba(0, 0, 0, 0.8);
}
`