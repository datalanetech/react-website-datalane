import React from 'react';

const Footer = () => {
    return (
        <footer id='footer' className='footer'>
            {/* <div className='footer-newsletter'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-12 text-center'>
                            <h4>Our Newsletter</h4>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        </div>
                        <div className='col-lg-6'>
                            <form action='' method='post'>
                                <input type='email' name='email' />
                                <input type='submit' value='Subscribe' />
                            </form>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='footer-top'>
                <div className='container'>
                    <div className='row gy-4'>
                        <div className='col-lg-5 col-md-12 footer-info'>
                            <a href='index.html' className='logo d-flex align-items-center'>
                                <img src='assets/img/ourlogo.png' alt='' />
                                <span>Datalane</span>
                            </a>
                            <p>
                            We deliver next generation applications, to transform your ideas into action.
                            </p>
                            <div className='social-links mt-3'>
                                <a href='/#' className='twitter'>
                                    <i className='bi bi-twitter'></i>
                                </a>
                                <a href='/#' className='facebook'>
                                    <i className='bi bi-facebook'></i>
                                </a>
                                <a href='/#' className='instagram'>
                                    <i className='bi bi-instagram'></i>
                                </a>
                                <a href='/#' className='linkedin'>
                                    <i className='bi bi-linkedin'></i>
                                </a>
                            </div>
                        </div>

                        {/* <div className='col-lg-2 col-6 footer-links'>
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <i className='bi bi-chevron-right'></i> <a href='#'>Home</a>
                                </li>
                                <li>
                                    <i className='bi bi-chevron-right'></i> <a href='#'>About us</a>
                                </li>
                                <li>
                                    <i className='bi bi-chevron-right'></i> <a href='#'>Services</a>
                                </li>
                                <li>
                                    <i className='bi bi-chevron-right'></i> <a href='#'>Terms of service</a>
                                </li>
                                <li>
                                    <i className='bi bi-chevron-right'></i> <a href='#'>Privacy policy</a>
                                </li>
                            </ul>
                        </div> */}

                        <div className='col-lg-2 col-6 footer-links'>
                            <h4>Our Services</h4>
                            <ul>
                                <li>
                                    <i className='bi bi-chevron-right'></i> <a href='#services'>Data Engineering Services</a>
                                </li>
                                <li>
                                    <i className='bi bi-chevron-right'></i> <a href='#services'>AI Operations</a>
                                </li>
                                <li>
                                    <i className='bi bi-chevron-right'></i> <a href='#services'>Digital Transformation</a>
                                </li>
                                <li>
                                    <i className='bi bi-chevron-right'></i> <a href='#services'>Blockchain Solutions</a>
                                </li>
                                <li>
                                    <i className='bi bi-chevron-right'></i> <a href='#services'>Business Analytics</a>
                                </li>
                                <li>
                                    <i className='bi bi-chevron-right'></i> <a href='#services'>Security</a>
                                </li>
                                {/* <li>
                                    <i className='bi bi-chevron-right'></i> <a href='#'>Graphic Design</a>
                                </li> */}
                            </ul>
                        </div>

                        <div className='col-lg-3 col-md-12 footer-contact text-center text-md-start'>
                            <h4>Contact Us</h4>
                            <p>
                                Hyderabad <br />
                                Telangana, 500072
                                <br />
                                India <br />
                                <br />
                                {/* <strong>Phone:</strong> +1 5589 55488 55
                                <br /> */}
                                <strong>Email:</strong> datalanetech@gmail.com
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='copyright'>
                    &copy; Copyright{' '}
                    <strong>
                        <span>Datalane</span>
                    </strong>
                    . All Rights Reserved
                </div>
                {/* <div className='credits'>
                    Designed by <a href='https://bootstrapmade.com/'>BootstrapMade</a>
                </div> */}
            </div>
        </footer>
    )
}

export default Footer;