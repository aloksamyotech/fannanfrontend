import React from "react";
import postimage from './../../../assests/images/post1.jpg';
import Artistimage from './../../../assests/images/avatars/male-4.jpg';
import artistimage from './../../../assests/images/avatars/female-4.jpg';
import rewardimage from './../../../assests/images/Rewards.png';
import videoimage from './../../../assests/images/buildingimage.jpg';
import DashboradMenu from './../DashboardMenu';
import UsHeader from "../Header/Userheader";
import Userimage from "../../../assests/images/user-png.png";
import customvideo from "../../../assests/videos/example-video.mp4";
import { Link } from "react-router-dom";
const usPost = () => {
    return (
        <>
            <UsHeader />
            <DashboradMenu />
            <div className="post-wrp bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 text-left">
                            <div className="col-md-10">
                                <div className="postidentity">
                                    <div className="identityimage">
                                        <img src={Userimage} />
                                    </div>
                                    <div className="identityname">
                                        <div className="titlepost"><Link to="/userpage"><h3>POST</h3></Link></div>
                                        <div className="post-category">
                                            <h6>Post category</h6>
                                            <h6>Post category</h6>
                                            <h6>Post category</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-image">
                                    <img src={postimage} />
                                </div>
                                <div className="post-discription">
                                    <div className="post-top">
                                        <a href="#"><i className="fa-solid fa-heart"></i></a>
                                        <a href="#"><i className="fa-solid fa-comment"></i></a>
                                        <a href="#"><i className="fas fa-share"></i></a>
                                        <h6>23/12/2022</h6>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="postidentity">
                                    <div className="identityimage">
                                        <img src={Userimage} />
                                    </div>
                                    <div className="identityname">
                                        <div className="titlepost"><h3>POST</h3></div>
                                        <div className="post-category">
                                            <h6>Post category</h6>
                                            <h6>Post category</h6>
                                            <h6>Post category</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-image">
                                    <img src={postimage} />
                                </div>
                                <div className="post-discription">
                                    <div className="post-top">
                                        <a href="#"><i className="fa-solid fa-heart"></i></a>
                                        <a href="#"><i className="fa-solid fa-comment"></i></a>
                                        <a href="#"><i className="fas fa-share"></i></a>
                                        <h6>23/12/2022</h6>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="post-image">
                                    {/* <img src={postimage} /> */}
                                    <h3>Post text will be here.</h3>
                                </div>
                                <div className="post-discription">
                                    <div className="post-top">
                                        <a href="#"><i className="fa-solid fa-heart"></i></a>
                                        <a href="#"><i className="fa-solid fa-comment"></i></a>
                                        <a href="#"><i className="fas fa-share"></i></a>
                                        <h6>23/12/2022</h6>
                                    </div>
                                    <div className="post-category">
                                        <h6>Post category</h6>
                                        <h6>Post category</h6>
                                        <h6>Post category</h6>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="post-image">
                                    {/* <img src={postimage} /> */}
                                    <video autoPlay loop width="100%">
                                        <source src={customvideo} type="video/mp4"></source>
                                    </video>
                                </div>
                                <div className="post-discription">
                                    <div className="post-top">
                                        <a href="#"><i className="fa-solid fa-heart"></i></a>
                                        <a href="#"><i className="fa-solid fa-comment"></i></a>
                                        <a href="#"><i className="fas fa-share"></i></a>
                                        <h6>23/12/2022</h6>
                                    </div>
                                    <div className="post-category">
                                        <h6>Post category</h6>
                                        <h6>Post category</h6>
                                        <h6>Post category</h6>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="post-image">
                                    {/* <img src={postimage} /> */}
                                    <video autoPlay loop width="100%">
                                        <source src={customvideo} type="video/mp4"></source>
                                    </video>
                                </div>
                                <div className="post-discription">
                                    <div className="post-top">
                                        <a href="#"><i className="fa-solid fa-heart"></i></a>
                                        <a href="#"><i className="fa-solid fa-comment"></i></a>
                                        <a href="#"><i className="fas fa-share"></i></a>
                                        <h6>23/12/2022</h6>
                                    </div>
                                    <div className="post-category">
                                        <h6>Post category</h6>
                                        <h6>Post category</h6>
                                        <h6>Post category</h6>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                </div>
                            </div>
                            <div className="morepost-btn text-center">
                                <button>More Post</button>
                            </div>
                        </div>



                        <div className="col-lg-4">
                            <div className="sidebar sidebar-shadow sidebar-sticky fixed">
                                <aside className="widget widget-sb-detail post-side">
                                    <div className="widget-top">
                                        <div className="flex">
                                            <img src={Userimage} />
                                            <div className="inline-fx">
                                                <h4>Username</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="business-info text-left">
                                        <h3>Add New Post</h3>
                                    </div>
                                    <div className="post-new">
                                        <form action="/action_page.php">
                                            <input type="file" id="myFile" name="filename"/>
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
                                                <input type="submit" className="Post-submit"/>
                                        </form>
                                    </div>
                                            {/* <h4 >Business Info</h4>
                                        <ul >
                                            <li ><i  className="las la-envelope"></i><a  href="https://fannanhtml.uxper.co/cdn-cgi/l/email-protection#7e171018113e191b0a19111211501d1113"><span  data-cfemail="ec85828a83ac8b89988b838083c28f8381" className="__cf_email__">[email&nbsp;protected]</span></a></li>
                                            <li ><i  className="la la-phone large"></i><a  href="tel:+31 20-235-2117">+31 20-235-2117</a></li>
                                            <li ><i  className="la la-globe large"></i><a  href="http://www.barfisk.nl/" target="_blank">www.barfisk.nl</a></li>
                                        </ul>
                                        <div  className="button-wrap">
                                            <div  className="button"><a  href="#" className="btn">Call Us</a></div>
                                            <div  className="button"><a  href="#" className="btn btn-border">Send Message</a></div>
                                        </div> */}
                                            {/* <h4  className="mt-4">Book this Artist</h4>
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
                                        </form> */}
                                        </aside>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            )
}
            export default usPost;