import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';



import outside2 from '../../images/outside2.jpg';
import people1 from '../../images/people1.jpg';
import people2 from '../../images/people2.jpg';
import people3 from '../../images/people3.jpg';
import people4 from '../../images/people4.jpg';
import people5 from '../../images/people5.jpg';
import people6 from '../../images/people6.jpg';
import people7 from '../../images/people7.jpg';
import people8 from '../../images/people8.jpg';
import people9 from '../../images/people9.jpg';
import people10 from '../../images/people10.jpg';


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
            items={4}
            autoplay
            nav
            dots
            loop
            margin={10}
            dotClass='owl-dott'
            dotsClass='owl-dotts'
          >
            <div className='item'>
              <img src={people3}/>
            </div>
            <div className='item'>
              <img src={people4}/>
            </div>
            <div className='item'>
              <img src={people5}/>
            </div>
          <div className='item'>
            <img src={people1}/>
          </div>
            <div className='item'>
              <img src={people2}/>
            </div>
            <div className='item'>
              <img src={people6}/>
            </div>
            <div className='item'>
              <img src={people7}/>
            </div>
            <div className='item'>
              <img src={people8}/>
            </div>
            <div className='item'>
              <img src={people9}/>
            </div>
            <div className='item'>
              <img src={people10}/>
            </div>
          </OwlCarousel>


        </div>
      </div>
    </div>
  );
}
