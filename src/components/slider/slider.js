import React, { useState } from 'react';
import './slider.css';
import BtnSlider from './btnslider'
import dataSlider from './data';

export default function Slider() {
    return (
        <div className='container-slider'>
            {dataSlider.map((obj, index) => {
                return (
                    <div className='slide'>
                        <p>Hello</p>
                    </div>
                )
            })}
            {/* <BtnSlider>

            </BtnSlider> */}
        </div>
    )
}