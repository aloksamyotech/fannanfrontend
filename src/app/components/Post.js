import React, { useEffect, useState } from "react";
import postimage from "./../../assests/images/post1.jpg";
import { useNavigate, useParams } from "react-router-dom";
import webUrl from "./core-component/webUrl";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import Artistimage from "./../../assests/images/avatars/male-4.jpg";
import PrivateComponent from "./pages/privateComponent";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const Post = (props) => {
  //   const handleLike = () => {
  //     setShowcomponent(true);
  //   };

  //   const handleLike = async (_id) => {

  //     // console.log(props.id, "id post ki");
  //     // console.log(_id, "id h ki nhi ost");

  //       const respsonse = await axios.post(`${webUrl.Get_Like}${_id}`);
  //       console.log(respsonse, "like-repsosme");
  //       setCount(count + 1);
  //     }
  //   };

  // const [showModal, setShowModal] = useState(false);

  // const openModal = () => {
  //   setShowModal(true);
  // };
  // const loginhandleClose = () => {
  //   setShowModal(false);
  // };
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState("");
  const [ids, setIds] = useState([]);
  const [getId, getIds] = useState("");
  const [comment, setComment] = useState("");
  const GetPost = async () => {
    console.log(props.id, "new-id");
    const response = await axios.get(`${webUrl.Get_Post}${props.id}`);
    console.log(response.data.data, "data-post");
    setDetails(response.data.data);

    const extractID = details?.map((item) => item._id);
    setIds(extractID, "ID here");
    console.log(ids, "All ids");
  };

  // const navigate = useNavigate();
  // const validationLogin = Yup.object({
  //   email: Yup.string()
  //     .email("Invalid email address")
  //     .required("Email is required"),
  //   password: Yup.string()
  //     .required("Password is required")
  //     .min(8, "Password must be at least 8 characters long"),
  // });

  // const newhandleSubmit = async (values, { setSubmitting, resetForm }) => {
  //   try {
  //     const data = await axios.post(webUrl.User_login, values);
  //     resetForm();
  //     console.log((await data).data.data, "newuserDetails");
  //     navigate("/user/dashboard");
  //     localStorage.setItem("Adminuser", JSON.stringify(data.data.data));
  //     const Id = localStorage.setItem("UserId", JSON.stringify(data._id));
  //     console.log(Id, "id hona");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const CommetnApi = async () => {
    const response = await axios.get(`${webUrl.Get_Comment}`);
    console.log(response, "Comment Api");
  };
  // ids.forEach((id) => {
  //   CommetnApi(id);
  // });

  const openComment = async (postId) => {
    setOpen(!open);
    console.log("Clicked Post ID:", postId);
    getIds(postId);
  };

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const commentApi = async (event) => {
    event.preventDefault();
    const data = {
      userid: props.id,
      postid: getId,
      comment: comment,
    };
    const response = await axios.post(webUrl.Add_Comment, data);
    console.log(response, "post-comment");
    setComment("");
    setOpen(false);
  };

  useEffect(() => {
    GetPost();
  }, []);
  return (
    <>
      <div className="post-wrp">
        <div className="container">
          <div className="row">
            {console.log(details.title, "title")}
            {details &&
              details.map((item, index) => (
                <div className="col-md-12 post-block" key={item._id}>
                  <>
                    <div className="post-image">
                      <img src={postimage} alt="postimage" />
                    </div>
                    <div className="post-discription">
                      <div className="post-top">
                        <h5>{item.title}</h5>
                        <h6>{item.date}</h6>
                      </div>
                      <div className="post-category">
                        <h6>{item.user_details.category}</h6>
                        {/* <h6>Post category</h6>
                        <h6>Post category</h6> */}
                      </div>
                      <p>{item.description}</p>
                    </div>
                    <div className="post-discription">
                      <div className="post-top">
                        <Link href="#">
                          <AiOutlineHeart size={25} />
                          {item.like} Likes
                        </Link>
                        <Link href="#" onClick={() => openComment(item._id)}>
                          <BiComment size={25} />
                          Comments
                        </Link>
                        {open && (
                          <div>
                            <form onSubmit={commentApi}>
                              <textarea
                                className="text-area"
                                value={comment}
                                onChange={handleChange}
                              ></textarea>
                              <button className="btn" type="submit">
                                Submit
                              </button>
                            </form>
                          </div>
                        )}
                        {/* <Link href="#">
                          <i className="fas fa-share"></i>
                        </Link> */}
                      </div>
                      {/* {console.log(item._id, "idnew")} */}
                      <ul>
                        <li>
                          <div className="place__author">
                            {item?.comment.map((commentitem) => {
                              return (
                                <div className="place__author__info">
                                  <Link title="Chiemeka" href="#">
                                    CHiakya
                                  </Link>
                                  {/* <div className="place__author__star">
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
                                  </div> */}
                                  <span className="time">
                                    {commentitem.date}
                                  </span>
                                  <div className="place__comments__content">
                                    <p>{commentitem.comment}</p>
                                  </div>
                                </div>
                              );
                            })}
                            {/* <div className="place__author__info">
                              <Link title="Chiemeka" href="#">
                                Chiemeka
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
                            </div> */}
                          </div>
                          {/* <div className="place__comments__content">
                            <p>{commentitem.comment}</p>
                          </div> */}
                        </li>
                      </ul>
                    </div>
                  </>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
