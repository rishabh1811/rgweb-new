import React from 'react';
import { Link } from 'react-router-dom';


const CtaLayoutOne = () => {

    return (

        <div className="section call-to-action-area">
            <div className="container">
                <div className="call-to-action">
                    <div className="section-heading heading-light">
                        <span className="subtitle">Let's Work Together</span>
                        <h2 className="title">Want to grow your business online?</h2>
                        <Link to={"/contact"} className="axil-btn btn-large btn-fill-white">
                            Estimate Project
                        </Link>
                    </div>
                    <div className="thumbnail">
                        <div className="larg-thumb" data-sal="zoom-in" data-sal-duration="600" data-sal-delay="100">
                            <img className="paralax-image" src={"/images/others/chat-group.png"} alt="Chat" />
                        </div>
                        <ul className="list-unstyled small-thumb">
                            <li className="shape shape-1" data-sal="slide-right" data-sal-duration="800" data-sal-delay="400">
                                <img className="paralax-image" src={"/images/others/laptop-poses.png"} alt="Laptop" />
                            </li>
                            <li className="shape shape-2" data-sal="slide-left" data-sal-duration="800" data-sal-delay="300">
                                <img className="paralax-image" src={"/images/others/bill-pay.png"} alt="Bill" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul className="list-unstyled shape-group-9">
                <li className="shape shape-1"><img src={"/images/others/bubble-12.png"} alt="Comments" /></li>
                <li className="shape shape-2"><img src={"/images/others/bubble-16.png"} alt="Comments" /></li>
                <li className="shape shape-3"><img src={"/images/others/bubble-13.png"} alt="Comments" /></li>
                <li className="shape shape-4"><img src={"/images/others/bubble-14.png"} alt="Comments" /></li>
                <li className="shape shape-5"><img src={"/images/others/bubble-16.png"} alt="Comments" /></li>
                <li className="shape shape-6"><img src={"/images/others/bubble-15.png"} alt="Comments" /></li>
                <li className="shape shape-7"><img src={"/images/others/bubble-16.png"} alt="Comments" /></li>
            </ul>
        </div>
    )

}

export default CtaLayoutOne;