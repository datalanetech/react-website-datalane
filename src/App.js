import Navbar from './components/navbar';

import React, { Component } from 'react';
import Values from './components/Values';
import FeatureTile from './components/FeatureTile';
import BlogCard from './components/BlogCard';
import { Helmet } from 'react-helmet';
import ServiceComponent from './components/ServiceComponent';
// import TestimonialsComponent from './components/TestimonialsComponent';
// import TeamComponent from './components/TeamComponent';
// import BlogPosts from './components/BlogPosts';
// import PortfolioComponent from './components/PortfolioComponent';
import Footer from './components/Footer';
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
									<img src='assets/img/korean_replacement.jpg' className='img-fluid' alt='' />
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
										<FeatureTile description={'Agile Approach'} />

										<FeatureTile description={''} />

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
										What We Do?
									</h3>

									<ul className='nav nav-pills mb-3'>
										<li>
											<a className='nav-link active' data-bs-toggle='pill' href='#tab1'>
												Strategy
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
												<h4>CX Consulting + Design</h4>
											</div>
											<p>
											Built on data.  Informed by insight.  Everything we do is seamless, secure and customer-centric.  Or should we say, customer-centrix.
											</p>
											<div className='d-flex align-items-center mb-2'>
												<i className='bi bi-check2'></i>
												<h4>Experience channels and Innovation</h4>
											</div>
											<p>
											We craft delightful, outcome-driven experiences for consumers, partners and employees by building cutting edge digital experiences for web, mobile and other devices
											</p>
										</div>

										<div className='tab-pane fade show' id='tab2'>
											<div className='d-flex align-items-center mb-2'>
												<i className='bi bi-check2'></i>
												<h4>Digital CX Operations</h4>
											</div>
											<p>
											Datalane powers a diverse range of client solutions.  Technology enables us to  operationalize programs at scale.  Expertise lets us make each experience personal.
											</p>
											<div className='d-flex align-items-center mb-2'>
												<i className='bi bi-check2'></i>
												<h4>Automated Infrastructure and Applications</h4>
											</div>
											<p>
											Enterprise IT infrastructure, applications & end-user support in a hyper-automated unified IT operating model.
											</p>
										</div>

										<div className='tab-pane fade show' id='tab3'>

											<div className='d-flex align-items-center mb-2'>
												<i className='bi bi-check2'></i>
												<h4>Digital CX Technology</h4>
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
									<img src='assets/img/features-2.png' className='img-fluid' alt='' />
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
													<h4>Hybird-Cloud</h4>
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

					<section id='faq' className='faq'>
						<div className='container' data-aos='fade-up'>
							<header className='section-header'>
								<h2>F.A.Q</h2>
								<p>Frequently Asked Questions</p>
							</header>

							<div className='row'>
								<div className='col-lg-6'>
									<div className='accordion accordion-flush' id='faqlist1'>
										<div className='accordion-item'>
											<h2 className='accordion-header'>
												<button
													className='accordion-button collapsed'
													type='button'
													data-bs-toggle='collapse'
													data-bs-target='#faq-content-1'>
													Non consectetur a erat nam at lectus urna duis?
												</button>
											</h2>
											<div
												id='faq-content-1'
												className='accordion-collapse collapse'
												data-bs-parent='#faqlist1'>
												<div className='accordion-body'>
													Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat
													lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna
													porttitor rhoncus dolor purus non.
												</div>
											</div>
										</div>

										<div className='accordion-item'>
											<h2 className='accordion-header'>
												<button
													className='accordion-button collapsed'
													type='button'
													data-bs-toggle='collapse'
													data-bs-target='#faq-content-2'>
													Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
												</button>
											</h2>
											<div
												id='faq-content-2'
												className='accordion-collapse collapse'
												data-bs-parent='#faqlist1'>
												<div className='accordion-body'>
													Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id
													interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus
													scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper
													dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
												</div>
											</div>
										</div>

										<div className='accordion-item'>
											<h2 className='accordion-header'>
												<button
													className='accordion-button collapsed'
													type='button'
													data-bs-toggle='collapse'
													data-bs-target='#faq-content-3'>
													Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?
												</button>
											</h2>
											<div
												id='faq-content-3'
												className='accordion-collapse collapse'
												data-bs-parent='#faqlist1'>
												<div className='accordion-body'>
													Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci.
													Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet
													nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis
													convallis convallis tellus. Urna molestie at elementum eu facilisis sed
													odio morbi quis
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className='col-lg-6'>
									<div className='accordion accordion-flush' id='faqlist2'>
										<div className='accordion-item'>
											<h2 className='accordion-header'>
												<button
													className='accordion-button collapsed'
													type='button'
													data-bs-toggle='collapse'
													data-bs-target='#faq2-content-1'>
													Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
												</button>
											</h2>
											<div
												id='faq2-content-1'
												className='accordion-collapse collapse'
												data-bs-parent='#faqlist2'>
												<div className='accordion-body'>
													Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id
													interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus
													scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper
													dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
												</div>
											</div>
										</div>

										<div className='accordion-item'>
											<h2 className='accordion-header'>
												<button
													className='accordion-button collapsed'
													type='button'
													data-bs-toggle='collapse'
													data-bs-target='#faq2-content-2'>
													Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
												</button>
											</h2>
											<div
												id='faq2-content-2'
												className='accordion-collapse collapse'
												data-bs-parent='#faqlist2'>
												<div className='accordion-body'>
													Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim
													suspendisse in est ante in. Nunc vel risus commodo viverra maecenas
													accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida
													quis blandit turpis cursus in
												</div>
											</div>
										</div>

										<div className='accordion-item'>
											<h2 className='accordion-header'>
												<button
													className='accordion-button collapsed'
													type='button'
													data-bs-toggle='collapse'
													data-bs-target='#faq2-content-3'>
													Varius vel pharetra vel turpis nunc eget lorem dolor?
												</button>
											</h2>
											<div
												id='faq2-content-3'
												className='accordion-collapse collapse'
												data-bs-parent='#faqlist2'>
												<div className='accordion-body'>
													Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae
													ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi
													est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in
													metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed
													egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc
													non blandit massa enim nec.
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					

					{/*<PortfolioComponent/> 
          
          <TestimonialsComponent/>

					<TeamComponent/> */}

					<section id='clients' className='clients'>
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
					</section>

					<section id='recent-blog-posts' className='recent-blog-posts'>
						<div className='container' data-aos='fade-up'>
							<header className='section-header'>
								<h2>Blog</h2>
								<p>Recent posts form our Blog</p>
							</header>

							<div className='row'>
								<BlogCard
									title='Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit'
									date='Tue, September 15'
									image='../assets/img/blog/blog-1.jpg'
								/>

								<BlogCard
									title='Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit'
									date='Tue, September 15'
									image='../assets/img/blog/blog-1.jpg'
								/>

								<BlogCard
									title='Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit'
									date='Tue, September 15'
									image='../assets/img/blog/blog-1.jpg'
								/>
							</div>
						</div>
					</section>

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
													{/* <br />
													contact@example.com */}
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
