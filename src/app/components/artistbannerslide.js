import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { render } from "@testing-library/react";
import Slideimage from './../../assests/images/listing/gallery-06.jpg';
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
            items: 2,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 3,
        }
    },
  };
  class App extends Component{
    state = {
        items: [
            {id:1, newtitle: 'DJ',place: '12 Persons',class: 'bsn-cat-item rosy-pink',icon: 'las la-drum'},
            {id:2, newtitle: 'DJ',place: '12 Persons',class: 'bsn-cat-item purple',icon: 'las la-guitar'},
            {id:3, newtitle: 'DJ',place: '3 Persons',class: 'bsn-cat-item blue',icon: 'las la-walking'},
            {id:4, newtitle: 'DJ',place: '3 Persons',class: 'bsn-cat-item orange',icon: 'las la-walking'},
            {id:5, newtitle: 'DJ',place: '3 Persons',class: 'bsn-cat-item blue',icon: 'las la-walking'},
            {id:6, newtitle: 'DJ',place: '10 Persons',class: 'bsn-cat-item orange',icon: 'las la-cocktail'},
            {id:7, newtitle: 'DJ',place: '10 Persons',class: 'bsn-cat-item orange',icon: 'las la-cocktail'},
            {id:8, newtitle: 'DJ',place: '10 Persons',class: 'bsn-cat-item orange',icon: 'las la-cocktail'}
        ]
    }
render(){
    const {items} = this.state;
    return(
        <>
        <div className='Artist-banner'>
        <OwlCarousel className='owl-theme' loop nav items={3} {...Options}>
            {items.map(item => <div nkey={item.id}>
            <div className="place-slider__item">
            <a href='#'>
            <img src={Slideimage} alt="slider-image"/>
            </a>
            </div>
            </div>)}
        </OwlCarousel>
        </div>
        </>
    )
}
  }
export default App;