import React from "react";
const fannanUrl = "http://159.65.150.199:7602/";
export default {
  //User Detials
  User_login: fannanUrl + "user/login",
  User_registration: fannanUrl + "user/register",

  //Category
  User_Category: fannanUrl + "admin/get/all/category",

  //ADmin State List
  Admin_State: fannanUrl + "admin/get/all/state",
  Admin_City: fannanUrl + "admin/get/city/bystate/",

  //Admin Update
  Admin_Update: fannanUrl + "user/update/profile/",
};
