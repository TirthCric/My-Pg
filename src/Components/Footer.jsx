// Footer.js
import React from "react";
import "../CSS/footer.css"; // Import your CSS file for styling

const Footer = () => {
    return (
        <div className="foot-top">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-sm-6 col-md-3 share-block">
                        <div className="foot-logo mb-3"> <a href="#"><img src="https://bookmypg.co.in/assets/front/images/logo.png" alt="" /></a> </div>
                        <p>My PG is India's Largest growing "PG Rental Network" attempting to provide better Paying Guest Accommodation Via our technology platform. We help find the best PG rental across Major Indian Cities.</p>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3 contactinfo">
                        <h3>CONTACT INFO</h3>
                        <p><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;9-20, Bethel Nagar St, Industrial Estate, Perungudi, Chennai, Tamil Nadu 600096, India</p>
                        <p><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;&nbsp;+91-8939654691</p>
                        <p><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;info@bookmypg.co.in</p>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3 contactinfo">
                        <h3>PAGES</h3>
                        <div className="row">
                            <div className="col-6">
                                <ul>
                                    <li><a href="https://bookmypg.co.in">Home</a></li>
                                    <li><a href="https://bookmypg.co.in/contactus">Contact Us</a></li>
                                    <li><a href="https://bookmypg.co.in/aboutus">About Us</a></li>
                                    <li><a href="https://bookmypg.co.in/termsandconditions">Terms &amp; Condition</a></li>
                                    <li><a href="https://bookmypg.co.in/privacypolicy">Privacy Policy</a></li>
                                    <li><a href="https://bookmypg.co.in/career">Career</a></li>
                                    <li><a href="https://bookmypg.co.in/fundinfo">Funding Information</a></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li><a href="https://bookmypg.co.in/guestpolicy">Guest Policy</a></li>
                                    <li><a href="https://bookmypg.co.in/partnerpolicy">Partner Policy</a></li>
                                    <li><a href="https://bookmypg.co.in/faq">FAQ</a></li>
                                    <li><a href="https://bookmypg.co.in/blog">Blog</a></li>
                                    <li><a href="https://bookmypg.co.in/partnerus">Partner Us</a></li>
                                    <li><a href="https://bookmypg.mojo.page/listing-your-property-in-book-my-pg-plat">List Your Property</a></li>
                                    <li><a href="https://bookmypg.co.in/serviceapartments">Serviced Apartment</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3 followlinks">
                        <h3>FOLLOW US</h3>
                        <ul>
                            <li><a href="https://www.facebook.com/bookmypgonline" target="_blank" className="facebook-icon"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="https://twitter.com/bookmypg" target="_blank" className="twitter-icon"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="https://www.instagram.com/bookmypg_india/" target="_blank" className="instagram-icon"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/book-my-pg" target="_blank" className="linkedin-icon"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="https://www.youtube.com/channel/UCSi-YKPLqacindD9cX_SfRQ" target="_blank" className="youtube-icon"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                            <div className="clearfix"></div>
                        </ul>
                    </div>

                </div>

                <hr />

                <div className="container">
                    <div className="row">

                        <div className="col-12 col-sm-6 col-md-3 contactinfo links">
                            <p className="keywords"> <a href="https://bookmypg.co.in"> PG in Chennai </a> </p>
                            <p className="keywords"> <a href="https://bookmypg.co.in"> PG in Coimbatore </a> </p>
                            <p className="keywords"> <a href="https://bookmypg.co.in"> PG in Bangalore </a> </p>
                            <p className="keywords"> <a href="https://bookmypg.co.in"> PG in Delhi </a> </p>
                            <p className="keywords"> <a href="https://bookmypg.co.in"> PG in Mumbai </a> </p>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 contactinfo links">
                            <p className="keywords"> <a href="https://bookmypg.co.in"> PG Near Me </a> </p>
                            <p className="keywords"> <a href="https://bookmypg.co.in"> Best PG in OMR </a> </p>
                            <p className="keywords"> <a href="https://bookmypg.co.in"> Working Mens Hostel </a> </p>
                            <p className="keywords"> <a href="https://bookmypg.co.in"> PG accommodation for Women in Chennai </a> </p>
                        </div>

                        <div className="col-12 col-sm-6 col-md-5 contactinfo links">
                            <p className="keywords"> <a href="https://bookmypg.co.in"> Paying Guest accommodation in Chennai </a> </p>
                            <p className="keywords"> <a href="https://bookmypg.co.in"> PG near thoraipakkam | Perungudi | Sholinganallur | Karappakkam | Velachery </a> </p>
                            <p className="keywords"> <a href="https://bookmypg.co.in"> Furnished PG apartments for rent </a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
