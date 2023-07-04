import React, { useEffect } from "react";
import ArtSlider from "../artistbannerslide";
import Post from "./../Post";
import Artistimage from "./../../../assests/images/avatars/male-4.jpg";
import artistimage from "./../../../assests/images/avatars/female-4.jpg";
import rewardimage from "./../../../assests/images/Rewards.png";
import videoimage from "./../../../assests/images/buildingimage.jpg";
import postimage from "./../../../assests/images/post1.jpg";
import UsHeader from "../Header/Userheader";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import Ggallery from "./../gallery";
import VideoLight from "./../videof";
import "react-image-lightbox/style.css";
import axios from "axios";
import webUrl from "../core-component/webUrl";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/header";
const Artist = () => {
  const [data, setData] = useState("");

  const { id } = useParams();
  console.log(id, "id arri ");
  const handleClick = async () => {
    const response = await axios.get(`${webUrl.User_get_Details}${id}`);
    console.log(response.data.data[0], "response data");
    setData(response.data.data[0]);
  };
  useEffect(() => {
    handleClick();
  }, []);
  return (
    <>
      <Header />
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
                    <div className="place__currency">${data.base_price}</div>
                    <div className="place__category">
                      <Link title="Restaurant" href="#">
                        {data.category}
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
                              <img src={videoimage} alt="video-image" />
                            </div>
                            <div className="col-md-8 product-content">
                              <h2>Sample Product</h2>
                              <h5>$9.95</h5>
                              <p>
                                Sample Text. Loreum ipsum dolor sit amet,
                                consectuer adispicing elit nullam nunc justo
                                sagistis suscipt ultrices.
                              </p>
                              <a className="Add-to-cart-btn" href="#">
                                ADD TO CART
                              </a>
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
                              <a className="Add-to-cart-btn" href="#">
                                ADD TO CART
                              </a>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-4">
                              <img src={videoimage} />
                            </div>
                            <div className="col-md-8 product-content">
                              <h2>Sample Product</h2>
                              <h5>$9.95</h5>
                              <p>
                                Sample Text. Loreum ipsum dolor sit amet,
                                consectuer adispicing elit nullam nunc justo
                                sagistis suscipt ultrices.
                              </p>
                              <a className="Add-to-cart-btn" href="#">
                                ADD TO CART
                              </a>
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
                        <Post id={id} />
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
                  <ul className="place__comments">
                    <li>
                      <div className="place__author">
                        <div className="place__author__avatar">
                          <Link title="Sebastian" href="#">
                            <img src={Artistimage} alt="" />
                          </Link>
                        </div>
                        <div className="place__author__info">
                          <Link title="Sebastian" href="#">
                            Sebastian
                          </Link>
                          <div className="place__author__star">
                            <i className="la la-star"></i>
                            <i className="la la-star"></i>
                            <i className="la la-star"></i>
                            <i className="la la-star"></i>
                            <i className="la la-star"></i>
                            <span>
                              <i className="la la-star"></i>
                              <i className="la la-star"></i>
                              <i className="la la-star"></i>
                              <i className="la la-star"></i>
                              <i className="la la-star"></i>
                            </span>
                          </div>
                          <span className="time">October 1, 2019</span>
                        </div>
                      </div>
                      <div className="place__comments__content">
                        <p>
                          Went there last Saturday for the first time to watch
                          my favorite djs (Kungs, Sam Feldet and Watermat) and
                          really had a great experience. The atmosphere is
                          amazing and I am going next week.
                        </p>
                      </div>
                      <Link
                        title="Reply"
                        href="#"
                        className="place__comments__reply"
                      >
                        <i className="la la-comment-dots"></i> Reply{" "}
                      </Link>
                      <ul>
                        <li>
                          <div className="place__author">
                            <div className="place__author__avatar">
                              <Link title="Chiemeka" href="#">
                                <img src={Artistimage} alt="" />
                              </Link>
                            </div>
                            <div className="place__author__info">
                              <a title="Chiemeka" href="#">
                                Chiemeka
                              </a>
                              <div className="place__author__star">
                                <i className="la la-star"></i>
                                <i className="la la-star"></i>
                                <i className="la la-star"></i>
                                <i className="la la-star"></i>
                                <i className="la la-star"></i>
                                <span>
                                  <i className="la la-star"></i>
                                  <i className="la la-star"></i>
                                  <i className="la la-star"></i>
                                  <i className="la la-star"></i>
                                  <i className="la la-star"></i>
                                </span>
                              </div>
                              <span className="time">October 1, 2019</span>
                            </div>
                          </div>
                          <div className="place__comments__content">
                            <p>
                              Thank you for your kind words.It was truly very
                              nice to meet you. I am glad to read you enjoyed
                              the area and the cottage.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="place__author">
                        <div className="place__author__avatar">
                          <a title="Nitithorn" href="#">
                            <img src={Artistimage} alt="" />
                          </a>
                        </div>
                        <div className="place__author__info">
                          <a title="Nitithorn" href="#">
                            Nitithorn
                          </a>
                          <div className="place__author__star">
                            <i className="la la-star"></i>
                            <i className="la la-star"></i>
                            <i className="la la-star"></i>
                            <i className="la la-star"></i>
                            <i className="la la-star"></i>
                            <span>
                              <i className="la la-star"></i>
                              <i className="la la-star"></i>
                              <i className="la la-star"></i>
                              <i className="la la-star"></i>
                              <i className="la la-star"></i>
                            </span>
                          </div>
                          <span className="time">October 1, 2019</span>
                        </div>
                      </div>
                      <div className="place__comments__content">
                        <p>
                          Went there last Saturday for the first time to watch
                          my favorite djs (Kungs, Sam Feldet and Watermat) and
                          really had a great experience.
                        </p>
                      </div>
                      <a
                        title="Reply"
                        href="#"
                        className="place__comments__reply"
                      >
                        <i className="la la-comment-dots"></i> Reply{" "}
                      </a>
                    </li>
                  </ul>
                  <div className="review-form">
                    <h3>Write a review</h3>
                    <form action="#">
                      <div className="rate">
                        <span>Rate This Place</span>
                        <div className="stars">
                          <a href="#" title="star-1">
                            <i className="la la-star"></i>
                          </a>
                          <a href="#" title="star-2">
                            <i className="la la-star"></i>
                          </a>
                          <a href="#" title="star-3">
                            <i className="la la-star"></i>
                          </a>
                          <a href="#" title="star-4">
                            <i className="la la-star"></i>
                          </a>
                          <a href="#" title="star-5">
                            <i className="la la-star"></i>
                          </a>
                        </div>
                      </div>
                      <div className="field-textarea">
                        <img
                          src={Artistimage}
                          alt=""
                          className="author-avatar"
                        />
                        <textarea
                          name="review_text"
                          placeholder="Write a review"
                        ></textarea>
                      </div>
                      <div className="field-submit">
                        <input
                          type="submit"
                          value="Submit"
                          name="submit"
                          className="btn"
                        />
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
                          Send Enquiry
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
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Artist;
