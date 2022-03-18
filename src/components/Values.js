import React, { Component } from 'react';

class Values extends Component {
	render() {
		return (
			<>
				<section id='values' className='values'>
					<div className='container' data-aos='fade-up'>
						<header className='section-header'>
							<h2>Our Values</h2>
							<p>Datalane's 3As</p>
						</header>

						<div className='row'>
							<div className='col-lg-4' data-aos='fade-up' data-aos-delay='200'>
								<div className='box'>
									<img src='assets/img/values-1.png' className='img-fluid' alt='' />
									<h3>Autonomous</h3>
									<p>
									We strive to ensure our services are autonoumous with accelerated Devops integrations.
									</p>
								</div>
							</div>

							<div className='col-lg-4 mt-4 mt-lg-0' data-aos='fade-up' data-aos-delay='400'>
								<div className='box'>
									<img src='assets/img/values-2.png' className='img-fluid' alt='' />
									<h3>Agile</h3>
									<p>
									We challenge the status quo with open minds, focus, and speed.

									</p>
								</div>
							</div>

							<div className='col-lg-4 mt-4 mt-lg-0' data-aos='fade-up' data-aos-delay='600'>
								<div className='box'>
									<img src='assets/img/values-3.png' className='img-fluid' alt='' />
									<h3>Accountable</h3>
									<p>
									We empower each other to take ownership of our actions.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
}
export default Values;
