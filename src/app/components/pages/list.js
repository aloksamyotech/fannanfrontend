import React from "react";
import Header from "../Header/header";
import Listimage from "./../../../assests/images/avatars/male-1.jpg";
import CityFilter from "./../Cityfilter";
import { useParams } from "react-router-dom";
import { useState } from "react";
const List = () => {
  const { id } = useParams();
  const [userid, setUserid] = useState(id);

  //   // const [user, setUser] = useState([]);
  //   const myuserdata = async () => {
  //     const { data } = await axios.get(`${webUrl.User_By_Category}${89}`);
  //     setUserdata(data.data);
  //     console.log(userdata, "user details");
  //     // console.log(user, "user");
  //   };

  //   useEffect(() => {
  //     myuserdata();
  //   }, []);
  return (
    <>
      <Header />
      <div className="list-wrp bg-white text-left">
        <div className="archive-city">
          <div className="col-left">
            <CityFilter id={userid ? userid : null} />
          </div>
        </div>
      </div>
    </>
  );
};
export default List;
