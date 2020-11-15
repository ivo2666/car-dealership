import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledSlider = styled.div`
height: 430px;
width: 700px;
overflow: hidden;
display: flex;
justify-content: center;
position: relative;

img {
    height: 95%;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 38px;
  text-decoration: none;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  background-color: rgba(0,0,0,0.8);
  user-select: none;
  border-radius: 6px;
}

/* Position the "next button" to the right */
.next {
  right: 2%;
  //border-radius: 3px 0 0 3px;
}

.prev {
    left: 2%;
}


/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  
}
`

const Slider = (props) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [ startIndex, setStartIndex] = useState(-1);
    const slides = props.images;


    useEffect(() => {
        setStartIndex(props.startIndex)
        if (startIndex > -1) {
            setSlideIndex(startIndex)
        }
        return () => {
            setStartIndex(-1)
        }
    }, [startIndex, slideIndex, props.startIndex])

    useEffect(
        () => {
            if (slideIndex > slides.length - 1) { setSlideIndex(0) };
            if (slideIndex < 0) { setSlideIndex(slides.length - 1) };
        }, [slideIndex, slides]
    )
    
    return (
        <>
    <StyledSlider>
        <img alt='car' src={slides[slideIndex]} />
        <Link className='prev' to='#' onClick={() => setSlideIndex(slideIndex - 1)}>&#10094;</Link>
        <Link className='next' to='#' onClick={() => setSlideIndex(slideIndex + 1)}>&#10095;</Link>
    </StyledSlider>    

    </>
    )
}

export default Slider