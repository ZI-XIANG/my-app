import React from 'react';
import t1 from '../images/t1.jpg';
import t2 from '../images/t2.jpg';
import t3 from '../images/t3.jpg';

const Introduction = () => {
    return (
        <div className="intro">
            <div className="introContent">
                <div className="introTxt">
                    <p> 為了心肝毛孩們的健康與安全，數年前我們斥資百萬引進了「<span> 銅銀離子殺菌過濾設備</span>」!
                    今年，我們再次耗資數十萬升級設備，透過微電腦更精準的掌控水中的銅銀離子含量（<span>達到更有效的殺菌、消毒、除藻功能</span>）！
                     </p>
                </div>
                <div className="introImg">
                    <img src={t2} alt="img" />
                </div>
            </div>
            <div className="introContent">
                <div className="introTxt">
                    <p> 寵物住宿區                   </p>
                </div>
                <div className="introImg">
                    <img src={t3} alt="img" />
                </div>
            </div>
            <div className="introContent">
                <div className="introTxt">
                    <p> 寵物洗澡區                   </p>
                </div>
                <div className="introImg">
                    <img src={t1} alt="img" />
                </div>
            </div>

        </div>
    )
}

export default Introduction;
