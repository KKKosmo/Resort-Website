import roomG from '../../images/roomG.jpg';
import roomJ from '../../images/roomJraw.jpg';
import attic from '../../images/attic.jpg';
import kubo from '../../images/roomIDK.jpg';
import roomF from '../../images/roomF.jpg';

export default function Rooms() {
    return (
        <div className="room_section section" style={{
            background: 'none',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center 184.816px'
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="section-title wow fadeInDown animated" style={{
                            visibility: 'visible',
                            animationName: 'fadeInDown'
                        }}>
                            Our <span>Rooms</span>
                        </h2>
                        <div className="seprator wow slideInLeft animated" style={{
                            visibility: 'visible',
                            animationName: 'slideInLeft'
                        }}></div>
                        <p className="section-desc wow fadeInUp animated" style={{
                            visibility: 'visible',
                            animationName: 'fadeInUp'
                        }}>
                            Lorem ipsum dolor sit ame sed do eiusmod tempor incididunt ut labore et dolore
                        </p>
                    </div>
                </div>
                <div className="row">


                    <div className="col-sm-6 col-lg-6 wow fadeInUp animated" style={{
                        visibility: 'visible',
                        animationName: 'fadeInUp'
                    }}>
                        <div className="card-room">
                            <div className="room_thumbnial">
                                <img src={roomJ} className="attachment-full size-full wp-post-image" alt="" loading="lazy" style={{height: "80%"}}/>
                                <div className="room_overlay">
                                    <div className="room_overlay_inner"></div>
                                </div>
                            </div>
                            <div className="room-content text-center">
                                <div className="room_rate">
                                    <i className="fa fa-star star_yellow"></i>
                                    <i className="fa fa-star star_yellow"></i>
                                    <i className="fa fa-star star_yellow"></i>
                                    <i className="fa fa-star star_yellow"></i>
                                    <i className="fa fa-star star_yellow"></i>
                                </div>
                                <h4 className="room_title">Room J</h4>
                                <div className="room_desc">
                                    <p>Description X PAX</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6 wow fadeInUp animated" style={{
                        visibility: 'visible',
                        animationName: 'fadeInUp'
                    }}>
                        <div className="card-room">
                            <div className="room_thumbnial">
                                <img src={roomG} className="attachment-full size-full wp-post-image" alt="" loading="lazy" style={{height: "80%"}}/>
                                <div className="room_overlay">
                                    <div className="room_overlay_inner"></div>
                                </div>
                            </div>
                            <div className="room-content text-center">
                                <div className="room_rate">
                                    <i className="fa fa-star star_yellow"></i>
                                    <i className="fa fa-star star_yellow"></i>
                                    <i className="fa fa-star star_yellow"></i>
                                    <i className="fa fa-star star_yellow"></i>
                                    <i className="fa fa-star star_yellow"></i>
                                </div>
                                <h4 className="room_title">Room G</h4>
                                <div className="room_desc">
                                    <p>X PAX</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6 wow fadeInUp animated" style={{
                        visibility: 'visible',
                        animationName: 'fadeInUp'
                    }}>
                        <div className="card-room">
                            <div className="room_thumbnial">
                                <img src={attic} className="attachment-full size-full wp-post-image" alt="" loading="lazy" style={{height: "80%"}}/>
                                <div className="room_overlay">
                                    <div className="room_overlay_inner"></div>
                                </div>
                            </div>
                            <div className="room-content text-center">
                                <div className="room_rate">
                                    <i className="fa fa-star star_yellow"></i>
                                    <i className="fa fa-star star_yellow"></i>
                                    <i className="fa fa-star star_yellow"></i>
                                    <i className="fa fa-star star_yellow"></i>
                                    <i className="fa fa-star star_yellow"></i>
                                </div>
                                <h4 className="room_title">Attic</h4>
                                <div className="room_desc">
                                    <p>X PAX</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6 wow fadeInUp animated" style={{
                        visibility: 'visible',
                        animationName: 'fadeInUp'
                    }}>
                        <div className="card-room">
                            <div className="room_thumbnial">
                                <img src={kubo} className="attachment-full size-full wp-post-image" alt="" loading="lazy" style={{height: "80%"}}/>
                                <div className="room_overlay">
                                    <div className="room_overlay_inner"></div>
                                </div>
                            </div>
                            <div className="room-content text-center">
                                <div className="room_rate">
                                    <i className="fa fa-star star_yellow"></i>
                                    <i className="fa fa-star star_yellow"></i>
                                    <i className="fa fa-star star_yellow"></i>
                                    <i className="fa fa-star star_yellow"></i>
                                    <i className="fa fa-star star_yellow"></i>
                                </div>
                                <h4 className="room_title">Kubo 1/2</h4>
                                <div className="room_desc">
                                    <p>X PAX</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6 wow fadeInUp animated" style={{
                        visibility: 'visible',
                        animationName: 'fadeInUp'
                    }}>
                        <div className="card-room">
                            <div className="room_thumbnial">
                                <img src={roomF} className="attachment-full size-full wp-post-image" alt="" loading="lazy" style={{height: "80%"}}/>
                                <div className="room_overlay">
                                    <div className="room_overlay_inner"></div>
                                </div>
                            </div>
                            <div className="room-content text-center">
                                <div className="room_rate">
                                    <i className="fa fa-star star_yellow"></i>
                                    <i className="fa fa-star star_yellow"></i>
                                    <i className="fa fa-star star_yellow"></i>
                                    <i className="fa fa-star star_yellow"></i>
                                    <i className="fa fa-star star_yellow"></i>
                                </div>
                                <h4 className="room_title">Room F</h4>
                                <div className="room_desc">
                                    <p>X PAX</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Repeat similar code for other room sections */}
                </div>
            </div>
        </div>

    );
}