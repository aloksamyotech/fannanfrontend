import React, { useEffect, useState } from "react";
import Header from "../Header/header";
import postimage from "./../../../assests/images/image-1.png";
import ArtSlider from "../artistbannerslide";
import Userimage from "../../../assests/images/user-png.png";
import customvideo from "../../../assests/videos/example-video.mp4";
import UsHeader from "../Header/Userheader";
import Lightbox from "react-image-lightbox";
import Ggallery from "./../gallery";
import Artistimage from "./../../../assests/images/avatars/male-4.jpg";
import artistimage from "./../../../assests/images/avatars/female-4.jpg";
import rewardimage from "./../../../assests/images/Rewards.png";
import videoimage from "./../../../assests/images/buildingimage.jpg";
import VideoLight from "./../videof";
import Post from "./../Post";

import { Link, useParams } from "react-router-dom";
import axios from "axios";
import webUrl from "../core-component/webUrl";
import { FaStar } from "react-icons/fa";
const Userpage = () => {
  const [data, setData] = useState([]);
  const { userid } = useParams();
  console.log(userid, "id id here...");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [getreview, setGetreview] = useState([]);

  const userApi = async () => {
    const response = await axios.get(`${webUrl.User_get_Details}${userid}`);
    console.log(response.data.data[0], "response data");
    setData(response.data.data[0]);
  };

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const reviewApi = async (event) => {
    event.preventDefault();
    const data = {
      userid: userid,
      rate: rating,
      review: review,
    };
    const response = await axios.post(webUrl.Add_Review, data);
    console.log(response, "review data");
    setRating(0);
    setReview("");
  };

  const getreviewApi = async () => {
    const response = await axios.get(`${webUrl.Get_Review}${userid}`);
    console.log(response.data.data, "review response");
    setGetreview(response.data.data);
  };

  useEffect(() => {
    userApi();
    getreviewApi();
  }, []);
  return (
    <>
      <UsHeader />
      <ArtSlider />
      <div className="Artist-name-wrp bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 text-left">
              <div className="place__left">
                <div className="place__box place__box--npd">
                  <h1>
                    {data.firstname} {data.lastname}
                  </h1>
                  <div className="place__meta">
                    <div className="place__reviews reviews">
                      <span className="place__reviews__number reviews__number">
                        {" "}
                        4.2 <i className="la la-star"></i>
                      </span>
                      <span className="place__places-item__count reviews_count">
                        (3 reviews)
                      </span>
                    </div>
                    <div className="place__currency">₹{' '+ data.base_price}</div>
                    <div className="place__category">
                      <Link title="Restaurant" href="#">
                        {/* {data.category} */}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="place__right">
                  <div className="folow-section">
                    <div className="follower-block">
                      <h4>Followers</h4>
                      <h3>113</h3>
                    </div>
                    <div className="posts-block">
                      <h4>Posts</h4>
                      <h3>56</h3>
                    </div>
                  </div>
                </div>
                <div className="place__box place__box-overview">
                  <h3>Overview</h3>
                  <div className="place__desc">
                    The Grade I-listed British Library is the largest national
                    library in the world with over 150 million catalogued items
                    held inside, some dating back as far as 2000 BC. It’s home
                    to 15th-century editions of Chaucer’s Canterbury Tales,
                    original song sheets penned by the Beatles and the
                    memorandum written by Lord Nelson two days before the Battle
                    of Trafalgar. It also receives a copy of every single book
                    published in the UK and Ireland. The Grade I-listed British
                    Library is the largest national library in the world with
                    over 150 million catalogued items held inside, some dating
                    back as far as 2000 BC. It’s home to 15th-century editions
                    of Chaucer’s Canterbury Tales, original song sheets penned
                    by the Beatles and the memorandum written by Lord Nelson two
                    days before the Battle of Trafalgar. It also receives a copy
                    of every single book published in the UK and Ireland.
                  </div>
                  <Link title="Show More" className="show-more">
                    Show more
                  </Link>
                </div>
                <div className="place__box place__box-map">
                  <h3 className="place__title--additional"> Other Extras </h3>
                  <div className="menu-tab">
                    <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Gallery
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Rewards
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          Videos
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-product"
                          type="button"
                          role="tab"
                          aria-controls="pills-product"
                          aria-selected="false"
                        >
                          Product
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-services"
                          type="button"
                          role="tab"
                          aria-controls="pills-services"
                          aria-selected="false"
                        >
                          Services
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-post-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-post"
                          type="button"
                          role="tab"
                          aria-controls="pills-post"
                          aria-selected="false"
                        >
                          Post
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        tabindex="0"
                      >
                        <Ggallery />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                        tabindex="0"
                      >
                        <div className="rewards-wrp">
                          <div className="rewards-image">
                            <img src={rewardimage} alt="RewardImage" />
                          </div>
                          <div className="rewards-content">
                            <h2>Rewards Program</h2>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </p>
                            <Link href="#" className="Redeem-btn">
                              Redeem
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                        tabindex="0"
                      >
                        <div className="video-wrp">
                          <VideoLight />
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-product"
                        role="tabpanel"
                        aria-labelledby="pills-product-tab"
                        tabindex="0"
                      >
                        <div className="productwrp">
                          <div className="row">
                            <div className="col-md-4">
                              <img src={videoimage} alt="videoimage" />
                            </div>
                            <div className="col-md-8 product-content">
                              <h2>Sample Product</h2>
                              <h5>$9.95</h5>
                              <p>
                                Sample Text. Loreum ipsum dolor sit amet,
                                consectuer adispicing elit nullam nunc justo
                                sagistis suscipt ultrices.
                              </p>
                              <Link className="Add-to-cart-btn" href="#">
                                ADD TO CART
                              </Link>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-4">
                              <img src={videoimage} alt="video-list" />
                            </div>
                            <div className="col-md-8 product-content">
                              <h2>Sample Product</h2>
                              <h5>$9.95</h5>
                              <p>
                                Sample Text. Loreum ipsum dolor sit amet,
                                consectuer adispicing elit nullam nunc justo
                                sagistis suscipt ultrices.
                              </p>
                              <Link className="Add-to-cart-btn" href="#">
                                ADD TO CART
                              </Link>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-4">
                              <img src={videoimage} alt="videoImage" />
                            </div>
                            <div className="col-md-8 product-content">
                              <h2>Sample Product</h2>
                              <h5>$9.95</h5>
                              <p>
                                Sample Text. Loreum ipsum dolor sit amet,
                                consectuer adispicing elit nullam nunc justo
                                sagistis suscipt ultrices.
                              </p>
                              <Link className="Add-to-cart-btn" href="#">
                                ADD TO CART
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-services"
                        role="tabpanel"
                        aria-labelledby="pills-services-tab"
                        tabindex="0"
                      >
                        <div className="servicewrp">
                          <div className="service-block tab">
                            <h5>Investment</h5>
                            <div className="post-category">
                              <h6>Post category</h6>
                              <h6>Post category</h6>
                              <h6>Post category</h6>
                            </div>
                            <p>
                              Sample Text. CLick to select the text Element.
                            </p>
                          </div>
                          <div className="service-block tab">
                            <h5>Investment</h5>
                            <div className="post-category">
                              <h6>Post category</h6>
                              <h6>Post category</h6>
                              <h6>Post category</h6>
                            </div>
                            <p>
                              Sample Text. CLick to select the text Element.
                            </p>
                          </div>
                          <div className="service-block tab">
                            <h5>Investment</h5>
                            <div className="post-category">
                              <h6>Post category</h6>
                              <h6>Post category</h6>
                              <h6>Post category</h6>
                            </div>
                            <p>
                              Sample Text. CLick to select the text Element.
                            </p>
                          </div>
                          <div className="service-block tab">
                            <h5>Investment</h5>
                            <div className="post-category">
                              <h6>Post category</h6>
                              <h6>Post category</h6>
                              <h6>Post category</h6>
                            </div>
                            <p>
                              Sample Text. CLick to select the text Element.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-post"
                        role="tabpanel"
                        aria-labelledby="pills-post-tab"
                        tabindex="0"
                      >
                        <Post id={userid} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="place__box place__box--reviews">
                  <h3 className="place__title--reviews">
                    {" "}
                    Review (3){" "}
                    <span className="place__reviews__number">
                      {" "}
                      4.2 <i className="la la-star"></i>
                    </span>
                  </h3>
                  {/* <p>Selected Rating: {rating}</p> */}
                  {getreview &&
                    getreview.map((item) => {
                      return (
                        <ul className="place__comments">
                          <li>
                            <div className="place__author">
                              <div className="place__author__avatar">
                                <Link title="Sebastian">
                                  <img src={Artistimage} alt="" />
                                </Link>
                              </div>
                              <div className="place__author__info">
                                <Link title="Sebastian">Sebastian</Link>
                                {item.rating}
                                <span className="time">{item.date}</span>
                              </div>
                            </div>
                            <div className="place__comments__content">
                              <p>{item.review}</p>
                            </div>
                          </li>
                        </ul>
                      );
                    })}
                  <div className="review-form">
                    <h3>Write a review</h3>
                    <form onSubmit={reviewApi}>
                      <div className="rate">
                        <span>Rate This User</span>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star}
                            className={star <= rating ? "star active" : "star"}
                            onClick={() => handleStarClick(star)}
                          />
                        ))}
                      </div>
                      <div className="field-textarea">
                        <img
                          src={Artistimage}
                          alt=""
                          className="author-avatar"
                        />
                        <textarea
                          name="review_text"
                          value={review}
                          onChange={handleReviewChange}
                          placeholder="Write a review"
                        ></textarea>
                      </div>
                      <div className="field-submit">
                        <button
                          type="submit"
                          value="Submit"
                          name="submit"
                          className="btn"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="place__box">
                  <h3>FAQ's</h3>
                  <div
                    className="accordion faqs-accordion"
                    id="accordionExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          What are the ingredients or taste profile for the
                          signature sauce?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          We are currently offering free shipping throughout
                          Northern California on all orders over $80. Peninsula
                          to San Francisco can receive next day delivery.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          How far does free delivery extend to? To San
                          Francisco?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          We are currently offering free shipping throughout
                          Northern California on all orders over $80. Peninsula
                          to San Francisco can receive next day delivery
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          How far does free delivery extend to? To San
                          Francisco?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          We are currently offering free shipping throughout
                          Northern California on all orders over $80. Peninsula
                          to San Francisco can receive next day delivery.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar sidebar-shadow sidebar-sticky fixed">
                <aside className="widget widget-sb-detail">
                  <div className="widget-top">
                    <div className="flex">
                      <img
                        src={artistimage}
                        alt="Author"
                        style={{ width: "50%", height: "50%", margin: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="business-info text-left">
                    <h4>Business Info</h4>
                    <ul>
                      <li>
                        <i className="las la-envelope"></i>
                        <a href="https://fannanhtml.uxper.co/cdn-cgi/l/email-protection#7e171018113e191b0a19111211501d1113">
                          <span
                            data-cfemail="ec85828a83ac8b89988b838083c28f8381"
                            className="__cf_email__"
                          >
<<<<<<< HEAD
                            {data.email}
                          </span>
                        </a>
                      </li>
                      <li>
                        <i className="la la-phone large"></i>
                        <a href={data.phone}>{data.phone}</a>
                      </li>
                      <li>
                        <i className="la la-globe large"></i>
                        <a href="http://www.barfisk.nl/" target="_blank">
                          www.barfisk.nl
=======
                          {data.email ? data.email : "demo@gmail.com"}
                          </span>
                        </a>
                      </li>
                      <li _ngcontent-pog-c20="">
                        <i
                          _ngcontent-pog-c20=""
                          className="la la-phone large"
                        ></i>
                        <a _ngcontent-pog-c20="" href="tel:+31 20-235-2117">
                          {data.phone ? data.phone : "+31 20-235-2117"}
                        </a>
                      </li>
                      <li _ngcontent-pog-c20="">
                        <i
                          _ngcontent-pog-c20=""
                          className="la la-globe large"
                        ></i>
                        <a
                          _ngcontent-pog-c20=""
                          href="http://www.barfisk.nl/"
                          target="_blank"
                        >
                          {data.weburl ? data.webUrl : "www.khojiapp.in"}
>>>>>>> b263ae4d36077af4e89bb982b0a28ec776ff1ee0
                        </a>
                      </li>
                    </ul>
                    <div className="button-wrap">
                      <div className="button">
                        <Link className="btn">Call Us</Link>
                      </div>
                      <div className="button">
                        <Link className="btn btn-border">Send Enquiry</Link>
                      </div>
                    </div>
                    <h4 className="mt-4">Book this Artist</h4>
                    <form
                      action="#"
                      method="POST"
                      className="form-underline mt-2"
                    >
                      <div className="field-select field-date mb-2">
                        <span className="sl-icon">
                          <i className="la la-calendar-alt"></i>
                        </span>
                        <input
                          type="text"
                          placeholder="Date"
                          className="datepicker ps-4"
                        />
                        <i className="la la-angle-down"></i>
                      </div>
                      <div className="field-select has-sub field-time">
                        <span className="sl-icon">
                          <i className="la la-clock"></i>
                        </span>
                        <input
                          type="text"
                          placeholder="Time"
                          readonly=""
                          className="ps-4"
                        />
                        <i className="la la-angle-down"></i>
                        <div className="field-sub">
                          <ul>
                            <li>
                              <a href="#">12:00 AM</a>
                            </li>
                            <li>
                              <a href="#">12:30 AM</a>
                            </li>
                            <li>
                              <a href="#">1:00 AM</a>
                            </li>
                            <li>
                              <a href="#">1:30 AM</a>
                            </li>
                            <li>
                              <a href="#">2:00 AM</a>
                            </li>
                            <li>
                              <a href="#">2:30 AM</a>
                            </li>
                            <li>
                              <a href="#">3:00 AM</a>
                            </li>
                            <li>
                              <a href="#">3:30 AM</a>
                            </li>
                            <li>
                              <a href="#">4:00 AM</a>
                            </li>
                            <li>
                              <a href="#">4:30 AM</a>
                            </li>
                            <li>
                              <a href="#">5:00 AM</a>
                            </li>
                            <li>
                              <a href="#">5:30 AM</a>
                            </li>
                            <li>
                              <a href="#">6:00 AM</a>
                            </li>
                            <li>
                              <a href="#">6:30 AM</a>
                            </li>
                            <li>
                              <a href="#">7:00 AM</a>
                            </li>
                            <li>
                              <a href="#">7:30 AM</a>
                            </li>
                            <li>
                              <a href="#">8:00 AM</a>
                            </li>
                            <li>
                              <a href="#">8:30 AM</a>
                            </li>
                            <li>
                              <a href="#">9:00 AM</a>
                            </li>
                            <li>
                              <a href="#">9:30 AM</a>
                            </li>
                            <li>
                              <a href="#">10:00 AM</a>
                            </li>
                            <li>
                              <a href="#">10:30 AM</a>
                            </li>
                            <li>
                              <a href="#">11:00 AM</a>
                            </li>
                            <li>
                              <a href="#">11:30 AM</a>
                            </li>
                            <li>
                              <a href="#">12:00 PM</a>
                            </li>
                            <li>
                              <a href="#">12:30 PM</a>
                            </li>
                            <li>
                              <a href="#">1:00 PM</a>
                            </li>
                            <li>
                              <a href="#">1:30 PM</a>
                            </li>
                            <li>
                              <a href="#">2:00 PM</a>
                            </li>
                            <li>
                              <a href="#">2:30 PM</a>
                            </li>
                            <li>
                              <a href="#">3:00 PM</a>
                            </li>
                            <li>
                              <a href="#">3:30 PM</a>
                            </li>
                            <li>
                              <a href="#">4:00 PM</a>
                            </li>
                            <li>
                              <a href="#">4:30 PM</a>
                            </li>
                            <li>
                              <a href="#">5:00 PM</a>
                            </li>
                            <li>
                              <a href="#">5:30 PM</a>
                            </li>
                            <li>
                              <a href="#">6:00 PM</a>
                            </li>
                            <li>
                              <a href="#">6:30 PM</a>
                            </li>
                            <li>
                              <a href="#">7:00 PM</a>
                            </li>
                            <li>
                              <a href="#">7:30 PM</a>
                            </li>
                            <li>
                              <a href="#">8:00 PM</a>
                            </li>
                            <li>
                              <a href="#">8:30 PM</a>
                            </li>
                            <li>
                              <a href="#">9:00 PM</a>
                            </li>
                            <li>
                              <a href="#">9:30 PM</a>
                            </li>
                            <li>
                              <a href="#">10:00 PM</a>
                            </li>
                            <li>
                              <a href="#">10:30 PM</a>
                            </li>
                            <li>
                              <a href="#">11:00 PM</a>
                            </li>
                            <li>
                              <a href="#">11:30 PM</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <input
                        type="submit"
                        name="submit"
                        value="Request a book"
                      />
                    </form>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <UsHeader />
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
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
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
                    <h4>Business Info</h4>
                    <ul>
                      <li>
                        <i className="las la-envelope"></i>
                        <a href="https://fannanhtml.uxper.co/cdn-cgi/l/email-protection#7e171018113e191b0a19111211501d1113">
                          <span
                            data-cfemail="ec85828a83ac8b89988b838083c28f8381"
                            className="__cf_email__"
                          >
                            [email&nbsp;protected]
                          </span>
                        </a>
                      </li>
                      <li>
                        <i className="la la-phone large"></i>
                        <a href="tel:+31 20-235-2117">+31 20-235-2117</a>
                      </li>
                      <li>
                        <i className="la la-globe large"></i>
                        <a href="http://www.barfisk.nl/" target="_blank">
                          www.barfisk.nl
                        </a>
                      </li>
                    </ul>
                    <div className="button-wrap">
                      <div className="button">
                        <a href="#" className="btn">
                          Call Us
                        </a>
                      </div>
                      <div className="button">
                        <a href="#" className="btn btn-border">
                          Send Message
                        </a>
                      </div>
                    </div>
                    <h4 className="mt-4">Book this Artist</h4>
                    <form
                      action="#"
                      method="POST"
                      className="form-underline mt-2"
                    >
                      <div className="field-select field-date mb-2">
                        <span className="sl-icon">
                          <i className="la la-calendar-alt"></i>
                        </span>
                        <input
                          type="text"
                          placeholder="Date"
                          className="datepicker ps-4"
                        />
                        <i className="la la-angle-down"></i>
                      </div>
                      <div className="field-select has-sub field-time">
                        <span className="sl-icon">
                          <i className="la la-clock"></i>
                        </span>
                        <input
                          type="text"
                          placeholder="Time"
                          readonly=""
                          className="ps-4"
                        />
                        <i className="la la-angle-down"></i>
                        <div className="field-sub">
                          <ul>
                            <li>
                              <a href="#">12:00 AM</a>
                            </li>
                            <li>
                              <a href="#">12:30 AM</a>
                            </li>
                            <li>
                              <a href="#">1:00 AM</a>
                            </li>
                            <li>
                              <a href="#">1:30 AM</a>
                            </li>
                            <li>
                              <a href="#">2:00 AM</a>
                            </li>
                            <li>
                              <a href="#">2:30 AM</a>
                            </li>
                            <li>
                              <a href="#">3:00 AM</a>
                            </li>
                            <li>
                              <a href="#">3:30 AM</a>
                            </li>
                            <li>
                              <a href="#">4:00 AM</a>
                            </li>
                            <li>
                              <a href="#">4:30 AM</a>
                            </li>
                            <li>
                              <a href="#">5:00 AM</a>
                            </li>
                            <li>
                              <a href="#">5:30 AM</a>
                            </li>
                            <li>
                              <a href="#">6:00 AM</a>
                            </li>
                            <li>
                              <a href="#">6:30 AM</a>
                            </li>
                            <li>
                              <a href="#">7:00 AM</a>
                            </li>
                            <li>
                              <a href="#">7:30 AM</a>
                            </li>
                            <li>
                              <a href="#">8:00 AM</a>
                            </li>
                            <li>
                              <a href="#">8:30 AM</a>
                            </li>
                            <li>
                              <a href="#">9:00 AM</a>
                            </li>
                            <li>
                              <a href="#">9:30 AM</a>
                            </li>
                            <li>
                              <a href="#">10:00 AM</a>
                            </li>
                            <li>
                              <a href="#">10:30 AM</a>
                            </li>
                            <li>
                              <a href="#">11:00 AM</a>
                            </li>
                            <li>
                              <a href="#">11:30 AM</a>
                            </li>
                            <li>
                              <a href="#">12:00 PM</a>
                            </li>
                            <li>
                              <a href="#">12:30 PM</a>
                            </li>
                            <li>
                              <a href="#">1:00 PM</a>
                            </li>
                            <li>
                              <a href="#">1:30 PM</a>
                            </li>
                            <li>
                              <a href="#">2:00 PM</a>
                            </li>
                            <li>
                              <a href="#">2:30 PM</a>
                            </li>
                            <li>
                              <a href="#">3:00 PM</a>
                            </li>
                            <li>
                              <a href="#">3:30 PM</a>
                            </li>
                            <li>
                              <a href="#">4:00 PM</a>
                            </li>
                            <li>
                              <a href="#">4:30 PM</a>
                            </li>
                            <li>
                              <a href="#">5:00 PM</a>
                            </li>
                            <li>
                              <a href="#">5:30 PM</a>
                            </li>
                            <li>
                              <a href="#">6:00 PM</a>
                            </li>
                            <li>
                              <a href="#">6:30 PM</a>
                            </li>
                            <li>
                              <a href="#">7:00 PM</a>
                            </li>
                            <li>
                              <a href="#">7:30 PM</a>
                            </li>
                            <li>
                              <a href="#">8:00 PM</a>
                            </li>
                            <li>
                              <a href="#">8:30 PM</a>
                            </li>
                            <li>
                              <a href="#">9:00 PM</a>
                            </li>
                            <li>
                              <a href="#">9:30 PM</a>
                            </li>
                            <li>
                              <a href="#">10:00 PM</a>
                            </li>
                            <li>
                              <a href="#">10:30 PM</a>
                            </li>
                            <li>
                              <a href="#">11:00 PM</a>
                            </li>
                            <li>
                              <a href="#">11:30 PM</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <input
                        type="submit"
                        name="submit"
                        value="Request a book"
                      />
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
      {/* </aside>
              </div>
            </div>
          </div>
        </div>
      </div>  */}
    </>
  );
};
export default Userpage;
