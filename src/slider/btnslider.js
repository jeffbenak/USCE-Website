import React from 'react';
import './slider';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BtnSlider({direction, moveSlide}) {
    return (
        <button 
        onClick={moveSlide}

        className={direction === 'next' ? 'btn-slide next' : 
        'btn-slide prev'}>
            <FontAwesomeIcon className='arrow' icon={direction === 'next' ? faCircleArrowRight : faCircleArrowLeft}></FontAwesomeIcon>

            
        </button>
    )
}