import React, { Component } from 'react';

import Navbar from './components/navbar';
import Values from './components/Values';
import FeatureTile from './components/FeatureTile';
import { Helmet } from 'react-helmet';
import ServiceComponent from './components/ServiceComponent';
import Footer from './components/Footer';
import FAQComponent from './components/FAQComponent';
import TechStack from './components/TechStack';
// import TestimonialsComponent from './components/TestimonialsComponent';
// import TeamComponent from './components/TeamComponent';
// import BlogPosts from './components/BlogPosts';
// import PortfolioComponent from './components/PortfolioComponent';
// import BlogPosts from './components/BlogPosts';
// import PricingComponent from './components/PricingComponent';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Helmet>
					<script src='./assets/js/main.js' type='text/javascript'></script>
				</Helmet>
				<Navbar />
				<section id="hero" class="hero d-flex align-items-center">

          <div class="container">
            <div class="row">
              <div class="col-lg-6 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">Welcome to Datalane!</h1>
                <h2 data-aos="fade-up" data-aos-delay="400">We deliver next generation applications, to transform your ideas into action.
                </h2>
                <div data-aos="fade-up" data-aos-delay="600">
                  <div class="text-center text-lg-start">
                    <a href="#about" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                      <span>Get Started</span>
                      <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                <img src="assets/img/hero-img.png" class="img-fluid" alt=""/>
              </div>
            </div>
          </div>

        </section>

				<main id='main'>
					<section id='about' className='about'>
						<div className='container' data-aos='fade-up'>
							<div className='row gx-0'>
								<div
									className='col-lg-6 d-flex flex-column justify-content-center'
									data-aos='fade-up'
									data-aos-delay='200'>
									<div className='content'>
                  <h3>Why Datalane?</h3>
                  <h2> Datalane brings value to your business by embracing the advancements in technology.</h2>
                  <p>
                    We are a team of visionaries with technology-first approach, for transforming brands around the world, through our services. Our services ensure battle-tested reliability and intelligent optimizations based on Machine learning. 
                  </p>
										<div className='text-center text-lg-start'>
											<a href='#' className='btn-read-more d-inline-flex align-items-center justify-content-center align-self-center'>
												<span>Read More</span>
												<i className='bi bi-arrow-right'></i>
											</a>
										</div>
									</div>
								</div>

								<div
									className='col-lg-6 d-flex align-items-center'
									data-aos='zoom-out'
									data-aos-delay='200'>
									<img src='assets/img/about.jpg' className='img-fluid' alt='' />
								</div>
							</div>
						</div>
					</section>

					<Values />

					<section id='counts' className='counts'>
						<div className='container' data-aos='fade-up'>
							<div className='row gy-4'>
								<div className='col-lg-3 col-md-6'>
									<div className='count-box'>
										<i className='bi bi-emoji-smile'></i>
										<div>
											<span
												data-purecounter-start='0'
												data-purecounter-end='1'
												data-purecounter-duration='1'
												className='purecounter'
											/>
											<p>Happy Clients</p>
										</div>
									</div>
								</div>

								<div className='col-lg-3 col-md-6'>
									<div className='count-box'>
										<i className='bi bi-journal-richtext' style={{ color: '#ee6c20' }}></i>
										<div>
											<span
												data-purecounter-start='0'
												data-purecounter-end='1'
												data-purecounter-duration='1'
												className='purecounter'></span>
											<p>Projects</p>
										</div>
									</div>
								</div>

								<div className='col-lg-3 col-md-6'>
									<div className='count-box'>
										<i className='bi bi-headset' style={{ color: '#15be56' }}></i>
										<div>
											<span
												data-purecounter-start='0'
												data-purecounter-end='200'
												data-purecounter-duration='1'
												className='purecounter'></span>
											<p>Hours Of Support</p>
										</div>
									</div>
								</div>

								<div className='col-lg-3 col-md-6'>
									<div className='count-box'>
										<i className='bi bi-people' style={{ color: '#bb0852' }}></i>
										<div>
											<span
												data-purecounter-start='0'
												data-purecounter-end='5'
												data-purecounter-duration='1'
												className='purecounter'></span>
											<p>Hard Workers</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section id='features' className='features'>
						<div className='container' data-aos='fade-up'>
							<header className='section-header'>
								<h2>Features</h2>
								<p>Laboriosam et omnis fuga quis dolor direda fara</p>
							</header>

							<div className='row'>
								<div className='col-lg-6'>
									<img src='assets/img/features.png' className='img-fluid' alt='' />
								</div>

								<div className='col-lg-6 mt-5 mt-lg-0 d-flex'>
									<div className='row align-self-center gy-4'>
										<FeatureTile description={'Eos aspernatur rem'} />

										<FeatureTile description={'Facilis neque ipsa'} />

										<FeatureTile description={'Volup amet voluptas'} />

										<FeatureTile description={'Rerum omnis sint'} />

										<FeatureTile description={'Alias possimus'} />

										<FeatureTile description={'Repellendus mollitia'} />
									</div>
								</div>
							</div>

							<div className='row feture-tabs' data-aos='fade-up'>
								<div className='col-lg-6'>
									<h3>
										Neque officiis dolore maiores et exercitationem quae est seda lidera pat claero
									</h3>

									<ul className='nav nav-pills mb-3'>
										<li>
											<a className='nav-link active' data-bs-toggle='pill' href='#tab1'>
												Saepe fuga
											</a>
										</li>
										<li>
											<a className='nav-link' data-bs-toggle='pill' href='#tab2'>
												Voluptates
											</a>
										</li>
										<li>
											<a className='nav-link' data-bs-toggle='pill' href='#tab3'>
												Corrupti
											</a>
										</li>
									</ul>

									<div className='tab-content'>
										<div className='tab-pane fade show active' id='tab1'>
											<p>
												Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus
												expedita. Sapiente atque consequatur minima nihil quae aspernatur quo
												suscipit voluptatem.
											</p>
											<div className='d-flex align-items-center mb-2'>
												<i className='bi bi-check2'></i>
												<h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
											</div>
											<p>
												Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente
												minima commodi dolorum non eveniet magni quaerat nemo et.
											</p>
											<div className='d-flex align-items-center mb-2'>
												<i className='bi bi-check2'></i>
												<h4>Incidunt non veritatis illum ea ut nisi</h4>
											</div>
											<p>
												Non quod totam minus repellendus autem sint velit. Rerum debitis facere
												soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi
												voluptates nisi at. Dolorem quo tempora. Quia et perferendis.
											</p>
										</div>

										<div className='tab-pane fade show' id='tab2'>
											<p>
												Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus
												expedita. Sapiente atque consequatur minima nihil quae aspernatur quo
												suscipit voluptatem.
											</p>
											<div className='d-flex align-items-center mb-2'>
												<i className='bi bi-check2'></i>
												<h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
											</div>
											<p>
												Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente
												minima commodi dolorum non eveniet magni quaerat nemo et.
											</p>
											<div className='d-flex align-items-center mb-2'>
												<i className='bi bi-check2'></i>
												<h4>Incidunt non veritatis illum ea ut nisi</h4>
											</div>
											<p>
												Non quod totam minus repellendus autem sint velit. Rerum debitis facere
												soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi
												voluptates nisi at. Dolorem quo tempora. Quia et perferendis.
											</p>
										</div>

										<div className='tab-pane fade show' id='tab3'>
											<p>
												Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus
												expedita. Sapiente atque consequatur minima nihil quae aspernatur quo
												suscipit voluptatem.
											</p>
											<div className='d-flex align-items-center mb-2'>
												<i className='bi bi-check2'></i>
												<h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
											</div>
											<p>
												Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente
												minima commodi dolorum non eveniet magni quaerat nemo et.
											</p>
											<div className='d-flex align-items-center mb-2'>
												<i className='bi bi-check2'></i>
												<h4>Incidunt non veritatis illum ea ut nisi</h4>
											</div>
											<p>
												Non quod totam minus repellendus autem sint velit. Rerum debitis facere
												soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi
												voluptates nisi at. Dolorem quo tempora. Quia et perferendis.
											</p>
										</div>
									</div>
								</div>

								<div className='col-lg-6'>
									<img src='assets/img/features-2.png' className='img-fluid' alt='' />
								</div>
							</div>

							<div className='row feature-icons' data-aos='fade-up'>
								<h3>Ratione mollitia eos ab laudantium rerum beatae quo</h3>

								<div className='row'>
									<div className='col-xl-4 text-center' data-aos='fade-right' data-aos-delay='100'>
										<img src='assets/img/features-3.png' className='img-fluid p-4' alt='' />
									</div>

									<div className='col-xl-8 d-flex content'>
										<div className='row align-self-center gy-4'>
											<div className='col-md-6 icon-box' data-aos='fade-up'>
												<i className='ri-line-chart-line'></i>
												<div>
													<h4>Corporis voluptates sit</h4>
													<p>
														Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris
														nisi ut aliquip
													</p>
												</div>
											</div>

											<div className='col-md-6 icon-box' data-aos='fade-up' data-aos-delay='100'>
												<i className='ri-stack-line'></i>
												<div>
													<h4>Ullamco laboris nisi</h4>
													<p>
														Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
														officia deserunt
													</p>
												</div>
											</div>

											<div className='col-md-6 icon-box' data-aos='fade-up' data-aos-delay='200'>
												<i className='ri-brush-4-line'></i>
												<div>
													<h4>Labore consequatur</h4>
													<p>
														Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis
														facere
													</p>
												</div>
											</div>

											<div className='col-md-6 icon-box' data-aos='fade-up' data-aos-delay='300'>
												<i className='ri-magic-line'></i>
												<div>
													<h4>Beatae veritatis</h4>
													<p>
														Expedita veritatis consequuntur nihil tempore laudantium vitae denat
														pacta
													</p>
												</div>
											</div>

											<div className='col-md-6 icon-box' data-aos='fade-up' data-aos-delay='400'>
												<i className='ri-command-line'></i>
												<div>
													<h4>Molestiae dolor</h4>
													<p>
														Et fuga et deserunt et enim. Dolorem architecto ratione tensa raptor
														marte
													</p>
												</div>
											</div>

											<div className='col-md-6 icon-box' data-aos='fade-up' data-aos-delay='500'>
												<i className='ri-radar-line'></i>
												<div>
													<h4>Explicabo consectetur</h4>
													<p>
														Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut
														inventore
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<ServiceComponent/>

					{/* <PricingComponent/> */}

					{/* <FAQComponent/> */}
					

					{/*<PortfolioComponent/> 
          
          <TestimonialsComponent/>

					<TeamComponent/> */}

					{/* <section id='clients' className='clients'>
						<div className='container' data-aos='fade-up'>
							<header className='section-header'>
								<h2>Our Clients</h2>
								<p>Temporibus omnis officia</p>
							</header>

							<div className='clients-slider swiper'>
								<div className='swiper-wrapper align-items-center'>
									<div className='swiper-slide'>
										<img src='assets/img/clients/client-1.png' className='img-fluid' alt='' />
									</div>
									<div className='swiper-slide'>
										<img src='assets/img/clients/client-2.png' className='img-fluid' alt='' />
									</div>
									<div className='swiper-slide'>
										<img src='assets/img/clients/client-3.png' className='img-fluid' alt='' />
									</div>
									<div className='swiper-slide'>
										<img src='assets/img/clients/client-4.png' className='img-fluid' alt='' />
									</div>
									<div className='swiper-slide'>
										<img src='assets/img/clients/client-5.png' className='img-fluid' alt='' />
									</div>
									<div className='swiper-slide'>
										<img src='assets/img/clients/client-6.png' className='img-fluid' alt='' />
									</div>
									<div className='swiper-slide'>
										<img src='assets/img/clients/client-7.png' className='img-fluid' alt='' />
									</div>
									<div className='swiper-slide'>
										<img src='assets/img/clients/client-8.png' className='img-fluid' alt='' />
									</div>
								</div>
								<div className='swiper-pagination'></div>
							</div>
						</div>
					</section> */}

					<TechStack/>

					{/* <BlogPosts/> */}

					<section id='contact' className='contact'>
						<div className='container' data-aos='fade-up'>
							<header className='section-header'>
								<h2>Contact</h2>
								<p>Contact Us</p>
							</header>

							<div className='row gy-4'>
								<div className='col-lg-6'>
									<div className='row gy-4'>
										<div className='col-md-6'>
											<div className='info-box'>
												<i className='bi bi-geo-alt'></i>
												<h3>Address</h3>
												<p>
													A108 Adam Street,
													<br />
													New York, NY 535022
												</p>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='info-box'>
												<i className='bi bi-telephone'></i>
												<h3>Call Us</h3>
												<p>
													+1 5589 55488 55
													<br />
													+1 6678 254445 41
												</p>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='info-box'>
												<i className='bi bi-envelope'></i>
												<h3>Email Us</h3>
												<p>
													datalanetech@gmail.com
												</p>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='info-box'>
												<i className='bi bi-clock'></i>
												<h3>Open Hours</h3>
												<p>
													Monday - Friday
													<br />
													10:00AM - 07:00PM
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className='col-lg-6'>
									<form action='forms/contact.php' method='post' className='php-email-form'>
										<div className='row gy-4'>
											<div className='col-md-6'>
												<input
													type='text'
													name='name'
													className='form-control'
													placeholder='Your Name'
													required
												/>
											</div>

											<div className='col-md-6 '>
												<input
													type='email'
													className='form-control'
													name='email'
													placeholder='Your Email'
													required
												/>
											</div>

											<div className='col-md-12'>
												<input
													type='text'
													className='form-control'
													name='subject'
													placeholder='Subject'
													required
												/>
											</div>

											<div className='col-md-12'>
												<textarea
													className='form-control'
													name='message'
													rows='6'
													placeholder='Message'
													required></textarea>
											</div>

											<div className='col-md-12 text-center'>
												<div className='loading'>Loading</div>
												<div className='error-message'></div>
												<div className='sent-message'>Your message has been sent. Thank you!</div>

												<button type='submit'>Send Message</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</section>
				</main>

				<Footer/>

				<a href='#' className='back-to-top d-flex align-items-center justify-content-center'>
					<i className='bi bi-arrow-up-short'></i>
				</a>

				<script src='assets/vendor/purecounter/purecounter.js'></script>
				<script src='assets/vendor/aos/aos.js'></script>
				<script src='assets/vendor/bootstrap/js/bootstrap.bundle.min.js'></script>
				<script src='assets/vendor/glightbox/js/glightbox.min.js'></script>
				<script src='assets/vendor/isotope-layout/isotope.pkgd.min.js'></script>
				<script src='assets/vendor/swiper/swiper-bundle.min.js'></script>
				<script src='assets/vendor/php-email-form/validate.js'></script>

				<script src='assets/js/main.js'></script>
			</div>
		);
	}
}
export default App;
