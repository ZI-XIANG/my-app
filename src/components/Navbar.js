import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [open, setOpen] = useState(true);

    const openMenu = () => {
        setOpen(!open)
    };

    return (
        <div className="nav">
            <h2 className="logo">
                <Link to="/">GOGO WATER</Link>
            </h2>
            <ul  onClick={openMenu} className={open ? "navLink" : "navLink active"}>
                <div className="navMenu">
                    <li><Link to="/">最新消息</Link></li>
                    <li><Link to="/">園區介紹</Link></li>
                    <li><Link to="/">交通指南</Link></li>

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
