import React from "react";
import DashboradMenu from "./../DashboardMenu";
import wishlistimage from "./../../../assests/images/listing/07.jpg";
import Wishlistuserimage from "./../../../assests/images/avatars/male-4.jpg";
import UsHeader from "../Header/Userheader";
const Wishlist = ()=>{
    return(
        <>
        <UsHeader/>
        <DashboradMenu/>
        <div className="wishlist-wrp">
        <div  className="container">
   <div  className="member-wishlist-wrap">
      <div  className="member-wrap-top">
         <h2 >Wishlish</h2>
         <p >You are current FREE plan.
          <a  href="pricing-plan.html">Upgrade now</a>
         </p>
      </div>
      <div  className="mw-box">
         <h2 >Paris</h2>
         <div  className="row">
            <div  className="col-lg-3 col-md-6">
               <div  className="place-item layout-02 place-hover">
                  <div  className="place-inner">
                     <div  className="place-thumb">
                        <a  href="04_place-details-1.html" className="entry-thumb">
                            <img  src={wishlistimage} alt=""/>
                        </a>
                        <a  href="#" data-place-id="185" className="golo-add-to-wishlist btn-add-to-wishlist">
                            <span  className="icon-heart">
                                <i  className="la la-bookmark large"></i>
                            </span>
                        </a>
                        <a  href="#" className="entry-category purple">
                            <i  className="las la-spa"></i>
                            <span >Massage</span>
                        </a>
                        <a  href="#" title="Author" className="author">
                            <img  src={Wishlistuserimage} alt="Author"/>
                        </a>
                    </div>
                     <div  className="entry-detail text-left">
                        <div  className="entry-head">
                           <div  className="place-type list-item">
                            <span >Massage</span>
                           </div>
                           <div  className="place-city">
                            <a  href="#">Lyon</a>
                           </div>
                        </div>
                        <h3  className="place-title">
                            <a  href="04_place-details-1.html">Vivi Body Spa</a>
                        </h3>
                        <div  className="entry-bottom">
                           <div  className="place-preview">
                              <div  className="place-rating">
                                <span >5.0</span>
                                <i  className="la la-star"></i>
                              </div>
                              <span  className="count-reviews">(2 Reviews)</span>
                           </div>
                           <div  className="place-price">
                            <span >$$</span>
                            </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div  className="col-lg-3 col-md-6">
               <div  className="place-item layout-02 place-hover">
                  <div  className="place-inner">
                     <div  className="place-thumb">
                        <a  href="04_place-details-1.html" className="entry-thumb">
                            <img  src={wishlistimage} alt=""/></a>
                            <a  href="#" data-place-id="185" className="golo-add-to-wishlist btn-add-to-wishlist">
                                <span  className="icon-heart">
                                    <i  className="la la-bookmark large"></i>
                                </span>
                            </a>
                            <a  href="#" className="entry-category orange">
                                <i  className="las la-cocktail"></i>
                                <span >Nightlife</span>
                            </a>
                            <a  href="#" title="Author" className="author">
                                <img  src={Wishlistuserimage} alt="Author"/>
                            </a>
                     </div>
                     <div  className="entry-detail text-left">
                        <div  className="entry-head">
                           <div  className="place-type list-item">
                            <span >Nightlife</span>
                            </div>
                           <div  className="place-city">
                            <a  href="#">Bordeaux</a>
                           </div>
                        </div>
                        <h3  className="place-title">
                            <a  href="04_place-details-1.html">Jardin Club</a>
                        </h3>
                        <div  className="entry-bottom">
                           <div  className="place-preview">
                              <div  className="place-rating">
                                <span >5.0</span>
                                <i  className="la la-star"></i>
                                </div>
                              <span  className="count-reviews">(2 Reviews)</span>
                           </div>
                           <div  className="place-price">
                            <span >$$</span>
                            </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div  className="col-lg-3 col-md-6">
               <div  className="place-item layout-02 place-hover">
                  <div  className="place-inner">
                     <div  className="place-thumb">
                        <a  href="04_place-details-1.html" className="entry-thumb">
                            <img  src={wishlistimage} alt=""/>
                        </a>
                        <a  href="#" data-place-id="185" className="golo-add-to-wishlist btn-add-to-wishlist">
                            <span  className="icon-heart">
                                <i  className="la la-bookmark large"></i>
                            </span>
                        </a>
                        <a  href="#" className="entry-category rosy-pink">
                            <i  className="las la-utensils"></i>
                            <span >Restaurant</span>
                        </a>
                        <a  href="#" title="Author" className="author">
                            <img  src={Wishlistuserimage} alt="Author"/>
                        </a>
                        </div>
                     <div  className="entry-detail text-left">
                        <div  className="entry-head">
                           <div  className="place-type list-item">
                            <span >Restaurant</span>
                            </div>
                           <div  className="place-city">
                            <a  href="#">Paris</a>
                            </div>
                        </div>
                        <h3  className="place-title">
                            <a  href="04_place-details-1.html">Vago Restaurant</a>
                        </h3>
                        <div  className="entry-bottom">
                           <div  className="place-preview">
                              <div  className="place-rating">
                                <span >5.0</span>
                                <i  className="la la-star"></i>
                              </div>
                              <span  className="count-reviews">(2 Reviews)</span>
                           </div>
                           <div  className="place-price">
                            <span >$$</span>
                            </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div  className="col-lg-3 col-md-6">
               <div  className="place-item layout-02 place-hover">
                  <div  className="place-inner">
                     <div  className="place-thumb">
                        <a  href="04_place-details-1.html" className="entry-thumb">
                            <img  src={wishlistimage} alt=""/>
                        </a>
                        <a  href="#" data-place-id="185" className="golo-add-to-wishlist btn-add-to-wishlist">
                            <span  className="icon-heart">
                                <i  className="la la-bookmark large"></i>
                            </span>
                        </a>
                        <a  href="#" className="entry-category charcoal-purple">
                            <i  className="las la-shopping-bag"></i>
                            <span >Shop</span>
                        </a>
                        <a  href="#" title="Author" className="author">
                            <img  src={Wishlistuserimage} alt="Author"/>
                        </a>
                        </div>
                     <div  className="entry-detail text-left">
                        <div  className="entry-head">
                           <div  className="place-type list-item">
                            <span >Shopping</span>
                            </div>
                           <div  className="place-city">
                            <a  href="#">Paris</a>
                            </div>
                        </div>
                        <h3  className="place-title">
                            <a  href="04_place-details-1.html">Antoinette</a>
                        </h3>
                        <div  className="entry-bottom">
                           <div  className="place-preview">
                            <span  className="no-reviews">(no reviews)</span>
                        </div>
                           <div  className="place-price">
                            <span >Free</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</div>
        </>
    )
}
export default Wishlist;