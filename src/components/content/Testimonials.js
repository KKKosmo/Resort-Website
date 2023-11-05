import people7 from '../../images/people7.jpg';
import roomRed from '../../images/roomRed.jpg';
import user from '../../images/user.webp';
import outside2 from '../../images/outside2.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';



    const responsiveOptions = {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    };

export default function Testimonials() {
    return (
        <div id="testimonial" className="testimonial_section section section-overlay" style={{ backgroundImage: `url(${outside2})` }}>
            <div className="sectionOverlay">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="section-title wow animated fadeInDown">Testimonials</h2>
                            <div className="seprator wow animated slideInLeft"></div>
                            <p className="section-desc wow animated fadeInUp">Our customers' latest reviews</p>
                        </div>
                    </div>

                    <div className="row">
                        <div>

                            

                            <OwlCarousel
                                className='owl-theme col-md-12'
                                items={3}
                                autoplay
                                nav
                                dots
                                loop
                                margin={10}
                                dotClass='owl-dott'
                                dotsClass='owl-dotts'
                                responsive={responsiveOptions}
                            >
                            <div className="testimonial item">
                                <div>
                                    <div className="testi-image">
                                        <img className="animated zoomIn"
                                            src={user}
                                            alt="Jona" />
                                    </div>

                                    <div className="testimonial_content">
                                        <p className="testimonial_desc animated zoomIn">" Budget friendly and malinis po. "</p>
                                        <h4 className="testimonial_title animated zoomIn">Jona</h4>
                                        <span className="testimonial_designation animated zoomIn">Guest</span>
                                    </div>
                                </div>
                            </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}