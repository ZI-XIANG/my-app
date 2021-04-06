import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="contact">
            <div className="contactContent">
                <div className="contactTxt">
                    <p><span>苗栗縣苗栗市苗栗縣苑裡鄉山腳里錦山22-2號</span></p>
                    <p>自行開車可於國道三號苑裡交流道下，循著三義的路標分岔路口靠右，於121縣道向左轉，約十分鐘路程即可到達!</p>
                    <p>使用導航可搜尋<span>GoGo WaterWorld/狗狗水世界</span></p>
                </div>

                <div className="mapContent">
                    <iframe className="map" title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.981836565703!2d120.68862761531618!3d24.416698568911556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4c183f5051b3ab8!2zR29HbyBXYXRlcldvcmxkL-eLl-eLl-awtOS4lueVjC_ni5fni5fljYrls7bphZLlupc!5e0!3m2!1szh-TW!2stw!4v1617515759700!5m2!1szh-TW!2stw" style={{ "border": 0 }} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact;
