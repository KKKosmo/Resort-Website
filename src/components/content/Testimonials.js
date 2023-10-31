import people7 from '../../images/people7.jpg';
import roomRed from '../../images/roomRed.jpg';

export default function Testimonials() {
    return (

        <div id="testimonial" className="testimonial_section section section-overlay" style={{ backgroundImage: `url(${roomRed})` }}>
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
                        <div className="col-md-12">
                            <div id="testimonial_slider" className="owl-carousel owl-theme" data-collg="3" data-colmd="2" data-colsm="2" data-colxs="1" data-itemspace="30" data-loop="true" data-autoplay="true" data-smartspeed="800" data-nav="true" data-dots="true">
                                <div className="testimonial item">
                                    <div>
                                        <div className="testi-image">
                                            <img className="animated zoomIn" src={people7} alt="Jona" />
                                        </div>
                                        <div className="testimonial_content">
                                            <p className="testimonial_desc animated zoomIn">" Budget-friendly and malinis po. "</p>
                                            <h4 className="testimonial_title animated zoomIn">Jona</h4>
                                            <span className="testimonial_designation animated zoomIn">Guest</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}