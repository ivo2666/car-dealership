import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSlider = styled.div`
@media only screen and (max-width: 600px){
    height: 190px;
    width: 100%;
    .prev, .next {
        display: none;
    }
    
}
@media only screen and (min-width: 600px){
    height: 430px;
width: 700px;    

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
}
overflow: hidden;
display: flex;
justify-content: center;
position: relative;

img {
    height: 95%;
}


`

const Slider = (props) => {
    const [slideIndex, setSlideIndex] = useState(0);
    let startTouch = 0;
    let endTouch = 0;
    const slides = props.images;


    const prevHandler = () => {
        if (slideIndex - 1 < 0) {
            setSlideIndex(props.images.length - 1)
        } else {
            setSlideIndex(slideIndex - 1)
        }
    }

    const nextHandler = () => {
        if (slideIndex + 1 >= props.images.length) {
            setSlideIndex(0)
        } else {
            setSlideIndex(slideIndex +1)
        }
    }

    useEffect(() => {
        setSlideIndex(props.slideIndex)
    },[props.slideIndex])

    const touchStartHandle = (e) => {
        startTouch = e.touches[0].clientX
        //console.log(e.touches);
    }

    const touchendHandler = (e) => {
        
        if (startTouch < endTouch) {
            nextHandler()
        }else if(startTouch > endTouch) {prevHandler()}
    }

    return (
        <>
            <StyledSlider>
                
      <img onTouchEnd={touchendHandler} onTouchMove={e => endTouch = e.touches[0].clientX} onTouchStart={touchStartHandle} alt='car' src={slides[slideIndex]} />
      
                <Link className='prev' to='#' onClick={prevHandler}>&#10094;</Link>
                <Link className='next' to='#' onClick={nextHandler}>&#10095;</Link>
            </StyledSlider>

        </>
    )
}

export default Slider