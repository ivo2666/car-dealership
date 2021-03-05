import styled from 'styled-components';

const Section = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    font-family: 'Roboto', sans-serif;
    margin: 15px;

    a {
        text-decoration: none;
        color: white;
        &:hover {
            color: skyblue;
        }
    }
`
export default Section;