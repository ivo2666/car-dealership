import React, { useState } from 'react';
import Container from './styledCont'
import Slider from '../slider';

export default ({images}) => {
    const [ slideIndex, setSlideIndex] = useState(0);

    const galleryRender = images.map((image, index) =>
        <img src={image} index={index} key={index} 
            onClick={() => setSlideIndex(index)} alt="car" />)

    return (
        <Container>
                <Slider slideIndex={slideIndex ? slideIndex : 0} images={images}/>
                <div className='styled-galery'>
                    {galleryRender}
                </div>
        </Container>    
    )
}


