function Header() {
  return (
    <div class="header">
        <div class="header-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-sm-6 col-12">
                        <ul class="header-social">
                            <li class="facebook"><a href=""><i class="fa fa-facebook"></i></a></li>
                        </ul>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-12">
                        <ul class="header-info">
                            <li><a href="tel:%20+33%20555%2066%20777"><i class="fa fa-phone"></i> 09090909</a></li>
                            <li><a href="mailto:info@example.com"><i class="fa fa-envelope"></i> email@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-spacer"></div>
        <div class="clearfix"></div>
    </div>
  );
}

export default Header;
