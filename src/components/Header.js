function Header() {
  return (
    <div className="header">
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-6 col-12">
                        <ul className="header-social">
                            <li className="facebook"><a href=""><i className="fa fa-facebook"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12">
                        <ul className="header-info">
                            <li><a href="tel:%20+33%20555%2066%20777"><i className="fa fa-phone"></i> 09090909</a></li>
                            <li><a href="mailto:info@example.com"><i className="fa fa-envelope"></i> email@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="nav-spacer"></div>
        <div className="clearfix"></div>
    </div>
  );
}

export default Header;
