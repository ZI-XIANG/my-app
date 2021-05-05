import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [open, setOpen] = useState(true);
    const [scroll, setScroll] = useState(false);

    const openMenu = () => {
        setOpen(!open)
    };

    window.addEventListener('scroll', function () {
        const sticky = window.scrollY > 0
        setScroll(sticky)
    })



    return (
        <div className={scroll ? "nav sticky" : "nav"}>
            <h2 className="logo">
                <a href="#slider">GOGO WATER</a>
            </h2>
            <ul onClick={openMenu} className={open ? "navLink" : "navLink active"}>
                <div className="navMenu">
                    <li><a href="#infor">最新消息</a></li>
                    <li><a href="#intro">園區介紹</a></li>
                    <li><a href="#contact">交通指南</a></li>

                </div>

            </ul>
            <div className="bars">

                {
                    open ? <FaBars onClick={openMenu} className="barsOpenIcon " />
                        : <AiOutlineClose onClick={openMenu} className="barsCloseIcon " />

                }

            </div>
        </div>
    )
}

export default Navbar;
