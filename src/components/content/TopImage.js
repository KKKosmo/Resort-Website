import outsideImage from '../../images/outside.jpg';

export default function TopImage() {
    return (
        <div className='image-container'>
            <img className="topImage slide_image d-block" src={outsideImage} alt="Outside" />
            <div className="slider_overlay">
                <div className="slider_overlay_inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                                <div className="slider_overlay_bg">
                                    <h2 className="big_title animated fadeInDown" style={{ color: '#' }}>
                                        Welcome To
                                    </h2>
                                    <h2 className="big_title animated fadeInDown" style={{ color: 'var(--primary-color)' }}>
                                        J&G Homes Transient
                                    </h2>
                                    <p className="slider_content animated fadeInDown" style={{ color: '#' }}>
                                        The best Lorem Ipsum available, but the majority have suffered alteration.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="topImageFilter">
            </div> */}
        </div>
    );
}