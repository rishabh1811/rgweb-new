import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";


const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                {/* <li className="menu-item-has-children">
                    <Link to="#">Digital Agency <FaAngleDown /> </Link>
                    <ul className="axil-submenu">
                        <li><Link to={"/digital-agency"}>Digital Agency</Link></li>
                        <li><Link to={"/creative-agency"}>Creative Agency</Link></li>
                        <li><Link to={"/personal-portfolio"}>Personal Portfolio</Link></li>
                        <li><Link to={"/home-startup"}>Home Startup</Link></li>
                        <li><Link to={"/corporate-agency"}>Corporate Agency</Link></li>
                        <li><a href="https://new.axilthemes.com/demo/react/abstrak-rtl/">RTL Demo</a></li>
                    </ul>
                </li> */}
                {/* <li className="menu-item-has-children">
                    <Link to="/service">Services </Link>
                    <ul className="axil-submenu">
                        <li><Link to={"/service-one"}>Service</Link></li>
                        <li><Link to={"/service-two"}>Service Two</Link></li>
                        <li><Link to={"/service-details/design"}>Service Details</Link></li>
                    </ul>
                </li> */}


                {/* <li className="menu-item-has-children">
                    <Link to="/portfolio">Portfolio </Link>
                    <ul className="axil-submenu">
                        <li><Link to={"/project-grid-one"}>Two Column</Link></li>
                        <li><Link to={"/project-grid-two"}>Three Column</Link></li>
                        <li><Link to={"/project-grid-three"}>Four Column</Link></li>
                        <li><Link to={"/project-width-one"}>Three Column Width</Link></li>
                        <li><Link to={"/project-width-two"}>Four Column Width</Link></li>
                        <li><Link to={"/project-details/plan-management"}>Portfolio Details</Link></li>
                    </ul>
                </li> */}

                <li> <Link to="/service">Services </Link></li>
                <li> <Link to="/portfolio">Portfolio </Link></li>
                <li> <Link to={"/pricing"}>Pricing</Link></li>
                <li> <Link to={"/about-us"}>About Us</Link></li>

                {/* <li className="menu-item-has-children">
                    <Link to="#">Pages <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link to={"/about-us"}>About Us</Link></li>
                        <li><Link to={"/our-office"}>Our Office</Link></li>
                        <li><Link to={"/case-study"}>Case Study</Link></li>
                        <li><Link to={"/case-details/whitehorse"}>Case Study Details</Link></li>
                        <li><Link to={"/team"}>Team</Link></li>
                        <li><Link to={"/team-details/jane-cooper"}>Team Details</Link></li>
                        <li><Link to={"/our-clients"}>Our Clients</Link></li>
                        <li><Link to={"/testimonials"}>Testimonial</Link></li>
                        <li><Link to={"/pricing-table"}>Pricing Table</Link></li>
                        <li><Link to={"/typography"}>Typography</Link></li>
                        <li><Link to={"/404"}>404 Page</Link></li>
                        <li><Link to={"/coming-soon"}>Coming Soon</Link></li>
                    </ul>
                </li> */}



                {/* <li className="menu-item-has-children">
                    <Link to="#">Blog <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link to={"/blog-grid"}>Blog</Link></li>
                        <li><Link to={"/blog-details/1"}>Standard Post</Link></li>
                        <li><Link to={"/blog-details/2"}>Gallery Post</Link></li>
                        <li><Link to={"/blog-details/3"}>Video Post</Link></li>
                         <li><Link to={"#"}>Audio Post</Link></li>
                        <li><Link to={"#"}>Quote Post</Link></li> 
                    </ul>
                </li> */}
                <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;