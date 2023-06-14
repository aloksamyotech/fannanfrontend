import React, { Component } from "react";
import ImageEvent from './../../assests/images/workspace/cat-01.jpg';
import ImageEvent2 from './../../assests/images/workspace/cat-02.jpg';
import ImageLine from './../../assests/images/workspace/cat-line-01.png';
import ImageLine2 from './../../assests/images/workspace/cat-line-02.png';
class App extends Component{
    state =  {
        items: [
            {id: 1,eventName: "Hotel & Restaurants"},
            {id: 2,eventName: "Hotel & Restaurants"},
            {id: 3,eventName: "Hotel & Restaurants"},
            {id: 4,eventName: "Hotel & Restaurants"},
            {id: 5,eventName: "Hotel & Restaurants"},
            {id: 6,eventName: "Hotel & Restaurants"}
            // {id: 7,eventName: "Hotel & Restaurants"}

        ]
    }
    render(){
        const{ items } = this.state;
        return(
            <>
        <div className="list-categories bg-white">
        <div className="container">
                <div className="title-wrap align-center">
                   <h2>Events</h2>
                </div>
                <div  className="inner">
                <div  className="row">
                {items.map(item => <div  className="col-12 col-lg-4" key={item.id}>
                <div className="item hover__box">
                <a href="#">
                    <img  src={ImageEvent} alt=""/>
                    <span  className="info">
                        <span >{item.eventName}</span>
                        <img  src={ImageLine} alt=""/>
                    </span>
                </a>
                </div>
                  </div>)}
            </div>
            </div>
        </div>
        </div>
            </>
        )}
    }
// const Event = ()=>{
//     return(
//         <>
//         <div className="list-categories bg-white">
//             <div className="container">
//                 <div className="title-wrap align-center">
//                    <h2>Events</h2>
//                 </div>
//                 <div  className="inner">
//                 <div  className="row">
//                 <div  className="col-12 col-lg-4">
//                 <div  className="item hover__box">
//                 <a  href="#">
//                     <img  src={ImageEvent} alt=""/>
//                     <span  className="info">
//                         <span >Hotel &amp; Restaurants</span>
//                         <img  src={ImageLine} alt=""/>
//                     </span>
//                 </a>
//                 </div>
//                 </div>
//                 <div  className="col-12 col-lg-4">
//                     <div  className="item hover__box">
//                         <a  href="#">
//                             <img  src={ImageEvent2} alt=""/>
//                             <span  className="info">
//                                 <span >Pubs &amp; Clubs</span>
//                                 <img  src={ImageLine2} alt=""/>
//                             </span>
//                         </a>
//                     </div>
//                 </div>
//                 <div  className="col-12 col-lg-4">
//                     <div  className="item hover__box">
//                         <a  href="#">
//                             <img  src={ImageEvent2} alt=""/>
//                             <span  className="info">
//                                 <span >Wedding</span>
//                                 <img  src={ImageLine2} alt=""/>
//                             </span>
//                         </a>
//                     </div>
//                 </div>
//                 </div>
//                 <div  className="row mt-4">
//                     <div  className="col-12 col-lg-4">
//                         <div  className="item hover__box">
//                             <a  href="#">
//                                 <img  src={ImageEvent} alt=""/>
//                                 <span  className="info">
//                                     <span >Expo 2020</span>
//                                     <img  src={ImageLine2} alt=""/>
//                                 </span>
//                             </a>
//                         </div>
//                     </div>
//                     <div  className="col-12 col-lg-4">
//                         <div  className="item hover__box">
//                             <a  href="#">
//                                 <img  src={ImageEvent} alt=""/>
//                                 <span  className="info">
//                                     <span >Festival</span>
//                                     <img  src={ImageLine2} alt=""/>
//                                 </span>
//                             </a>
//                         </div>
//                     </div>
//                     <div  className="col-12 col-lg-4">
//                         <div  className="item hover__box">
//                             <a  href="#">
//                                 <img  src={ImageEvent} alt=""/>
//                                 <span  className="info">
//                                     <span >Corporate Event</span>
//                                     <img  src={ImageLine2} alt=""/>
//                                 </span>
//                             </a>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }
export default App;