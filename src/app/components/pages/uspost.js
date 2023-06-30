import React, { useEffect, useState } from "react";
import postimage from "./../../../assests/images/post1.jpg";
import Artistimage from "./../../../assests/images/avatars/male-4.jpg";
import artistimage from "./../../../assests/images/avatars/female-4.jpg";
import rewardimage from "./../../../assests/images/Rewards.png";
import videoimage from "./../../../assests/images/buildingimage.jpg";
import DashboradMenu from "./../DashboardMenu";
import UsHeader from "../Header/Userheader";
import Userimage from "../../../assests/images/image-1.png";
import customvideo from "../../../assests/videos/example-video.mp4";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import webUrl from "../core-component/webUrl";
import { FaStar } from "react-icons/fa";
const Uspost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState([]);
  const [post, setPost] = useState([]);
  const [displayCount, setDisplayCount] = useState(3);
  // const { userid } = useParams();

  const [setid, SetId] = useState("");
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("Adminuser"));
  console.log(data, "data");
  console.log(data[0].id, "_id");
  const handleSubmit = async () => {
    try {
      const response = await axios.post(webUrl.Add_Post, {
        user: data[0].id,
        title: title,
        description: description,
      });

      console.log("Post created:", response.data);
      setTitle("");
      setDescription("");
      window.location.reload();
      // Do something with the response, e.g., show success message
    } catch (error) {
      console.error("Error creating post:", error);
      // Handle error, e.g., show error message
    }
  };

  const loadMorePosts = () => {
    setDisplayCount(displayCount + 5); // Increase the number of posts to display
  };

  const getPost = async () => {
    try {
      const response = await axios.get(`${webUrl.Get_Post}${data[0].id}`);
      console.log(response, "response");
      setDetails(response.data.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const Getallpost = async () => {
    const alpost = await axios.get(webUrl.Get_all_post);
    console.log(alpost.data.data, "getAllpost");
    setPost(alpost.data.data);
    SetId(alpost.data.data);
  };

  const handleClick = (userId) => {
    console.log(`User id: ${userId}`);
    SetId(userId);
    navigate(`/userpage/${userId}`);
  };

  useEffect(() => {
    getPost();
    Getallpost();
  }, []);
  return (
    <>
      <UsHeader />
      <DashboradMenu />
      <div className="post-wrp bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 text-left">
              <div className="col-md-10">
                {post &&
                  post?.slice(0, displayCount).map((item) => {
                    return (
                      <>
                        <div className="postidentity" key={item.id}>
                          <div className="identityimage">
                            <img src={Userimage} alt="userImage" />
                          </div>
                          <div className="identityname">
                            <div className="titlepost">
                              <div
                                onClick={() =>
                                  handleClick(item.userdata.userid)
                                }
                              >
                                <h3>{item.userdata.username}</h3>
                              </div>
                            </div>

                            <div className="post-category">
                              <h6>Post category</h6>
                              <h6>Post category</h6>
                              <h6>Post category</h6>
                            </div>
                          </div>
                          {details.map(
                            (innerPost) =>
                              // Check if the IDs don't match to avoid repeating the same post
                              item._id === innerPost._id && (
                                <div key={innerPost.id} className="edit-block">
                                  {console.log(innerPost._id, "innerpost id")}
                                  <Link>
                                    <i class="fa-solid fa-pen"></i>
                                  </Link>
                                  <Link>
                                    <i class="fa-solid fa-trash-can"></i>
                                  </Link>
                                </div>
                              )
                          )}
                        </div>
                        <h3>{item.title}</h3>
                        <div className="post-image">
                          <img src={postimage} alt="postImage" />
                        </div>
                        <div className="post-discription">
                          <div className="post-top">
                            <Link href="#">
                              <i className="fa-solid fa-heart"></i>
                            </Link>
                            <Link href="#">
                              <i className="fa-solid fa-comment"></i>
                            </Link>
                            <Link href="#">
                              <i className="fas fa-share"></i>
                            </Link>
                            <h6>{item.date}</h6>
                          </div>
                          <p>{item.description}</p>
                        </div>
                      </>
                    );
                  })}
              </div>
              {displayCount < post.length && (
                <div className="morepost-btn text-center">
                  <button onClick={loadMorePosts}>More Post</button>
                </div>
              )}
              {/* <div className="review-form">
                <h3>Write a review</h3>
                <form action="#">
                  <div className="rate">
                    <span>Rate This Place</span>
                    <div className="stars">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <FaStar
                          key={value}
                          className={
                            (value = rating ? "star Selected" : "star")
                          }
                          onClick={() => handleRatingChange(value)}
                        />
                      ))}
                      <a href="#" title="star-1" alt="startImage">
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
                    <img src={Artistimage} alt="" className="author-avatar" />
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
              </div> */}
            </div>

            <div className="col-lg-4">
              <div className="sidebar sidebar-shadow sidebar-sticky fixed">
                <aside className="widget widget-sb-detail post-side">
                  <div className="widget-top">
                    <div className="flex">
                      <img src={Userimage} alt="userImage" />
                      <div className="inline-fx">
                        <h4>Username</h4>
                      </div>
                    </div>
                  </div>
                  <div className="business-info text-left">
                    <h3>Add New Post</h3>
                  </div>
                  <div className="post-new">
                    <form onSubmit={handleSubmit}>
                      <input type="file" id="myFile" name="filename" />
                      <div className="categroy-select">
                        <h4>Title</h4>
                        <input
                          type="text"
                          name="title"
                          placeholder="Title"
                          value={title}
                          onChange={(event) => setTitle(event.target.value)}
                          className="text-field"
                        />
                      </div>
                      <div className="txt-area" style={{ textAlign: "left" }}>
                        <h4>Discription</h4>
                        <textarea
                          rows="5"
                          placeholder="Discription"
                          value={description}
                          onChange={(event) =>
                            setDescription(event.target.value)
                          }
                        ></textarea>
                      </div>
                      <button type="submit" className="Post-submit">
                        Submit
                      </button>
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
export default Uspost;
