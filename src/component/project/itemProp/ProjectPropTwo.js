import React from 'react';
import Link from 'next/link'
import { slugify } from '../../../utils';


const PropOne = ({projectStyle, portfolio}) => {
	
    return (
		<>
			<div className={`project-grid ${projectStyle}`}>
				<div className="thumbnail">
				<Link href={`/project-details/${slugify(portfolio.title)}`}>
					<img src={portfolio.image} alt="icon" />
				</Link>
				</div>
				<div className="content">
				<span className="subtitle">
					{portfolio.category.map((cat, i) => (
						<span key={i}>{cat}</span>
					))}
				</span>
				<h3 className="title"> 
					<Link href={`/project-details/${slugify(portfolio.title)}`}>{portfolio.title}</Link>
				</h3>
				</div>
			</div>
		</>
    )
}

export default PropOne;