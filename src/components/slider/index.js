import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from './styledCont'
import Photoswipe from '../../components/photoswipe'


const Slider = (props) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false)
    let startTouch = 0;
    let endTouch = null;
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

    const touchStartHandler = (e) => {
        startTouch = e.touches[0].clientX
    }

    const touchMoveHandler = (e) => {
        endTouch = e.touches[0].clientX;
    }

    const touchendHandler = (e) => {
        if (startTouch < endTouch) {
            nextHandler()
        }else if(endTouch === null) {
            return
        }else if(startTouch > endTouch) {
            prevHandler()
        }
    }

    const clickHandler = () => {
        setIsOpen(true);
    }

    const closeHandl = () => setIsOpen(false)

    return (
        <>
            <Container>
                <Photoswipe isOpen={isOpen} items={props.images} onClose={closeHandl} />
      <img onClick={clickHandler} onTouchEnd={touchendHandler} onTouchMove={touchMoveHandler} onTouchStart={touchStartHandler} alt='car' src={slides[slideIndex]} />
                <Link className='prev' to='#' onClick={prevHandler}>&#10094;</Link>
                <Link className='next' to='#' onClick={nextHandler}>&#10095;</Link>
            </Container>
        </>
    )
}

export default Slider