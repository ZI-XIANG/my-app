import React from 'react';
import i1 from '../images/i1.jpg';
import i2 from '../images/i2.jpg';
import i3 from '../images/i3.jpg';
import i4 from '../images/i4.jpg';

const Infor = () => {
    return (
        <div className="infor">
            <div className="inforContent">
                <div className="inforTxt">
                    <p className="news">最新消息</p>
                    <div className="msg">
                        <p>春季營業時間,每週五六日一,</p>
                        <p>餐廳供餐到四點半,泳池五點清場整理,</p>
                        <p>也有提供寶貝狗寄宿，住宿部分全年無休喔！</p>
                    </div>
                </div>

                <div className="inforImg">

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
        </div >
    )
}

export default Infor;
