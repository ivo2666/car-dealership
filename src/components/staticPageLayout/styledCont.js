import styled from 'styled-components'

export default styled.main`
width: 100%;
background-image: ${props => props.background };
background-size: cover;
background-repeat: no-repeat;
background-position: bottom center;

.content {
    min-height: 700px;
    background: rgba(0, 0, 0, 0.5);
    font-family: "Roboto Condensed", sans-serif;
    color: white;
    display: flex;
    flex-direction: column;
    //align-items: center;
}

h2 {
    margin-top: 10px;
    font-weight: 600;
    font-size: 40px;
}

.text {
    width: 65%;
    font-size: 20px;
    line-height: 38px;
    margin-top: 80px;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 80px;
}
`