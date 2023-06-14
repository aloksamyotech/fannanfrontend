import React from "react";
import avatartImage from "./../../assests/images/avatars/male-2.jpg";
const Messages = () => {
  return (
    <>
      <div className="Mesages-wrp">
        <div className="container">
          <div className="owner-box">
            <div className="row">
              <div className="col-lg-4">
                <div className="ob-item">
                  <div className="ob-head">
                    <h3>Recent Enquiry</h3>
                    <a href="#" title="View All" className="view-all">
                      View all
                    </a>
                  </div>
                  <div className="ob-content recent-list">
                    <ul>
                      <li className="pending text-left">
                        <div className="place__author text-left">
                          <div className="place__author__avatar">
                            <a title="Sebastian" href="#">
                              <img src={avatartImage} alt="" />
                            </a>
                          </div>
                          <div className="place__author__info text-left">
                            <a title="Sebastian" href="#">
                              Sebastian
                            </a>
                            <div className="place__author__star">
                              {/* <i className="la la-star"></i>
                                                    <i className="la la-star"></i>
                                                    <i className="la la-star"></i>
                                                    <i className="la la-star"></i>
                                                    <i className="la la-star"></i>
                                                    <span >
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star"></i>
                                                    </span> */}
                            </div>
                            {/* <span  className="time">October 1, 2019</span> */}
                          </div>
                        </div>
                        <p className="date">
                          <b>Date:</b>March 15, 2020
                        </p>
                        <p className="place">
                          <b>Place:</b>Bamboo Hotel Paris
                        </p>
                        {/* <p  className="status">
                                                <b >Status:</b>
                                                <span >Pending</span>
                                            </p> */}
                        <a href="#" title="More" className="more">
                          <i className="las la-angle-right"></i>
                        </a>
                      </li>
                      <li className="approve text-left">
                        <div className="place__author text-left">
                          <div className="place__author__avatar">
                            <a title="Sebastian" href="#">
                              <img src={avatartImage} alt="" />
                            </a>
                          </div>
                          <div className="place__author__info text-left">
                            <a title="Sebastian" href="#">
                              Sebastian
                            </a>
                            <div className="place__author__star"></div>
                          </div>
                        </div>
                        <p className="date">
                          <b>Date:</b>March 15, 2020
                        </p>
                        <p className="place">
                          <b>Place:</b>Bamboo Hotel Paris
                        </p>
                        <a href="#" title="More" className="more">
                          <i className="las la-angle-right"></i>
                        </a>
                      </li>
                      <li className="cancel text-left">
                        <div className="place__author text-left">
                          <div className="place__author__avatar">
                            <a title="Sebastian" href="#">
                              <img src={avatartImage} alt="" />
                            </a>
                          </div>
                          <div className="place__author__info text-left">
                            <a title="Sebastian" href="#">
                              Sebastian
                            </a>
                          </div>
                        </div>
                        <p className="date">
                          <b>Date:</b>March 15, 2020
                        </p>
                        <p className="place">
                          <b>Place:</b>Bamboo Hotel Paris
                        </p>
                        <a href="#" title="More" className="more">
                          <i className="las la-angle-right"></i>
                        </a>
                      </li>
                      <li className="pending text-left">
                        <div className="place__author text-left">
                          <div className="place__author__avatar">
                            <a title="Sebastian" href="#">
                              <img src={avatartImage} alt="" />
                            </a>
                          </div>
                          <div className="place__author__info text-left">
                            <a title="Sebastian" href="#">
                              Sebastian
                            </a>
                          </div>
                        </div>
                        <p className="date">
                          <b>Date:</b>March 15, 2020
                        </p>
                        <p className="place">
                          <b>Place:</b>Bamboo Hotel Paris
                        </p>
                        <a href="#" title="More" className="more">
                          <i className="las la-angle-right"></i>
                        </a>
                      </li>
                      <li className="approve text-left">
                        <p className="date">
                          <b>Date:</b>March 15, 2020
                        </p>
                        <p className="place">
                          <b>Place:</b>Bamboo Hotel Paris
                        </p>
                        {/* <p  className="status">
                                                <b >Status:</b>
                                                <span >Approve</span>
                                            </p> */}
                        <a href="#" title="More" className="more">
                          <i className="las la-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="ob-item">
                  <div className="ob-head">
                    <h3>New Reviews</h3>
                    <a href="#" title="View All" className="view-all">
                      View all
                    </a>
                  </div>
                  <div className="ob-content">
                    <ul className="place__comments">
                      <li>
                        <div className="place__author text-left">
                          <div className="place__author__avatar">
                            <a title="Sebastian" href="#">
                              <img src={avatartImage} alt="" />
                            </a>
                          </div>
                          <div className="place__author__info text-left">
                            <a title="Sebastian" href="#">
                              Sebastian
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
                        <div className="place__comments__content text-left">
                          <p>
                            Went there last Saturday for the first time to watch
                            my favorite djs (Kungs, Sam Feldet and Watermat) and
                            really had a great experience.{" "}
                          </p>
                        </div>
                        <p className="place text-left">
                          <b>Place:</b>Vago Restaurant
                        </p>
                      </li>

                      <li>
                        <div className="place__author text-left">
                          <div className="place__author__avatar">
                            <a title="Sebastian" href="#">
                              <img src={avatartImage} alt="" />
                            </a>
                          </div>
                          <div className="place__author__info text-left">
                            <a title="Sebastian" href="#">
                              Sebastian
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
                        <div className="place__comments__content text-left">
                          <p>
                            Went there last Saturday for the first time to watch
                            my favorite djs (Kungs, Sam Feldet and Watermat) and
                            really had a great experience.{" "}
                          </p>
                        </div>
                        <p className="place text-left">
                          <b>Place:</b>Vago Restaurant
                        </p>
                      </li>

                      <li>
                        <div className="place__author text-left">
                          <div className="place__author__avatar">
                            <a title="Sebastian" href="#">
                              <img src={avatartImage} alt="" />
                            </a>
                          </div>
                          <div className="place__author__info text-left">
                            <a title="Sebastian" href="#">
                              Sebastian
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
                        <div className="place__comments__content text-left">
                          <p>
                            Went there last Saturday for the first time to watch
                            my favorite djs (Kungs, Sam Feldet and Watermat) and
                            really had a great experience.{" "}
                          </p>
                        </div>
                        <p className="place text-left">
                          <b>Place:</b>Vago Restaurant
                        </p>
                      </li>

                      <li>
                        <div className="place__author text-left">
                          <div className="place__author__avatar">
                            <a title="Sebastian" href="#">
                              <img src={avatartImage} alt="" />
                            </a>
                          </div>
                          <div className="place__author__info text-left">
                            <a title="Sebastian" href="#">
                              Sebastian
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
                        <div className="place__comments__content text-left">
                          <p>
                            Went there last Saturday for the first time to watch
                            my favorite djs (Kungs, Sam Feldet and Watermat) and
                            really had a great experience.{" "}
                          </p>
                        </div>
                        <p className="place text-left">
                          <b>Place:</b>Vago Restaurant
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ob-item">
                  <div className="ob-head">
                    <h3>
                      Notifications <span>(5)</span>
                    </h3>
                    <a href="#" title="Clear All" className="clear-all">
                      Clear all
                    </a>
                  </div>
                  <div className="ob-content">
                    <ul>
                      <li className="noti-item unread text-left">
                        <p>
                          You have got a new booking<br></br> Booking ID:
                          #123434
                        </p>
                        <span>1d ago</span>
                        <a
                          _n
                          gcontent-usw-c13=""
                          href="#"
                          title="Delete"
                          className="delete-noti"
                        >
                          Delete
                        </a>
                      </li>
                      <li className="noti-item read text-left">
                        <p>
                          You have got a new booking<br></br> Booking ID:
                          #123434
                        </p>
                        <span>1d ago</span>
                        <a
                          _n
                          gcontent-usw-c13=""
                          href="#"
                          title="Delete"
                          className="delete-noti"
                        >
                          Delete
                        </a>
                      </li>
                      <li className="noti-item read text-left">
                        <p>
                          You have got a new booking<br></br> Booking ID:
                          #123434
                        </p>
                        <span>1d ago</span>
                        <a
                          _n
                          gcontent-usw-c13=""
                          href="#"
                          title="Delete"
                          className="delete-noti"
                        >
                          Delete
                        </a>
                      </li>
                      <li className="noti-item read text-left">
                        <p>
                          You have got a new booking<br></br> Booking ID:
                          #123434
                        </p>
                        <span>1d ago</span>
                        <a
                          _n
                          gcontent-usw-c13=""
                          href="#"
                          title="Delete"
                          className="delete-noti"
                        >
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Messages;
