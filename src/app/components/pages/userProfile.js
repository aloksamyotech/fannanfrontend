import React, { useEffect } from "react";
import DashboradMenu from "./../DashboardMenu";
import Profiletb from "../profiletab";
import UsHeader from "../Header/Userheader";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const Profile = () => {
  return (
    <>
      <UsHeader />
      <DashboradMenu />
      <div className="profile-wrp">
        <div className="container">
          <div className="member-wrap">
            <div className="member-wrap-top">
              <h2>Profile Setting</h2>
              <p>
                You are current FREE plan. <Link href="#">Upgrade now</Link>
              </p>
            </div>
            <Profiletb />

            {/* <form  action="#" class="member-profile form-underline text-left">
            <h3 >Avatar</h3>
            <div  class="member-avatar"><img  id="member_avatar" src={Profieimage} alt="Member Avatar"/><label  for="upload_new"><input  id="upload_new" type="file" name="member_avatar" placeholder="Upload new" value=""/> Upload new </label></div>
            <h3 >Basic Info</h3>
            <div  class="field-input">
                <label  for="first_name">First name</label>
                <input  type="text" name="first_name" placeholder="Invan" id="first_name"/>
            </div>
            <div  class="field-input">
                <label  for="last_name">Last name</label>
                <input  type="text" name="last_name" placeholder="Robent" id="last_name"/>
            </div>
            <div  class="field-input">
                <label  for="email">Email</label>
                <input  type="email" name="email" placeholder="invan@gmail.com" id="email"/>
            </div>
            <div  class="field-input">
                <label  for="phone">Phone</label>
                <input  type="tel" name="phone" placeholder="00 2323 323" id="phone"/>
            </div>
            <div  class="field-input">
                <label  for="facebook">Facebook</label>
                <input  type="text" name="facebook" placeholder="invantaa" id="facebook"/>
            </div>
            <div  class="field-input">
                <label  for="instagram">Instagram</label>
                <input  type="text" name="instagram" placeholder="invantaa" id="instagram"/>
            </div>
            <div  class="field-submit">
                <input  type="submit" value="Update"/>
            </div>
            </form> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
