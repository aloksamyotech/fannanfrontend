import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userImage from './../../assests/images/avatars/male-1.jpg';
import Quoteimage from './../../assests/images/assets/quote-active.png';
const Options = {
    responsiveClass: true,
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
        1024: {
            items: 2,
        }
    },
  };
const People = ()=>{
    return(
        <>
        <div className="testimonial bg-white">
            <div className="container">
            <h2  class="title title-border-bottom align-center offset-item animate">People Talking About Us</h2>
              
            <OwlCarousel className='owl-theme' loop margin={10} nav items={2} {...Options}>
            <div className='item'>
            <div  class="testimonial-item">
                <div  class="avatar">
                    <img  src={userImage} alt="Avatar"/>
                    <img  src={Quoteimage} alt="Quote" class="quote"/>
                </div>
                <div  class="testimonial-info">
                    <p >Really useful app to find interesting things to see do, drink and eat in new places. I’ve been using it regularly in my travels over the past few months.</p>
                    <div  class="testimonial-meta"><b >Kari Granleese</b><span >CEO Alididi</span>
                    </div>
                </div>
            </div>
            </div>
            <div className='item'>
            <div  class="testimonial-item">
                <div  class="avatar">
                    <img  src={userImage} alt="Avatar"/>
                    <img  src={Quoteimage} alt="Quote" class="quote"/>
                </div>
                <div  class="testimonial-info">
                    <p >Really useful app to find interesting things to see do, drink and eat in new places. I’ve been using it regularly in my travels over the past few months.</p>
                    <div  class="testimonial-meta"><b >Kari Granleese</b><span >CEO Alididi</span>
                    </div>
                </div>
            </div>
            </div>
            <div className='item'>
            <div  class="testimonial-item">
                <div  class="avatar">
                    <img  src={userImage} alt="Avatar"/>
                    <img  src={Quoteimage} alt="Quote" class="quote"/>
                </div>
                <div  class="testimonial-info">
                    <p >Really useful app to find interesting things to see do, drink and eat in new places. I’ve been using it regularly in my travels over the past few months.</p>
                    <div  class="testimonial-meta"><b >Kari Granleese</b><span >CEO Alididi</span>
                    </div>
                </div>
            </div>
            </div>
            <div className='item'>
            <div  class="testimonial-item">
                <div  class="avatar">
                    <img  src={userImage} alt="Avatar"/>
                    <img  src={Quoteimage} alt="Quote" class="quote"/>
                </div>
                <div  class="testimonial-info">
                    <p >Really useful app to find interesting things to see do, drink and eat in new places. I’ve been using it regularly in my travels over the past few months.</p>
                    <div  class="testimonial-meta"><b >Kari Granleese</b><span >CEO Alididi</span>
                    </div>
                </div>
            </div>
            </div>
            </OwlCarousel>
            </div>
        </div>
        </>
    )
}
export default People;