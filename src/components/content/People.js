import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import 'owl.carousel'; // Import Owl Carousel
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import roomRed from '../../images/roomRed.jpg';
import people7 from '../../images/people7.jpg';
import user from '../../images/user.webp';

export default function People() {
  useEffect(() => {
    // Initialize Owl Carousel after the component mounts
    $('.gallery.owl-carousel').owlCarousel({
      items: 3,
      nav: true,
      rewind: true,
    });
  }, []);

  const images = [people7, user];

  return (
    <div id="testimonial" className="testimonial_section section section-overlay" style={{ backgroundImage: `url(${roomRed})` }}>
      <div className="sectionOverlay">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="section-title wow animated fadeInDown">Gallery</h2>
              <div className="seprator wow animated slideInLeft"></div>
              <p className="section-desc wow animated fadeInUp">Our customers' captured moments</p>
            </div>
          </div>
          <div className="gallery owl-carousel">
            {images.map((image, index) => (
              <div className="item" key={index}>
                <img src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
