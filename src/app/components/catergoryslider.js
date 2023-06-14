import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { HashLink } from 'react-router-hash-link';
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
        980: {
            items: 3,
        },
        1024: {
            items: 6,
        }
    },
};
class App extends Component {
    state = {
        items: [
            { id: 1, newtitle: 'Carpenters', place: '12 Persons', class: 'bsn-cat-item rosy-pink', icon: 'las la-drum', send: '/list' },
            { id: 2, newtitle: 'Contractors', place: '12 Persons', class: 'bsn-cat-item purple', icon: 'las la-guitar',send: '/list' },
            { id: 3, newtitle: 'Architects', place: '3 Persons', class: 'bsn-cat-item blue', icon: 'las la-walking',send: '/list' },
            { id: 4, newtitle: 'Painter', place: '3 Persons', class: 'bsn-cat-item orange', icon: 'las la-walking',send: '/list' },
            { id: 5, newtitle: 'Interior Designers', place: '3 Persons', class: 'bsn-cat-item blue', icon: 'las la-walking'},
            { id: 6, newtitle: 'DJ', place: '10 Persons', class: 'bsn-cat-item orange', icon: 'las la-cocktail'},
            { id: 7, newtitle: 'DJ', place: '10 Persons', class: 'bsn-cat-item orange', icon: 'las la-cocktail'},
            { id: 8, newtitle: 'DJ', place: '10 Persons', class: 'bsn-cat-item orange', icon: 'las la-cocktail'}
        ]
    }
    render() {
        const { items } = this.state;
        return (
            <>
                <div className='Categrory-wrp bg-white'>
                    <div className='container'>
                        <OwlCarousel className='owl-theme' loop margin={10} nav items={6} {...Options}>
                            {items.map(item => <div key={item.id}>
                                <div className={item.class}>
                                    <HashLink to={item.send} smooth>
                                        <i class={item.icon}></i>
                                        <span className="title">{item.newtitle}</span>
                                        <span class="place">{item.place}</span>
                                    </HashLink>
                                </div>
                            </div>)}
                        </OwlCarousel>
                    </div>
                </div>
            </>
        )
    }
}
export default App;