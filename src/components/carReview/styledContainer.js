import styled from 'styled-components';

export default styled.div`
display: flex;
flex-wrap: wrap;
padding: 20px;

border-bottom: 1px solid skyblue;
    a {
        color: #4f4f4f;
        text-decoration: none;
        &:hover {
        color: #2752E1;
    }
    }
    
    
    button {
        margin-top: 10px;
    }

h1 {
    margin-right: 20px;
    line-height: 36px;
    font-size: 36px;
    font-weight: 100;
}

img {
    width: 100%;
    border: 1px solid white;
    cursor: pointer;
    &:hover {
        border: 1px solid skyblue;
    }
}
`