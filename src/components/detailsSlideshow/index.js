import React from 'react';
import styled from 'styled-components';
import ThumbnailsGallery from '../thumbnailsGallery';
import Slider from '../slider';



const DetailsSlideshow = styled.div`
display: flex;
`
export default (props) => (
    <DetailsSlideshow>
            <Slider>
                {props.children}
            </Slider>
        <ThumbnailsGallery>
        {props.children}
        </ThumbnailsGallery>
    </DetailsSlideshow>    
)
