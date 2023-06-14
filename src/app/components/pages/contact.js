import React from "react";
import CmnBanner from "../core-component/cmnBanner";
const Contact = () =>{
    return(
        <>
        <CmnBanner
        mainhead= "Contact Us"
        subhead = "We want to hear from you"
        />
        <div className="site-content site-contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="contact-text text-left">
                            <h2 >Our Offices</h2>
                            <div  className="contact-box">
                                <h3>London (HQ)</h3>
                                <p>Unit TAP.E, 80 Long Lane, London, SE1 4GT</p>
                                <p >+44 (0)34 5312 3505</p>
                                <a  href="#" title="Get Direction">Get Direction</a>
                            </div>
                            <div  className="contact-box">
                                <h3>Paris</h3>
                                <p>Station F, 2 Parvis Alan Turing, 8742, Paris France</p>
                                <p>+44 (0)34 5312 3505</p>
                                <a  href="#" title="Get Direction">Get Direction</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div  className="contact-form">
                            <h2 >Get in touch with us</h2>
                            <form  action="#" method="POST" className="form-underline">
                                <div  className="field-inline">
                                    <div  className="field-input">
                                        <input  type="text" name="first_name" value="" placeholder="First Name"/>
                                    </div>
                                    <div  className="field-input">
                                        <input  type="text" name="last_name" value="" placeholder="Last Name"/>
                                    </div>
                                </div>
                                <div  className="field-input">
                                    <input  type="email" name="email" value="" placeholder="Email"/>
                                </div>
                                <div  className="field-input">
                                    <input  type="tel" name="tel" value="" placeholder="Phone Number"/>
                                </div>
                                <div  className="field-textarea">
                                    <textarea  name="message" placeholder="Message"></textarea>
                                </div>
                                <div  className="field-submit">
                                    <input  type="submit" value="Send Message" className="btn"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;