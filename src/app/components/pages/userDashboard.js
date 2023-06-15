import React from "react";
import planImage from "./../../../assests/images/assets/img-people.svg";
import avatartImage from "./../../../assests/images/avatars/male-2.jpg";
import DashboradMenu from "./../../components/DashboardMenu";
import DashBoardName from "./../dashboardname";
import Dashplan from "./../dashplan";
import Dashstatics from "./../dasmemberStatis";
import DashMessage from "./../dashsmallmessaages";
import Category from "../Category";
import ArtisSlder from "../artistsSlider";
import Header from "../Header/header";
import PopUp from "./popup";
import UsHeader from "../Header/Userheader";
const Dash = () => {
  return (
    <>
      <UsHeader />
      <div className="site-content owner-content">
        <DashboradMenu />
        <DashBoardName />
        <Dashplan />
        <Dashstatics />
        <ArtisSlder />
        <DashMessage />
      </div>
    </>
  );
};
export default Dash;
