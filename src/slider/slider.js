import React, { useState, useEffect } from 'react';
import './slider.css';
import BtnSlider from './btnslider'
import dataSlider from './data';


export default function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = dataSlider.length;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
        console.log("next");
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
        console.log("prev");
      };

      useEffect(() => {
        setCurrentSlide(0);
      }, []);

    const moveDot = index => {
        setCurrentSlide(index)
    }

    return (
        <div className='slider'>
            {dataSlider.map((slide, index) => {
                return (
                <div
                    className={index === currentSlide ? "slide current" : "slide"}
                    key={index}
                    >
                    {index === currentSlide && (
                        <div>
                            <img src={slide.image} alt="slide" className='image'/>
                            <div className='content'>
                            <h2>{slide.title}</h2>
                            <p>{slide.desc}</p>
                            <hr />
                            </div>
                        </div>
                    )}
                </div>
                )            
                })}
            <BtnSlider moveSlide={nextSlide} direction={'next'}/>   

            <BtnSlider moveSlide={prevSlide} direction={'prev'}/>

            <div className="container-dots">
                {Array.from({length: 4}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={currentSlide === index ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}