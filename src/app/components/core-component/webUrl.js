import React from "react";
const fannanUrl = "http://159.65.150.199:7602/";
export default {
  //User Detials
  User_login: fannanUrl + "user/login",
  User_registration: fannanUrl + "user/register",
  User_get_Details: fannanUrl + "user/get/details/",

  //Category
  User_Category: fannanUrl + "admin/get/all/category",
  User_By_Category: fannanUrl + "user/get/user/category/",

  //ADmin State List
  Admin_State: fannanUrl + "admin/get/all/state",
  Admin_City: fannanUrl + "admin/get/city/bystate/",

  //Admin Update
  Admin_Update: fannanUrl + `user/update/profile/`,

  //Add Post

  Add_Post: fannanUrl + "user/add/post",
  Get_Post: fannanUrl + "user/get/post/byid/",
  Get_all_post: fannanUrl + "user/get/all/post",

  //Add Like
  Get_Like: fannanUrl + "user/add/post/like/",

  //Get Comment
  Get_Comment: fannanUrl + "user/get/comment/bypostid/",
  Add_Comment: fannanUrl + "user/add/comment",

  //Add Review

  Add_Review: fannanUrl + "user/add/review",
  Get_Review: fannanUrl + "user/get/review/byuserid/",
};
