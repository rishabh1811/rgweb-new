import React from 'react';
// import Link from 'next/link'
import Link from 'next/link'

import { FaAngleDown } from "react-icons/fa";


const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                {/* <li className="menu-item-has-children">
                    <Link href="#">Digital Agency <FaAngleDown /> </Link>
                    <ul className="axil-submenu">
                        <li><Link href={"/digital-agency"}>Digital Agency</Link></li>
                        <li><Link href={"/creative-agency"}>Creative Agency</Link></li>
                        <li><Link href={"/personal-portfolio"}>Personal Portfolio</Link></li>
                        <li><Link href={"/home-startup"}>Home Startup</Link></li>
                        <li><Link href={"/corporate-agency"}>Corporate Agency</Link></li>
                        <li><a href="https://new.axilthemes.com/demo/react/abstrak-rtl/">RTL Demo</a></li>
                    </ul>
                </li> */}
                {/* <li className="menu-item-has-children">
                    <Link href="/service">Services </Link>
                    <ul className="axil-submenu">
                        <li><Link href={"/service-one"}>Service</Link></li>
                        <li><Link href={"/service-two"}>Service Two</Link></li>
                        <li><Link href={"/service-details/design"}>Service Details</Link></li>
                    </ul>
                </li> */}


                {/* <li className="menu-item-has-children">
                    <Link href="/portfolio">Portfolio </Link>
                    <ul className="axil-submenu">
                        <li><Link href={"/project-grid-one"}>Two Column</Link></li>
                        <li><Link href={"/project-grid-two"}>Three Column</Link></li>
                        <li><Link href={"/project-grid-three"}>Four Column</Link></li>
                        <li><Link href={"/project-width-one"}>Three Column Width</Link></li>
                        <li><Link href={"/project-width-two"}>Four Column Width</Link></li>
                        <li><Link href={"/project-details/plan-management"}>Portfolio Details</Link></li>
                    </ul>
                </li> */}

                <li> <Link href="/service">Services </Link></li>
                <li> <Link href="/portfolio">Portfolio </Link></li>
                <li> <Link href={"/pricing"}>Pricing</Link></li>
                <li> <Link href={"/about-us"}>About Us</Link></li>

                {/* <li className="menu-item-has-children">
                    <Link href="#">Pages <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link href={"/about-us"}>About Us</Link></li>
                        <li><Link href={"/our-office"}>Our Office</Link></li>
                        <li><Link href={"/case-study"}>Case Study</Link></li>
                        <li><Link href={"/case-details/whitehorse"}>Case Study Details</Link></li>
                        <li><Link href={"/team"}>Team</Link></li>
                        <li><Link href={"/team-details/jane-cooper"}>Team Details</Link></li>
                        <li><Link href={"/our-clients"}>Our Clients</Link></li>
                        <li><Link href={"/testimonials"}>Testimonial</Link></li>
                        <li><Link href={"/pricing-table"}>Pricing Table</Link></li>
                        <li><Link href={"/typography"}>Typography</Link></li>
                        <li><Link href={"/404"}>404 Page</Link></li>
                        <li><Link href={"/coming-soon"}>Coming Soon</Link></li>
                    </ul>
                </li> */}



                {/* <li className="menu-item-has-children">
                    <Link href="#">Blog <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link href={"/blog-grid"}>Blog</Link></li>
                        <li><Link href={"/blog-details/1"}>Standard Post</Link></li>
                        <li><Link href={"/blog-details/2"}>Gallery Post</Link></li>
                        <li><Link href={"/blog-details/3"}>Video Post</Link></li>
                         <li><Link href={"#"}>Audio Post</Link></li>
                        <li><Link href={"#"}>Quote Post</Link></li> 
                    </ul>
                </li> */}
                <li><Link href={"/contact"}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;