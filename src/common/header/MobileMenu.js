import React from 'react';
// import Link from 'next/link'
import Link from "next/link"
import { FaTimes } from "react-icons/fa";
import Nav from './Nav';

const MobileMenu = ({MobileHandler}) => {

    return (
        <div className="mobilemenu-popup">
            <div className="mobilemenu-inner">
                <div className="mobilemenu-header">
                    <div className="mobile-nav-logo">
                        <Link href={"/"}>
                            <img className="light-mode" src={"/images/logo-2.svg"} alt="Site Logo" />
                            <img className="dark-mode" src={"/images/logo-2.svg"} alt="Site Logo" />
                        </Link>
                    </div>
                    <button className="mobile-menu-close" onClick={MobileHandler} ><FaTimes /></button>
                </div>
                <div className="mobilemenu-body">
                    <Nav />
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;