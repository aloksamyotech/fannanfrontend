import React from "react";
import Header from "../Header/header";
import postimage from './../../../assests/images/post1.jpg';
import ArtSlider from "../artistbannerslide";
import Userimage from "../../../assests/images/user-png.png";
import customvideo from "../../../assests/videos/example-video.mp4";
const Userpage = () => {
    return (
        <>
            <Header />
            <div className="Userpage-wrp bg-white text-left">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="post-name">
                            <h4>Post Name</h4>
                            <div className="post-category">
                                <h6>Post category</h6>
                                <h6>Post category</h6>
                                <h6>Post category</h6>
                            </div>
                        </div>
                        <img src={postimage} />
                        <div className="new-post-content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="sidebar sidebar-shadow sidebar-sticky fixed">
                            <aside className="widget widget-sb-detail post-side">
                                <div className="widget-top text-center">
                                    <div className="flex">
                                        <img src={Userimage} />
                                        <div className="inline-fx">
                                            <h4>Username</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="business-info text-left">
                                <h4 >Business Info</h4>
                                        <ul >
                                            <li ><i  className="las la-envelope"></i><a  href="https://fannanhtml.uxper.co/cdn-cgi/l/email-protection#7e171018113e191b0a19111211501d1113"><span  data-cfemail="ec85828a83ac8b89988b838083c28f8381" className="__cf_email__">[email&nbsp;protected]</span></a></li>
                                            <li ><i  className="la la-phone large"></i><a  href="tel:+31 20-235-2117">+31 20-235-2117</a></li>
                                            <li ><i  className="la la-globe large"></i><a  href="http://www.barfisk.nl/" target="_blank">www.barfisk.nl</a></li>
                                        </ul>
                                        <div  className="button-wrap">
                                            <div  className="button"><a  href="#" className="btn">Call Us</a></div>
                                            <div  className="button"><a  href="#" className="btn btn-border">Send Message</a></div>
                                        </div>
                                 <h4  className="mt-4">Book this Artist</h4>
                                        <form  action="#" method="POST" className="form-underline mt-2">
                                            <div  className="field-select field-date mb-2"><span  className="sl-icon"><i  className="la la-calendar-alt"></i></span><input  type="text" placeholder="Date" className="datepicker ps-4" /><i  className="la la-angle-down"></i></div>
                                            <div  className="field-select has-sub field-time">
                                                <span  className="sl-icon"><i  className="la la-clock"></i></span><input  type="text" placeholder="Time" readonly="" className="ps-4" /><i  className="la la-angle-down"></i>
                                                <div  className="field-sub">
                                                    <ul >
                                                        <li ><a  href="#">12:00 AM</a></li>
                                                        <li ><a  href="#">12:30 AM</a></li>
                                                        <li ><a  href="#">1:00 AM</a></li>
                                                        <li ><a  href="#">1:30 AM</a></li>
                                                        <li ><a  href="#">2:00 AM</a></li>
                                                        <li ><a  href="#">2:30 AM</a></li>
                                                        <li ><a  href="#">3:00 AM</a></li>
                                                        <li ><a  href="#">3:30 AM</a></li>
                                                        <li ><a  href="#">4:00 AM</a></li>
                                                        <li ><a  href="#">4:30 AM</a></li>
                                                        <li ><a  href="#">5:00 AM</a></li>
                                                        <li ><a  href="#">5:30 AM</a></li>
                                                        <li ><a  href="#">6:00 AM</a></li>
                                                        <li ><a  href="#">6:30 AM</a></li>
                                                        <li ><a  href="#">7:00 AM</a></li>
                                                        <li ><a  href="#">7:30 AM</a></li>
                                                        <li ><a  href="#">8:00 AM</a></li>
                                                        <li ><a  href="#">8:30 AM</a></li>
                                                        <li ><a  href="#">9:00 AM</a></li>
                                                        <li ><a  href="#">9:30 AM</a></li>
                                                        <li ><a  href="#">10:00 AM</a></li>
                                                        <li ><a  href="#">10:30 AM</a></li>
                                                        <li ><a  href="#">11:00 AM</a></li>
                                                        <li ><a  href="#">11:30 AM</a></li>
                                                        <li ><a  href="#">12:00 PM</a></li>
                                                        <li ><a  href="#">12:30 PM</a></li>
                                                        <li ><a  href="#">1:00 PM</a></li>
                                                        <li ><a  href="#">1:30 PM</a></li>
                                                        <li ><a  href="#">2:00 PM</a></li>
                                                        <li ><a  href="#">2:30 PM</a></li>
                                                        <li ><a  href="#">3:00 PM</a></li>
                                                        <li ><a  href="#">3:30 PM</a></li>
                                                        <li ><a  href="#">4:00 PM</a></li>
                                                        <li ><a  href="#">4:30 PM</a></li>
                                                        <li ><a  href="#">5:00 PM</a></li>
                                                        <li ><a  href="#">5:30 PM</a></li>
                                                        <li ><a  href="#">6:00 PM</a></li>
                                                        <li ><a  href="#">6:30 PM</a></li>
                                                        <li ><a  href="#">7:00 PM</a></li>
                                                        <li ><a  href="#">7:30 PM</a></li>
                                                        <li ><a  href="#">8:00 PM</a></li>
                                                        <li ><a  href="#">8:30 PM</a></li>
                                                        <li ><a  href="#">9:00 PM</a></li>
                                                        <li ><a  href="#">9:30 PM</a></li>
                                                        <li ><a  href="#">10:00 PM</a></li>
                                                        <li ><a  href="#">10:30 PM</a></li>
                                                        <li ><a  href="#">11:00 PM</a></li>
                                                        <li ><a  href="#">11:30 PM</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <input  type="submit" name="submit" value="Request a book" />
                                        </form> 
                                </div> 
                                {/* <div className="post-new">
                                    <form action="/action_page.php">
                                        <input type="file" id="myFile" name="filename" />
                                        <div className="categroy-select">
                                            <h4>Select Category</h4>
                                            <select>
                                                <option>Category 1</option>
                                                <option>Category 2</option>
                                                <option>Category 3</option>
                                                <option>Category 4</option>
                                                <option>Category 5</option>
                                            </select>
                                        </div>
                                        <div className="txt-area">
                                            <textarea rows="5"></textarea>
                                        </div>
                                        <input type="submit" className="Post-submit" />
                                    </form>
                                </div> */}
                                 
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Userpage;