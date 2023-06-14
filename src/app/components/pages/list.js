import React from "react";
import Header from "../Header/header";
import Listimage from './../../../assests/images/avatars/male-1.jpg';
import CityFilter from './../Cityfilter';
const List = () => {
   return (
      <>
         <Header />
        <div className="list-wrp bg-white text-left">
            <div className="archive-city">
               <div className="col-left">
               <CityFilter />
               </div>
            </div>
         </div>
      </>
   )
}
export default List;