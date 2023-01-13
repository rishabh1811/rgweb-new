import React from 'react';
// import Link from 'next/link'
import Link from 'next/link'

import { slugify } from '../../utils';



const ServiceProp = ({colSize, serviceStyle, serviceData}) => {

    return (
		<>
			{serviceData.map((data, index) => (
				<div className={colSize} key={index} >
					<div className={`services-grid ${serviceStyle}`}>
						<div className="thumbnail">
							<img src={data.image} alt="icon" />
						</div>
						<div className="content">
							<h5 className="title"> 
								<Link href={`/service-details/${slugify(data.title)}`}>{data.title}</Link>
							</h5>
							<p>{data.description}</p>
							{/* <Link href={`/service-details/${slugify(data.title)}`} className="more-btn">Find out more</Link> */}
						</div>
					</div>
			 	</div>
			))}
		</>
    )
}

export default ServiceProp;