import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSlider = styled.div`display: flex;
`

const BigImageDiv = styled.div`
width: 800px;
height: 450px;
overflow: hidden;
position: relative;

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
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev {
    left: 0;
}


/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

`
const ThumbnailsDiv = styled.div`
width: 40%;
display: flex;
flex-wrap: wrap;
margin-left: 20px;
img {
    margin-right: 20px;
    width: 100px;
    height: 100px;
    cursor: pointer;
}
`

const Slider = (props) => {
    const [slideIndex, setSlideIndex] = useState(1);

    const plus = () => {
        setSlideIndex(slideIndex + 1);
    }

    const minus = () => {
        setSlideIndex(slideIndex - 1);
    }

    const prepChildren = props.children.map((child, index) =>
        <img index={index} key={index} {...child.props}
            onClick={() => setSlideIndex(index + 1)} alt="car" />)

    const showSlides = (n) => {
        const slides = props.children;
        if (n > slides.length) { setSlideIndex(1) };
        if (n < 1) { setSlideIndex(slides.length) };
        return slides[slideIndex - 1];
    }



    return (
        <StyledSlider>
            <BigImageDiv>
                {showSlides(slideIndex)}
                <Link className='prev' to='#' onClick={minus}>&#10094;</Link>
                <Link className='next' to='#' onClick={plus}>&#10095;</Link>
            </BigImageDiv>
            <ThumbnailsDiv>
                {prepChildren}
            </ThumbnailsDiv>
        </StyledSlider>
    )
}

export default Slider