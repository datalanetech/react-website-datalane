import React, { Component } from 'react';

import Navbar from './components/navbar';
import Values from './components/Values';
import FeatureTile from './components/FeatureTile';
import { Helmet } from 'react-helmet';
import ServiceComponent from './components/ServiceComponent';
import Footer from './components/Footer';
import TechStack from './components/TechStack';
import CountUp from 'react-countup';
// import FAQComponent from './components/FAQComponent';
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
											<a href='#features' className='btn-read-more d-inline-flex align-items-center justify-content-center align-self-center'>
												<span>Our Expertise</span>
												<i className='bi bi-arrow-right'></i>
											</a>
										</div>
									</div>
								</div>

								<div
									className='col-lg-6 d-flex align-items-center'
									data-aos='zoom-out'
									data-aos-delay='200'>
									<img src='assets/img/ourImages/korean_replacement.jpg' className='img-fluid' alt='' />
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
											{/* <span
												data-purecounter-start='0'
												data-purecounter-end='1'
												data-purecounter-duration='1'
												className='purecounter'
											>
												0</span> */}
											<CountUp end={3} duration={2}/>
											<p>Happy Clients</p>
										</div>
									</div>
								</div>

								<div className='col-lg-3 col-md-6'>
									<div className='count-box'>
										<i className='bi bi-journal-richtext' style={{ color: '#ee6c20' }}></i>
										<div>
											{/* <span
												data-purecounter-start='0'
												data-purecounter-end='1'
												data-purecounter-duration='1'
												className='purecounter'></span> */}
											<CountUp end={3} duration={2}/>
											<p>Projects</p>
										</div>
									</div>
								</div>

								<div className='col-lg-3 col-md-6'>
									<div className='count-box'>
										<i className='bi bi-headset' style={{ color: '#15be56' }}></i>
										<div>
											{/* <span
												data-purecounter-start='0'
												data-purecounter-end='200'
												data-purecounter-duration='1'
												className='purecounter'></span> */}
											<CountUp end={600} duration={2}/>
											<p>Hours Of Support</p>
										</div>
									</div>
								</div>

								<div className='col-lg-3 col-md-6'>
									<div className='count-box'>
										<i className='bi bi-people' style={{ color: '#bb0852' }}></i>
										<div>
											{/* <span
												data-purecounter-start='0'
												data-purecounter-end='5'
												data-purecounter-duration='1'
												className='purecounter'></span> */}
											<CountUp end={6} duration={2}/>
											<p>Smart Workers</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section id='features' className='features'>
						<div className='container' data-aos='fade-up'>
							<header className='section-header'>
								{/* <h2>Our Expertis</h2> */}
								<p>Our Expertise</p>
							</header>

							<div className='row'>
								<div className='col-lg-6'>
									<img src='assets/img/bigdata.jpg' className='img-fluid' alt='' />
								</div>

								<div className='col-lg-6 mt-5 mt-lg-0 d-flex'>
									<div className='row align-self-center gy-4'>
										<FeatureTile description={'Cloud Solutions'} />

										<FeatureTile description={'Devops'} />

										<FeatureTile description={'Big Data Services'} />

										<FeatureTile description={'Microservices'} />

										<FeatureTile description={'Analytics Solutions'} />

										<FeatureTile description={'Data Inteligence'} />
									</div>
								</div>
							</div>

							<div className='row feture-tabs' data-aos='fade-up'>
								<div className='col-lg-6'>
									<h3>
										What We Do?
									</h3>

									<ul className='nav nav-pills mb-3'>
										<li>
											<a className='nav-link active' data-bs-toggle='pill' href='#tab1'>
												Delivery
											</a>
										</li>
										<li>
											<a className='nav-link' data-bs-toggle='pill' href='#tab2'>
												Talent
											</a>
										</li>
										<li>
											<a className='nav-link' data-bs-toggle='pill' href='#tab3'>
												Technology
											</a>
										</li>
									</ul>

									<div className='tab-content'>
										<div className='tab-pane fade show active' id='tab1'>

										<div className='d-flex align-items-center mb-2'>
												<i className='bi bi-check2'></i>
												<h4>World Class Consulting</h4>
											</div>
											<p>
											We craft delightful, outcome-driven experiences for consumers, partners and employees by building cutting edge digital experiences for web, mobile and other devices
											</p>
											<div className='d-flex align-items-center mb-2'>
												<i className='bi bi-check2'></i>
												<h4>Consumer Centric</h4>
											</div>
											<p>
											Everything we do is seamless, secure and customer-centric. Customer is the focal point of all decisions related to delivering products
											</p>

										</div>

										<div className='tab-pane fade show' id='tab2'>
											<div className='d-flex align-items-center mb-2'>
												<i className='bi bi-check2'></i>
												<h4>Experience</h4>
											</div>
											<p>
											Datalane powers a diverse range of client solutions.  Technology enables us to  operationalize programs at scale.  Expertise lets us make each experience personal.
											</p>
											<div className='d-flex align-items-center mb-2'>
												<i className='bi bi-check2'></i>
												<h4>Team</h4>
											</div>
											<p>
											Datalane has an exceptional team of professionals with profound expertise across multiple tech stacks.
											</p>
										</div>

										<div className='tab-pane fade show' id='tab3'>

											<div className='d-flex align-items-center mb-2'>
												<i className='bi bi-check2'></i>
												<h4>Digital Technology</h4>
											</div>
											<p>
											Today we supply technology and build experiences that we could only dream of yesterday. And we are already creating tomorrow’s digital, AI and cloud-based experiences. Imagine where our journey will take us next.
											</p>
											<div className='d-flex align-items-center mb-2'>
												<i className='bi bi-check2'></i>
												<h4>Digital Security</h4>
											</div>
											<p>
											Enterprise cyber security that provides cyber protection, cyber defense, IAM, and GRC services.
											</p>
										</div>
									</div>
								</div>

								<div className='col-lg-6'>
									<img src='assets/img/features-2.png' className='img-fluid' alt='' width='90%'/>
								</div>
							</div>

							<div className='row feature-icons' data-aos='fade-up'>
								<h3>How We Work?</h3>

								<div className='row'>
									<div className='col-xl-4 text-center' data-aos='fade-right' data-aos-delay='100'>
										<img src='assets/img/features.png' className='img-fluid p-4' alt='' />
									</div>

									<div className='col-xl-8 d-flex content'>
										<div className='row align-self-center gy-4'>
											<div className='col-md-6 icon-box' data-aos='fade-up'>
												<i className='ri-line-chart-line'></i>
												<div>
													<h4>Agile Approach</h4>
													<p>
													Scrum and Kanban framework applied to leverage collaboration and deliver complex solutions.
													</p>
												</div>
											</div>

											<div className='col-md-6 icon-box' data-aos='fade-up' data-aos-delay='100'>
												<i className='ri-stack-line'></i>
												<div>
													<h4>Hybrid-Cloud</h4>
													<p>
														We build cloud agnostic applications which can be easily deployed on Azure, GCP, AWS and On-Premise as well.
													</p>
												</div>
											</div>

											<div className='col-md-6 icon-box' data-aos='fade-up' data-aos-delay='200'>
												<i className='ri-brush-4-line'></i>
												<div>
													<h4>Streams</h4>
													<p>
													DevOps, App Dev & Modernization, Data Mod & Insights, Automation.
													</p>
												</div>
											</div>

											<div className='col-md-6 icon-box' data-aos='fade-up' data-aos-delay='300'>
												<i className='ri-magic-line'></i>
												<div>
													<h4>Delivery</h4>
													<p>
													Focus on Research & Development, develop and deliver new solutions to customers.​
													</p>
												</div>
											</div>

											<div className='col-md-6 icon-box' data-aos='fade-up' data-aos-delay='400'>
												<i className='ri-command-line'></i>
												<div>
													<h4>Insights and action​</h4>
													<p>
													We charge your business by deriving data insights and help create value through analytics and AI solutions.
													</p>
												</div>
											</div>

											<div className='col-md-6 icon-box' data-aos='fade-up' data-aos-delay='500'>
												<i className='ri-radar-line'></i>
												<div>
													<h4>Data Modernization</h4>
													<p>
														We build  futuristic data supply chain and transform your data ecosystem from silos to a unified data marketplace.
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
													Hyderabad, Telangana
													<br />
													India 500072
												</p>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='info-box'>
												<i className='bi bi-telephone'></i>
												<h3>Call Us</h3>
												<p>
													+91 9248192491
												</p>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='info-box'>
												<i className='bi bi-envelope'></i>
												<h3>Email Us</h3>
												<p>
													sales@datalane.in
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

				<a href='/#' className='back-to-top d-flex align-items-center justify-content-center'>
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
