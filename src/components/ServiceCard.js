import React from 'react';

const ServiceCard = ({ color, title, description }) => {
	return (
		<div className='col-lg-4 col-md-6' data-aos='fade-up' data-aos-delay='700'>
			<div className={`service-box ${color}`}>
				<i className='ri-discuss-line icon'></i>
				<h3>{title}</h3>
				<p>{description}</p>
				<a href='#' className='read-more'>
					<span>Read More</span> <i className='bi bi-arrow-right'></i>
				</a>
			</div>
		</div>
	);
};

export default ServiceCard;
