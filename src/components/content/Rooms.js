export default function Rooms() {
    return (


        <div id="room" className="room_section section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="section-title wow animated fadeInDown">
                            Our <span>Rooms</span>
                        </h2>
                        <div className="seprator wow animated slideInLeft"></div>
                        <p className="section-desc wow animated fadeInUp">
                            Lorem ipsum dolor sit ame sed do eiusmod tempor incididunt ut labore et dolore
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-6 wow animated fadeInUp">
                        <div className="card-room">
                            <div className="room_thumbnial">
                                <img
                                    src="http://localhost/wordpress/wp-content/uploads/2023/10/roomG.jpg"
                                    className="attachment-full size-full wp-post-image"
                                    alt=""
                                    loading="lazy"
                                />
                                <div className="room_overlay">
                                    <div className="room_overlay_inner"></div>
                                </div>
                            </div>

                            <div className="room_detail_info text-left">
                                <span></span>
                                <span></span>
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
                                    <p>Description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-6 wow animated fadeInUp">
                        <div className="card-room">
                            <div className="room_thumbnial">
                                <img
                                    src="http://localhost/wordpress/wp-content/uploads/2023/10/roomJ.jpg"
                                    className="attachment-full size-full wp-post-image"
                                    alt=""
                                    loading="lazy"
                                />
                                <div className="room_overlay">
                                    <div className="room_overlay_inner"></div>
                                </div>
                            </div>

                            <div className="room_detail_info text-left">
                                <span></span>
                                <span></span>
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
                                    <p>Description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





    );
}