import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import t1 from '../images/t1.jpg';
import t2 from '../images/t2.jpg';
import t3 from '../images/t3.jpg';
import t4 from '../images/t4.jpg';

AOS.init();

const Introduction = () => {
    return (
        <div id="intro" className="intro">
            <div className="introContent introRight">
                <div className="introTxt">
                    <p data-aos="zoom-in-up" data-aos-duration ="1000" className="introMsg"> 為了心肝毛孩們的健康與安全，數年前我們斥資百萬引進了「<span> 銅銀離子殺菌過濾設備</span>」!
                    今年，我們再次耗資數十萬升級設備，透過微電腦更精準的掌控水中的銅銀離子含量（<span>達到更有效的殺菌、消毒、除藻功能</span>）！
                     </p>
                </div>
                <div className="introImg introRight0">
                    <img src={t2} alt="img" />
                </div>
            </div>

            <div className="introLef">
                <div className="introContent">
                    <div className="introImg imgHover introLef1">
                        <img data-aos="flip-left" data-aos-duration ="1000" className="imgMsg" src={t3} alt="img" />

                        <div className="introTxt">
                            <p> 寵物住宿區</p>
                        </div>
                    </div>
                </div>

                <div className="introContent">

                    <div className="introImg imgHover introLef2">
                        <img data-aos="flip-left" data-aos-duration ="1000" className="imgMsg" src={t1} alt="img" />
                        <div className="introTxt introTxt1">
                            <p>寵物洗澡區</p>
                        </div>
                    </div>
                </div>
                <div className="introContent">

                    <div className="introImg imgHover introLef3">
                        <img data-aos="flip-left" data-aos-duration ="1000" className="imgMsg" src={t4} alt="img" />
                        <div className="introTxt">
                            <p>草皮跑跑區</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
