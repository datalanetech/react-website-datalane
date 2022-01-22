const PortfolioComponent = () => {
    return (
        {/* <section id='portfolio' className='portfolio'>
						<div className='container' data-aos='fade-up'>
							<header className='section-header'>
								<h2>Portfolio</h2>
								<p>Check our latest work</p>
							</header>

							<div className='row' data-aos='fade-up' data-aos-delay='100'>
								<div className='col-lg-12 d-flex justify-content-center'>
									<ul id='portfolio-flters'>
										<li data-filter='*' className='filter-active'>
											All
										</li>
										<li data-filter='.filter-app'>App</li>
										<li data-filter='.filter-card'>Card</li>
										<li data-filter='.filter-web'>Web</li>
									</ul>
								</div>
							</div>

							<div className='row gy-4 portfolio-container' data-aos='fade-up' data-aos-delay='200'>
								<div className='col-lg-4 col-md-6 portfolio-item filter-app'>
									<div className='portfolio-wrap'>
										<img src='assets/img/portfolio/portfolio-1.jpg' className='img-fluid' alt='' />
										<div className='portfolio-info'>
											<h4>App 1</h4>
											<p>App</p>
											<div className='portfolio-links'>
												<a
													href='assets/img/portfolio/portfolio-1.jpg'
													data-gallery='portfolioGallery'
													className='portfokio-lightbox'
													title='App 1'>
													<i className='bi bi-plus'></i>
												</a>
												<a href='portfolio-details.html' title='More Details'>
													<i className='bi bi-link'></i>
												</a>
											</div>
										</div>
									</div>
								</div>

								<div className='col-lg-4 col-md-6 portfolio-item filter-web'>
									<div className='portfolio-wrap'>
										<img src='assets/img/portfolio/portfolio-2.jpg' className='img-fluid' alt='' />
										<div className='portfolio-info'>
											<h4>Web 3</h4>
											<p>Web</p>
											<div className='portfolio-links'>
												<a
													href='assets/img/portfolio/portfolio-2.jpg'
													data-gallery='portfolioGallery'
													className='portfokio-lightbox'
													title='Web 3'>
													<i className='bi bi-plus'></i>
												</a>
												<a href='portfolio-details.html' title='More Details'>
													<i className='bi bi-link'></i>
												</a>
											</div>
										</div>
									</div>
								</div>

								<div className='col-lg-4 col-md-6 portfolio-item filter-app'>
									<div className='portfolio-wrap'>
										<img src='assets/img/portfolio/portfolio-3.jpg' className='img-fluid' alt='' />
										<div className='portfolio-info'>
											<h4>App 2</h4>
											<p>App</p>
											<div className='portfolio-links'>
												<a
													href='assets/img/portfolio/portfolio-3.jpg'
													data-gallery='portfolioGallery'
													className='portfokio-lightbox'
													title='App 2'>
													<i className='bi bi-plus'></i>
												</a>
												<a href='portfolio-details.html' title='More Details'>
													<i className='bi bi-link'></i>
												</a>
											</div>
										</div>
									</div>
								</div>

								<div className='col-lg-4 col-md-6 portfolio-item filter-card'>
									<div className='portfolio-wrap'>
										<img src='assets/img/portfolio/portfolio-4.jpg' className='img-fluid' alt='' />
										<div className='portfolio-info'>
											<h4>Card 2</h4>
											<p>Card</p>
											<div className='portfolio-links'>
												<a
													href='assets/img/portfolio/portfolio-4.jpg'
													data-gallery='portfolioGallery'
													className='portfokio-lightbox'
													title='Card 2'>
													<i className='bi bi-plus'></i>
												</a>
												<a href='portfolio-details.html' title='More Details'>
													<i className='bi bi-link'></i>
												</a>
											</div>
										</div>
									</div>
								</div>

								<div className='col-lg-4 col-md-6 portfolio-item filter-web'>
									<div className='portfolio-wrap'>
										<img src='assets/img/portfolio/portfolio-5.jpg' className='img-fluid' alt='' />
										<div className='portfolio-info'>
											<h4>Web 2</h4>
											<p>Web</p>
											<div className='portfolio-links'>
												<a
													href='assets/img/portfolio/portfolio-5.jpg'
													data-gallery='portfolioGallery'
													className='portfokio-lightbox'
													title='Web 2'>
													<i className='bi bi-plus'></i>
												</a>
												<a href='portfolio-details.html' title='More Details'>
													<i className='bi bi-link'></i>
												</a>
											</div>
										</div>
									</div>
								</div>

								<div className='col-lg-4 col-md-6 portfolio-item filter-app'>
									<div className='portfolio-wrap'>
										<img src='assets/img/portfolio/portfolio-6.jpg' className='img-fluid' alt='' />
										<div className='portfolio-info'>
											<h4>App 3</h4>
											<p>App</p>
											<div className='portfolio-links'>
												<a
													href='assets/img/portfolio/portfolio-6.jpg'
													data-gallery='portfolioGallery'
													className='portfokio-lightbox'
													title='App 3'>
													<i className='bi bi-plus'></i>
												</a>
												<a href='portfolio-details.html' title='More Details'>
													<i className='bi bi-link'></i>
												</a>
											</div>
										</div>
									</div>
								</div>

								<div className='col-lg-4 col-md-6 portfolio-item filter-card'>
									<div className='portfolio-wrap'>
										<img src='assets/img/portfolio/portfolio-7.jpg' className='img-fluid' alt='' />
										<div className='portfolio-info'>
											<h4>Card 1</h4>
											<p>Card</p>
											<div className='portfolio-links'>
												<a
													href='assets/img/portfolio/portfolio-7.jpg'
													data-gallery='portfolioGallery'
													className='portfokio-lightbox'
													title='Card 1'>
													<i className='bi bi-plus'></i>
												</a>
												<a href='portfolio-details.html' title='More Details'>
													<i className='bi bi-link'></i>
												</a>
											</div>
										</div>
									</div>
								</div>

								<div className='col-lg-4 col-md-6 portfolio-item filter-card'>
									<div className='portfolio-wrap'>
										<img src='assets/img/portfolio/portfolio-8.jpg' className='img-fluid' alt='' />
										<div className='portfolio-info'>
											<h4>Card 3</h4>
											<p>Card</p>
											<div className='portfolio-links'>
												<a
													href='assets/img/portfolio/portfolio-8.jpg'
													data-gallery='portfolioGallery'
													className='portfokio-lightbox'
													title='Card 3'>
													<i className='bi bi-plus'></i>
												</a>
												<a href='portfolio-details.html' title='More Details'>
													<i className='bi bi-link'></i>
												</a>
											</div>
										</div>
									</div>
								</div>

								<div className='col-lg-4 col-md-6 portfolio-item filter-web'>
									<div className='portfolio-wrap'>
										<img src='assets/img/portfolio/portfolio-9.jpg' className='img-fluid' alt='' />
										<div className='portfolio-info'>
											<h4>Web 3</h4>
											<p>Web</p>
											<div className='portfolio-links'>
												<a
													href='assets/img/portfolio/portfolio-9.jpg'
													data-gallery='portfolioGallery'
													className='portfokio-lightbox'
													title='Web 3'>
													<i className='bi bi-plus'></i>
												</a>
												<a href='portfolio-details.html' title='More Details'>
													<i className='bi bi-link'></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section> */}
    )
}

export default PortfolioComponent;