import React from 'react';
import styled from 'styled-components';

const StyledGallery = styled.div`
height: 420px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
margin-left: 3px;
img {
    margin: 0 4% 4% 0;
    width: 95px;
    cursor: pointer;
}
`
const Gallery = ( props ) => {
    const galleryRender = props.children.map((child, index) =>
        <img index={index} key={index} {...child.props}
            onClick={() => props.setSlideIndex(index + 1)} alt="car" />)

            return (
                <StyledGallery>
                    {galleryRender}
                </StyledGallery>
            )
}



export default Gallery 

