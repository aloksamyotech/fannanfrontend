import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
const Menu = () => {
  // const [id,setId] = useState(1);
  // const handleChangenew= (n)=>{
  //     switch (n) {
  //         case 1:
  //             setId("1");
  //             break;
  //         case 2:
  //             setId("2");
  //             break;
  //         case 3:
  //             setId("3");
  //             break;
  //         case 4:
  //             setId("4");
  //             break;
  //         case 5:
  //             setId("5");
  //             break;
  //         case 6:
  //             setId("6");
  //             break;
  //             default:
  //             setId(null);
  //     }
  // };

  return (
    <>
      <div className="member-menu text-left">
        <div className="container">
          <ul>
            <li>
              <NavLink
                to="/user/dashboard"
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
                activeClassName="selected"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/uspost"
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Community
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/chat"
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Enquiry
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/listing"
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/services"
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/profile"
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Profile
              </NavLink>
            </li>
            {/* <div class="input-group">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <button type="button" class="btn btn-outline-primary">search</button>
                        </div> */}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Menu;
