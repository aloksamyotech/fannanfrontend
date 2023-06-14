import React from "react";
import DashboradMenu from './../DashboardMenu';
const Bookings = ()=>{
    return(
        <>
        <div className="site-content owner-content">
        <DashboradMenu/>
        <div className="container">
            <div className="member-place-wrap">
            <div  className="member-wrap-top">
                <h2 >Bookings</h2>
                <p >You are current FREE plan. 
                <a >Upgrade now</a>
                </p>
            </div>
            <div  className="member-filter text-left">
                <div  className="mf-left">
                    <form  action="#" method="GET">
                        <div  className="field-select">
                            <select  name="place_cities">
                                <option  value="20">Show 20</option>
                                <option  value="40">Show 40</option>
                            </select>
                            <i  className="la la-angle-down"></i>
                        </div>
                        <div  className="field-select">
                            <select  name="place_cities">
                                <option  value="0">All status</option>
                                <option  value="approve">Approve</option>
                                <option  value="pending">Pending</option>
                                <option  value="cancel">Cancel</option>
                            </select>
                            <i  className="la la-angle-down"></i>
                        </div>
                    </form>
                </div>
            <div  className="mf-right">
                <form  action="#" method="GET" className="site__search__form">
                    <div  className="site__search__field">
                        <span  className="site__search__icon">
                            <i  className="la la-search"></i>
                        </span>
                        <input  type="text" name="s" placeholder="Search" className="site__search__input"/>
                    </div>
                </form>
            </div>
            </div>
            </div>

            <table  className="member-place-list owner-booking table-responsive">
            <thead >
            <tr >
            <th >ID</th>
            <th >Listings</th>
            <th >Booking at</th>
            <th >Status</th>
            <th >Action</th>
            </tr>
            </thead>
            <tbody >
            <tr >
            <td  data-title="ID">1201</td>
            <td  data-title="Places"><b >Supanniga Eating Room</b></td>
            <td  data-title="Booking at">13 March 2020</td>
            <td  data-title="Status" className="approved">Approved</td>
            <td  data-title="" className="place-action"><a  href="#" title="Cancel" className="cancel">Cancel</a>
            <a  href="#" title="Detail" class="detail">Detail</a>
            </td>
            </tr>
            <tr >
                <td  data-title="ID">1201</td>
                <td  data-title="Places">
                    <b >Supanniga Eating Room</b>
                </td>
                <td  data-title="Booking at">13 March 2020</td>
                <td  data-title="Status" className="pending">Pending</td>
                <td  data-title="" className="place-action">
                    <a  href="#" title="Approve" className="approve">Approve</a>
                    <a  href="#" title="Cancel" className="cancel">Cancel</a>
                    <a  href="#" title="Detail" className="detail">Detail</a>
                </td>
            </tr>
            <tr ><td  data-title="ID">1201</td><td  data-title="Places"><b >Supanniga Eating Room</b></td><td  data-title="Booking at">13 March 2020</td><td  data-title="Status" class="cancel">Cancel</td><td  data-title="" class="place-action"><a  href="#" title="Approve" class="approve">Approve</a><a  href="#" title="Detail" class="detail">Detail</a></td></tr><tr ><td  data-title="ID">1201</td><td  data-title="Places"><b >Supanniga Eating Room</b></td><td  data-title="Booking at">13 March 2020</td><td  data-title="Status" class="approved">Approved</td><td  data-title="" class="place-action"><a  href="#" title="Cancel" class="cancel">Cancel</a><a  href="#" title="Detail" class="detail">Detail</a></td></tr><tr ><td  data-title="ID">1201</td><td  data-title="Places"><b >Supanniga Eating Room</b></td><td  data-title="Booking at">13 March 2020</td><td  data-title="Status" class="approved">Approved</td><td  data-title="" class="place-action"><a  href="#" title="Cancel" class="cancel">Cancel</a><a  href="#" title="Detail" class="detail">Detail</a></td></tr></tbody>
            </table>
            <div  className="pagination align-left">
                <div  className="pagination__numbers">
                    <span >1</span>
                    <a  title="2" href="#">2</a>
                    <a  title="3" href="#">3</a>
                    <a  title="Next" href="#"><i  className="la la-angle-right"></i></a>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Bookings;