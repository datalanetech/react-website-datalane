import React from 'react';

const FeatureTile = ({ description , img_src}) => {
	return (
		<div className='col-md-6' data-aos='zoom-out' data-aos-delay='200'>
			<div className='feature-box d-flex align-items-center'>
				<i className='bi bi-check'></i>
				<h3>{description}</h3>
				<h4>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita</h4>
			</div>
		</div>
	);
};

export default FeatureTile;
