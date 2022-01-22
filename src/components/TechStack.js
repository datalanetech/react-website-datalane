import react from 'react';

const TechStack = ()=>{
    return(
        <section id='clients' className='clients'>
            <div className='container' data-aos='fade-up'>
                <header className='section-header'>
                    <h2>Tech Stack</h2>
                    {/* <p>Temporibus omnis officia</p> */}
                </header>

                <div className='clients-slider swiper'>
                    <div className='swiper-wrapper align-items-center'>
                        <div className='swiper-slide'>
                            <img src='assets/img/tech_stack/kafka.png' className='img-fluid' alt='' />
                        </div>
                        <div className='swiper-slide'>
                            <img src='assets/img/tech_stack/azure.png' className='img-fluid' alt='' />
                        </div>
                        <div className='swiper-slide'>
                            <img src='assets/img/tech_stack/nodeJs.png' className='img-fluid' alt='' />
                        </div>
                        <div className='swiper-slide'>
                            <img src='assets/img/tech_stack/react1.png' className='img-fluid' alt='' />
                        </div>
                        <div className='swiper-slide'>
                            <img src='assets/img/tech_stack/aws.png' className='img-fluid' alt='' />
                        </div>
                        <div className='swiper-slide'>
                            <img src='assets/img/tech_stack/hadoop.png' className='img-fluid' alt='' />
                        </div>
                        <div className='swiper-slide'>
                            <img src='assets/img/tech_stack/mySQL.png' className='img-fluid' alt='' />
                        </div>
                        <div className='swiper-slide'>
                            <img src='assets/img/tech_stack/spark.png' className='img-fluid' alt='' />
                        </div>
                        <div className='swiper-slide'>
                            <img src='assets/img/tech_stack/solidity.svg' className='img-fluid' alt='' />
                        </div>
                        <div className='swiper-slide'>
                            <img src='assets/img/tech_stack/kubernetes.png' className='img-fluid' alt='' />
                        </div>
                        <div className='swiper-slide'>
                            <img src='assets/img/tech_stack/docker.png' className='img-fluid' alt='' />
                        </div>
                    </div>
                    <div className='swiper-pagination'></div>
                </div>
            </div>
        </section>
    )
} 

export default TechStack;