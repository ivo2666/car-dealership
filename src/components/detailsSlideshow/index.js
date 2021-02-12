import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from '../slider';
import PhotoSwipe from '../../components/photoswipe'


const createItems = (images) => {
    let items = [];
    images.map( image => items.push({
        'src': `${image}`,
        'w': 640,
        'h': 800
        //title: 'Image 1'
    }))
        return items
}


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
export default ({images}) => {
    const [ startIndex, setStartIndex] = useState(-1);
    const items = createItems(images)

    useEffect(
        () => {
            return setStartIndex(-1);
        }, [startIndex]
    )

    

    

    const galleryRender = images.map((image, index) =>
        <img src={image} index={index} key={index} 
            onClick={() => setStartIndex(index)} alt="car" />)

    return (
        <DetailsSlideshow>
            <PhotoSwipe isOpen={false} items={items} />
                <Slider startIndex={startIndex} images={images}/>
                <StyledGallery>
                    {galleryRender}
                </StyledGallery>
        </DetailsSlideshow>    
    )
}

