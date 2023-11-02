import user from '../../images/user.webp';

export default function Staff() {
    return (

        <div id="team" className="team_section section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="section-title wow animated fadeInDown">
                            Our <span>Staff</span>
                        </h2>
                        <div className="seprator wow animated slideInLeft"></div>
                        <p className="section-desc wow animated fadeInUp">
                            Our best staff team members
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-sm-6 wow animated rollIn">
                        <div className="team">
                            <div className="team_thumbnial">
                                <img
                                    src={user}
                                    alt="Roy"
                                />
                                <div className="team_overlay">
                                    <div className="team_overlay_inner">
                                        {/* <a className="team_social_icons google-plus" href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a> */}
                                        <a className="team_social_icons linkedin" href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="team_body text-center">
                                <h3>Roy</h3>
                                <div className="team_content">
                                    <p className="team_designation">Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 wow animated rollIn">
                        <div className="team">
                            <div className="team_thumbnial">
                                <img
                                    src={user}
                                    alt="Roy"
                                />
                                <div className="team_overlay">
                                    <div className="team_overlay_inner">
                                        <a className="team_social_icons linkedin" href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="team_body text-center">
                                <h3>Roy</h3>
                                <div className="team_content">
                                    <p className="team_designation">Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 wow animated rollIn">
                        <div className="team">
                            <div className="team_thumbnial">
                                <img
                                    src={user}
                                    alt="Roy"
                                />
                                <div className="team_overlay">
                                    <div className="team_overlay_inner">
                                        <a className="team_social_icons linkedin" href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="team_body text-center">
                                <h3>Roy</h3>
                                <div className="team_content">
                                    <p className="team_designation">Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Repeat the above code for each team member */}
                </div>
            </div>
        </div>



    );
}