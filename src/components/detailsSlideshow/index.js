import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from '../slider';

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

const DetailsSlideshow = styled.div`
display: flex;
`
export default (props) => {
    const [ startIndex, setStartIndex] = useState(-1);

    useEffect(
        () => {
            return setStartIndex(-1);
        }, [startIndex]
    )

    const galleryRender = props.children.map((child, index) =>
        <img index={index} key={index} {...child.props}
            onClick={() => setStartIndex(index)} alt="car" />)

    return (
        <DetailsSlideshow>
                <Slider startIndex={startIndex} images={props.children}/>
                <StyledGallery>
                    {galleryRender}
                </StyledGallery>
        </DetailsSlideshow>    
    )
}

