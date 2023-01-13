import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';

const Datas = [
    {
        id: 1,
        title: "Experienced Team",
        para: "Our experts have the necessary skills, knowledge and experience to deliver successful projects."
    },
    {
        id: 2,
        title: "Quality Assurance",
        para: "We use the latest technologies and tools to detect and correct any errors in the code before delivering the final product to the customer."
    },
    {
        id: 3,
        title: "Cost Effective",
        para: "We offer competitive prices and strive to provide the best value for your money. We can work with any budget and provide the best solutions."
    },
    {
        id: 4,
        title: "On-Time Delivery",
        para: "We understand the importance of timely delivery of projects and make sure that all our projects are delivered on time. We keep our customers updated with the progress."
    },
    {
        id: 5,
        title: "Quality Support",
        para: "We provide 24/7 customer support and make sure that our customers get their queries resolved quickly."
    }
]




const AboutThree = () => {
    return (
        <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle 
                    subtitle="Our Valus"
                    title="Why should you work with us?"
                    description="We provide top-notch services and a friendly team environment. Our staff has a wealth of experience and knowledge and will help you grow."
                    textAlignment="heading-left heading-light-left mb--100"
                    textColor=""
                />

                <div className="row">
                    {Datas.map((data) => (
                        <div className="col-lg-4" key={data.id}>
                            <div className="about-quality">
                                <h3 className="sl-number">{data.id}</h3>
                                <h5 className="title">{data.title}</h5>
                                <p>{data.para}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1"><img src={"/images/others/circle-1.png"} alt="Circle" /></li>
                <li className="shape shape-2"><img src={"/images/others/line-3.png"} alt="Circle" /></li>
                <li className="shape shape-3"><img src={"/images/others/bubble-5.png"} alt="Circle" /></li>
            </ul>
        </div>
    )
}

export default AboutThree;