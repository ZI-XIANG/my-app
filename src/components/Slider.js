import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import { SliderData } from '../data/SliderData';
import { GiSittingDog } from 'react-icons/gi';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Slider = () => {
    const sliderLength = SliderData.length; //SliderData長度
    const [current, setCurrent] = useState(0); //照片上下張操作
    const timeout = useRef(null);

    //照片自動撥放設定
    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === sliderLength - 1 ? 0 : current + 1))
        }

        //設定setTimeout
        timeout.current = setTimeout(nextSlide, 2500)

        //設定clearTimeout
        return () => {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }

    }, [current, sliderLength]);

    //左邊箭頭click事件設定
    const leftHandle = () => {
        setCurrent(current === 0 ? sliderLength - 1 : current - 1);
    };

    //右邊箭頭click事件設定
    const rightHandle = () => {
        setCurrent(current === sliderLength - 1 ? 0 : current + 1);
    };


    //如果SliderData不是Array或是長度小於0，回傳null
    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null;
    }

    return (
        <div className="sliderSection">
            <div className="sliderWrapper">
                {
                    SliderData.map((slide, index) => (
                        <div key={index} className="slide">
                            {
                                index === current && (
                                    <>
                                        <div className="sliderImg">
                                            <img src={slide.image} alt={slide.alt} />
                                        </div>
                                        <div className="sliderTxt">
                                            <h2>{slide.title}</h2>
                                            <Link to={slide.link}> <GiSittingDog className="sBars" /></Link>
                                        </div>

                                    </>
                                )
                            }
                        </div>
                    ))
                }
                <div className="slderArrow">
                    <FaArrowAltCircleLeft onClick={leftHandle} className="arrL arrow" />
                    <FaArrowAltCircleRight onClick={rightHandle} className="arrR arrow" />
                </div>
            </div>
        </div>
    )
}

export default Slider;
