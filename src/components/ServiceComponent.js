import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceComponent = ()=>{
    return(
        <section id='services' className='services'>
            <div className='container' data-aos='fade-up'>
                <header className='section-header'>
                    <h2>Services</h2>
                    {/* <p>Veritatis et dolores facere numquam et praesentium</p> */}
                </header>

                <div className='row gy-4'>
                    <ServiceCard
                        title='Data Engineering Services'
                        color='blue'
                        description='We help compaines build and improve data architectures for high efficiency and scalability'
                    />

                    <ServiceCard
                        title='AI Operations'
                        color='orange'
                        description='We provide Machine Learning solutions for variety of domains'
                    />

                    <ServiceCard
                        title='Digital Transformation'
                        color='green'
                        description='We help companies rethink their system architectures and help them move to cloud'
                    />

                    <ServiceCard
                        title='Blockchain Solutions'
                        color='red'
                        description='We empower companies and startups to rethink their models and help them introduce the power of blockchain into their architecture'
                    />

                    <ServiceCard
                        title='Business Analytics'
                        color='purple'
                        description='We can help you make smart data driven decisions that will consildate your competitive advantage'
                    />


                    {/* <ServiceCard
                        title='Ledo Markt'
                        color='purple'
                        description='Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero
                                corrupti neque eum hic non ut nesciunt dolorem.'
                    />

                    <ServiceCard
                        title='Ledo Markt'
                        color='pink'
                        description='Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero
                                corrupti neque eum hic non ut nesciunt dolorem.'
                    /> */}
                </div>
            </div>
        </section>
    )
}

export default ServiceComponent;