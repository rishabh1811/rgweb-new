import React from 'react';
import FormOne from '../contact/FormOne';


const AboutOne = () => {
    return (
        <section className="section section-padding-equal bg-color-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-us">
                            <div className="section-heading heading-left mb-0">
                                <span className="subtitle">About Us</span>
                                <h2 className="title mb--40">We do design, code &amp; develop.</h2>
                                <p>We specialize in providing top-tier web development services to help your business stand out from the competition.</p>
                                <p>Our team of experts can help you create a website that meets your specific needs.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box">
                            <h3 className="title">Get a free quote now</h3>
                           <FormOne />
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group-6 list-unstyled">
                <li className="shape shape-1"><img src={"/images/others/bubble-7.png"} alt="Bubble" /></li>
                <li className="shape shape-2"><img src={"/images/others/line-4.png"} alt="line" /></li>
                <li className="shape shape-3"><img src={"/images/others/line-5.png"} alt="line" /></li>
            </ul>
        </section>
    )
}

export default AboutOne;