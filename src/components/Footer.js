import React from 'react';
import { BiMap } from 'react-icons/bi';
import { AiOutlinePhone, AiOutlineMail, AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContent">
                <div className="footerLeft">

                    <div className="footerItem">
                        <AiOutlinePhone className="leftIcon" />
                        <p>03-774-2299</p>
                    </div>
                    <div className="footerItem">
                        <AiOutlineMail className="leftIcon" />
                        <p ><span className="mail"> gogowaterworld@gmail.com</span></p>
                    </div>
                    <div className="footerItem">
                        <BiMap className="leftIcon" />
                        <p>苗栗縣苗栗市苗栗縣苑裡鄉山腳里錦山22-2號</p>
                    </div>
                </div>
                <div className="footerRight">
                    <p>狗狗水世界除了有300坪的寶貝狗狗專屬泳池和千坪的大草皮，還有寵物餐廳提供爸媽與寶貝們營養美味的餐點喔！</p>
                    <div className="footerRightIcon">
                        <AiFillFacebook className="rightIcon" />
                        <AiFillInstagram className="rightIcon" />
                        <AiFillTwitterCircle className="rightIcon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
