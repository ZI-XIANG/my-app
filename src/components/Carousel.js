import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiTicket } from 'react-icons/gi';
import { BiWind } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import c1 from '../images/c1.jpg'
import c2 from '../images/c2.jpg'
import c3 from '../images/c3.jpg'
import c4 from '../images/c4.jpg'
import c5 from '../images/c5.jpg'
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"



// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

AOS.init();
const Carousel = () => {

    const [imgSrc, setImgSrc] = useState(null)




    const carouselImg = (e) => {

        setImgSrc(e.target.src)

    }


    return (

        <div id="carousel" className="fare">
            <div className="fareLeft">
                <h2 className="dogTicket">狗狗泳票</h2>
                <div className="fareIcon">
                    <GiTicket className="fIcon" />
                    <p>小寶貝 1~14kg</p>
                    <p>360/單次</p>
                </div>
                <div className="fareIcon">
                    <GiTicket className="fIcon" />
                    <p>大寶貝 14kg以上</p>
                    <p>420/單次</p>
                </div>




                <h2 className="wind">吹風設備</h2>
                <div className="fareIcon">
                    <BiWind className="fIcon" />
                    <p>吹水機 5分鐘/10元</p>
                </div>
                <div className="fareIcon">
                    <BiWind className="fIcon" />
                    <p>烘箱 4分鐘/10元</p>
                </div>
                <div className="fareIcon">
                    <BiWind className="fIcon" />
                    <p>女廁吹風機 5分鐘/10元</p>
                </div>


                <div className={imgSrc ? 'mask' : null}></div>
            </div>


            <div onClick={e => carouselImg(e)} className="carousel" data-aos-duration="1500" data-aos="fade-left">
                <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true
                }} pagination={true} className="mySwiper">
                    <SwiperSlide ><img src={c1} alt={c1} /></SwiperSlide><SwiperSlide><img src={c2} alt={c1} /></SwiperSlide><SwiperSlide><img src={c3} alt={c1} /></SwiperSlide><SwiperSlide><img src={c4} alt={c1} /></SwiperSlide><SwiperSlide><img src={c5} alt={c1} /></SwiperSlide>
                </Swiper>

                <div className={imgSrc ? "details showImg" : "details"}>
                    <AiOutlineCloseCircle onClick={() => setImgSrc(null)} className="closeDetailsImg" />
                    <img src={imgSrc} alt="img" />
                </div>


            </div>
        </div>
    )
}

export default Carousel
