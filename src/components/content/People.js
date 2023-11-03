import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';



import outside2 from '../../images/outside2.jpg';
import roomRed from '../../images/roomRed.jpg';
import people7 from '../../images/people7.jpg';
import user from '../../images/user.webp';

export default function People() {

  return (
    <div id="testimonial" className="testimonial_section section section-overlay" style={{ backgroundImage: `url(${outside2})` }}>
      <div className="sectionOverlay">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="section-title wow animated fadeInDown">Gallery</h2>
              <div className="seprator wow animated slideInLeft"></div>
              <p className="section-desc wow animated fadeInUp">Our customers' captured moments</p>
            </div>
          </div>

          <OwlCarousel
            className='owl-theme'
            items={2}
            autoplay
            nav
            dots
            loop
            margin={10}
            dotClass='owl-dott'
            dotsClass='owl-dotts'
          >
            <div className='item'>
              <img src={people7}/>
            </div>
            <div className='item'>
              <img src={roomRed}/>
            </div>
            <div className='item'>
              <img src={people7}/>
            </div>
            <div className='item'>
              <img src={roomRed}/>
            </div>
          </OwlCarousel>


        </div>
      </div>
    </div>
  );
}
