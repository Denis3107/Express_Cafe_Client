import React, {useEffect, useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'

export default function Slider({slides}) {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== slides.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === slides.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(slides.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }


    return (
        <div className="container-slider">
            {slides.map((obj, index) => {
                return (
                    <div key={obj + index} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                        <img src={obj}/>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: slides.length}).map((item, index) => (
                    <div key={index} onClick={() => moveDot(index + 1)}
                         className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
                ))}
            </div>
        </div>
    )
}
