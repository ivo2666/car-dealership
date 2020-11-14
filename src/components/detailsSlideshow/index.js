import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from '../slider';
import PhotoSwipe from '../../components/photoswipe'

let images = [
    'https://res.cloudinary.com/retro-cars/image/upload/v1605353752/cars/tbn1mzllecmiot3vwqjg.jpg',
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg',
    'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    '//mobistatic2.focus.bg/mobile/photosmob/270/1/big/11600440485723270_Mu.jpg',
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg',
    'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
];

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

const items = createItems(images)

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

