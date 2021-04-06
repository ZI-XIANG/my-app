import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import i1 from '../images/i1.jpg';
import i2 from '../images/i2.jpg';
import i3 from '../images/i3.jpg';
import i4 from '../images/i4.jpg';

AOS.init();

const Infor = () => {
    return (
        <div id="infor" className="infor">
            <div className="inforContent">
                <div className="inforTxt">
                    <p className="news">最新消息</p>
                    <div className="msg" >
                        <p data-aos="fade-right" data-aos-duration="1000" >春季營業時間每週<span>五六日ㄧ,</span>
                        餐廳供餐到四點半,泳池五點清場整理,
                       也有提供寶貝狗寄宿，住宿部分全年無休喔！
                       園區內禁帶外食、禁菸、請勿嚼食檳榔或攜帶酒精飲料!兒童/150以下人員禁止下水喔!</p>
                    </div>
                </div>

                <div className="inforImg">
                    <div className="inforImgItem">
                        <div className="Iimg">
                            <img src={i1} alt="img" />
                        </div>

                        <div className="Iimg">
                            <img src={i2} alt="img" />
                        </div>

                        <div className="Iimg">
                            <img src={i3} alt="img" />
                        </div>

                        <div className="Iimg">
                            <img src={i4} alt="img" />
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Infor;
