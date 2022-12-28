import React from 'react';
import { Link } from 'react-router-dom';


const AboutFive = () => {
    return (
      <div className="section-padding-equal">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="about-team">
                    <div className="thumbnail">
                        <img src={process.env.PUBLIC_URL + "/images/about/about-2-team.png"} alt="thumbnail" />
                    </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="about-team">
                    <div className="section-heading heading-left">
                        <span className="subtitle">Our Team</span>
                        <h2>Alone we can do so little; together we can do so much.</h2>  
                        <p>Our team is made up of experienced professionals in both the software engineering and business worlds. <br/><br/> We are dedicated to creating products and services that provide value to our customers and make their lives easier.</p>
                        {/* <Link to="#" className="axil-btn btn-large btn-fill-primary">Our Team</Link> */}
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFive;