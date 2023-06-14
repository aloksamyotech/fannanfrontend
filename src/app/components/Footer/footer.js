import React from "react";
import Logoimage from './../../../assests/images/assets/logo.png';
import AppImage from './../../../assests/images/assets/app-store.png';
import GoogleImage from './../../../assests/images/assets/google-play.png';
const Footer = ()=>{
    return(
        <>
        <footer id="footer" className="footer" style={{marginBottom: '600px'}}>
        <div className="container">
        <div className="footer__top text-left">
        <div className="row">
        <div className="col-lg-5">
        <div className="footer__top__info">
        <a title="Logo" href="/" className="footer__top__info__logo">
        <img src={Logoimage} alt="fannan"/>
        </a>
        <p className="footer__top__info__desc">Discover amazing things to do everywhere you go.</p>
        <div className="footer__top__info__app">
        <a title="App Store" href="#" className="banner-apps__download__iphone">
        <img src={AppImage} alt="App Store"/>
        </a>
        <a title="Google Play" href="#" className="banner-apps__download__android">
        <img src={GoogleImage} alt="Google Play"/>
        </a>
        </div>
        </div>
        </div>
        <div className="col-lg-2">
        <aside className="footer__top__nav"><h3>Company</h3>
        <ul>
            <li><a title="About Us" href="/about">About Us</a></li>
            <li><a title="Blog" href="07_blog-right-sidebar.html">Blog</a></li>
            <li><a title="Faqs" href="15_faqs.html">Faqs</a></li>
            <li><a title="Contact" href="09_contact-us.html">Contact</a></li>
            </ul>
        </aside>
        </div>
        <div className="col-lg-2">
            <aside className="footer__top__nav">
                <h3>Support</h3>
                <ul>
                    <li>
                        <a title="Get in Touch" href="#">Get in Touch</a>
                    </li>
                    <li>
                        <a title="Help Center" href="#">Help Center</a>
                    </li>
                    <li>
                        <a title="Live chat" href="#">Live chat</a>
                    </li>
                    <li>
                        <a title="How it works" href="#">How it works</a>
                    </li>
                    </ul>
                    </aside>
                    </div>
                    <div className="col-lg-3">
                        <aside className="footer__top__nav footer__top__nav--contact">
                            <h3>Contact Us</h3>
                            <p>Email: <a href="https://fannanhtml.uxper.co/cdn-cgi/l/email-protection" data-cfemail="7b080e0b0b14090f3b1f14161a121555181416" className="__cf_email__">
                                [email&nbsp;protected]</a>
                            </p>
                            <p>Phone: 1 (00) 832 2342</p>
                            <ul>
                                <li className="facebook">
                                    <a title="Facebook" href="#"><i className="la la-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="twitter">
                                    <a title="Twitter" href="#"><i className="la la-twitter"></i>
                                </a>
                                </li>
                                <li className="youtube">
                                    <a title="Youtube" href="#"><i className="la la-youtube"></i>
                                    </a></li><li className="instagram"><a title="Instagram" href="#"><i className="la la-instagram"></i></a></li></ul></aside></div></div></div><div className="footer__bottom"><p className="footer__bottom__copyright">2020 © <a title="Uxper Team" href="#">Fannan.sa</a>. All rights reserved.</p></div></div>
        </footer>
        </>
    )
}
export default Footer;