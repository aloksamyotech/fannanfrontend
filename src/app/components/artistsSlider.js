import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Imageartist from './../../assests/images/listing/01.jpg';
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
const Options = {
    responsiveclassName: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        768: {
            items: 1,
        },
        980:{
           items: 2,
        },
        1024: {
            items: 4,
        }
    },
  };
class App extends Component{
    state = {
        items: [
            {id:1, name: 'DJ',topicon: 'las la-drum', feature: 'Featured'},
            {id:1, name: 'DJ',topicon: 'las la-drum', feature: 'Featured'},
            {id:1, name: 'DJ',topicon: 'las la-drum', feature: 'Featured'},
            {id:1, name: 'DJ',topicon: 'las la-drum', feature: 'Featured'},
            {id:1, name: 'DJ',topicon: 'las la-drum', feature: 'Featured'}
        ]
    }
render(){
    const { items } = this.state;
    return(
        <>
          <div className="trending trending-business">
            <div className="container">
                <OwlCarousel className='owl-theme' loop margin={0} nav items={4} { ...Options }>
                {items.map(item => <div key={item.id}>
                    <div className="place-item layout-02 place-hover">
                    <div className="place-inner">
                    <Link to="/Artist">
                    <div className="place-thumb hover-img">
                        <a href="" className="entry-thumb" tabindex="0">
                            <img src={Imageartist} alt=""/>
                        </a>
                        <a href="#" data-place-id="185" className="fannan-add-to-wishlist btn-add-to-wishlist" tabindex="0">
                            <span className="icon-heart">
                                <i className="la la-bookmark large"></i>
                            </span>
                        </a>
                        <a href="#" className="entry-category rosy-pink" tabindex="0">
                            <i className={item.topicon}></i>
                            <span>{item.name}</span>
                        </a>
                        <div className="feature">{item.feature}</div>
                    </div>
                     </Link>
                    <div className="entry-detail">
                        <div className="entry-head">
                            <div className="place-type list-item">
                                <span>DJ</span>
                            </div>
                            <div className="place-city">
                                <a href="#" tabindex="0">Paris</a>
                            </div>
                        </div>
                        <h3 className="place-title text-left">
                            <a href="" tabindex="0">Alan David Williams</a>
                        </h3>
                        <div className="entry-bottom">
                            <div className="place-preview">
                                <div className="place-rating">
                                    <span>5.0</span>
                                    <i className="la la-star"></i>
                                </div>
                                <span className="count-reviews">(2 Reviews)</span>
                            </div>
                            <div className="place-price">
                                <span>$$</span>
                            </div>
                        </div>
                    </div>
                    </div>
                   </div>
            </div>)}
            </OwlCarousel>
            <OwlCarousel className='owl-theme' loop margin={0} nav items={4} { ...Options }>
                {items.map(item => <div key={item.id}>
                    <Link to='/Artist'>
                    <div className="place-item layout-02 place-hover">
                    <div className="place-inner">
                    <div className="place-thumb hover-img">
                        <a href="" className="entry-thumb" tabindex="0">
                            <img src={Imageartist} alt=""/>
                        </a>
                        <a href="#" data-place-id="185" className="fannan-add-to-wishlist btn-add-to-wishlist" tabindex="0">
                            <span className="icon-heart">
                                <i className="la la-bookmark large"></i>
                            </span>
                        </a>
                        <a href="#" className="entry-category rosy-pink" tabindex="0">
                            <i className={item.topicon}></i>
                            <span>{item.name}</span>
                        </a>
                        <div className="feature">{item.feature}</div>
                    </div>
                    <div className="entry-detail">
                        <div className="entry-head">
                            <div className="place-type list-item">
                                <span>DJ</span>
                            </div>
                            <div className="place-city">
                                <a href="#" tabindex="0">Paris</a>
                            </div>
                        </div>
                        <h3 className="place-title text-left">
                            <a href="" tabindex="0">Alan David Williams</a>
                        </h3>
                        <div className="entry-bottom">
                            <div className="place-preview">
                                <div className="place-rating">
                                    <span>5.0</span>
                                    <i className="la la-star"></i>
                                </div>
                                <span className="count-reviews">(2 Reviews)</span>
                            </div>
                            <div className="place-price">
                                <span>$$</span>
                            </div>
                        </div>
                    </div>
                    </div>
                   </div>
                   </Link>
            </div>
            )}
            </OwlCarousel>
            </div>
            </div>
            </>
                )
            }
        }
export default App;