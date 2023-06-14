import React from "react";
import CmnBanner from "../core-component/cmnBanner";
import Header from "../Header/header";
const contact = () => {
    return (
    <>
            <Header />
            <CmnBanner
                mainhead="Contact Us"
            />
            <section className="contactus-wrp bg-white">
                 <div className="container">
                    <div className="row new-contact-rw">
                        <div className="col-md-6 contact-blck-wrp">
                            <div className="contact-block">
                                <div className="cont-img">
                                <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="main-head">
                                    <h3>OUR MAIN OFFICE</h3>
                                    <p>SoHo 94 Broadway St New York,NY 1001</p>
                                </div>
                            </div>
                            <div className="contact-block">
                                <div className="cont-img">
                                <i class="fa-solid fa-phone"></i>
                                </div>
                                <div className="main-head">
                                    <h3>PHONE NUMBER</h3>
                                    <p>234-9876-5400<br></br>888-0123-4567 (Toll Free)</p>
                                </div>
                            </div>
                            <div className="contact-block">
                                <div className="cont-img">
                                <i class="fa-solid fa-fax"></i>
                                </div>
                                <div className="main-head">
                                    <h3>FAX</h3>
                                    <p>1-234-567-8900</p>
                                </div>
                            </div>
                            <div className="contact-block">
                                <div className="cont-img">
                                  <i class="fa-solid fa-envelope"></i>
                                </div>
                                <div className="main-head">
                                    <h3>EMAIL</h3>
                                    <p>SoHo 94 Broadway St New York,NY 1001</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 contactsec-wrp">
                            <h2>Contact Us</h2>
                            <form>
                                <div className="form-grp">
                                  <input type='text' placeholder="Enter Your Name" className="input-txt"/>
                                </div>
                                <div className="form-grp">
                                  <input type='text' placeholder="Enter Your Name" className="input-txt"/>
                                </div>
                                <div className="form-grp">
                                  <textarea rows="4" cols="50"></textarea>
                                </div>
                                <button type="submit" className="contact-btn">Submit</button>
                            </form>

                        </div>
                    </div>
                 </div>
            </section>
                </>
                )
}
                export default contact;