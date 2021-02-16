import React, { useState } from 'react';
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
//height: 420px;
display: flex;
//flex-direction: column;
flex-wrap: wrap;
margin-left: 3px;
img {
    margin: 0 4px 4px 0;
    width: 95px;
    cursor: pointer;
}
`

const DetailsSlideshow = styled.div`
width: 100%;
//display: flex;
//flex-wrap:wrap;
margin-bottom: 20px;
`
export default ({images}) => {
    const [ slideIndex, setSlideIndex] = useState(0);
    const items = createItems(images)

   
    

    

    const galleryRender = images.map((image, index) =>
        <img src={image} index={index} key={index} 
            onClick={() => setSlideIndex(index)} alt="car" />)

    return (
        <DetailsSlideshow>
            <PhotoSwipe isOpen={false} items={items} />
                <Slider slideIndex={slideIndex ? slideIndex : 0} images={images}/>
                <StyledGallery>
                    {galleryRender}
                </StyledGallery>
        </DetailsSlideshow>    
    )
}

