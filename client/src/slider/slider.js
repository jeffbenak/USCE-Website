import React, { useState, useEffect } from 'react';
import './slider.css';
import BtnSlider from './btnslider'
import dataSlider from './data';


export default function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = dataSlider.length;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
        console.log('next');
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
        console.log('prev');
      };


    const moveDot = index => {
        setCurrentSlide(index)
    }

    return (
        <>
        <div className='slider'>
            {dataSlider.map((slide, index) => {
                return (
                <div
                    
                    className={index === currentSlide ? 'slide current' : 'slide'}
                    key={index}
                
                    >
                    {index === currentSlide && (
                        <div>
                            {slide.image}
                            <div className='content'>
                            <div className='text'>{slide.desc}</div>
                            <div>{slide.button}</div>
                            </div>
                        </div>
                    )}
                </div>
                )            
                })}
            <BtnSlider moveSlide={nextSlide} direction={'next'}/>   

            <BtnSlider moveSlide={prevSlide} direction={'prev'}/>

            <div className="container-dots">
                {Array.from({length: 2}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index)}
                    className={currentSlide === index ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
        </>
    )
}
