import React from "react";
import Nvideo from './../../assests/videos/example-video.mp4';
import Nvideo2 from './../../assests/videos/video640.mp4';
import Nvideo3 from './../../assests/videos/video320.mp4';
import Nvideo4 from './../../assests/videos/video4.mp4';
import { useState } from "react";
const Video = () =>{
    let Video = [
        {
            id: 1,
            videonw: Nvideo
        },
        {
            id: 2,
            videonw:Nvideo2
        },
        {
            id: 3,
            videonw:Nvideo3
        },
        {
            id: 4,
            videonw: Nvideo4
        },
        {
            id: 5,
            videonw: Nvideo2
        },
        {
            id: 6,
            videonw: Nvideo4
        },
        {
            id: 7,
            video: Nvideo3
        },
        {
            id: 8,
            video: Nvideo
        },
        {
            id: 9,
            video: Nvideo3
        }
    ]
    const [model,setModel] = useState(false);
    const [obj,setObj] = useState('');
    const getVid = (videonw) =>{
          setObj(videonw);
          setModel(true);
    }
    return(
        <>
<div className={model? "model open" : "model"}>
       <video className="vdeos" loop autoPlay = {true} src={obj}>

       </video>
       <div className="Close-icon">
           <a onClick={()=> setModel(false)}><i class="fa fa-times" aria-hidden="true"></i></a>
       </div>
        </div>
           <div className="video-gallery">
            {Video.map((item,index) =>{
                return(
                <div className="video" key={index} onClick={() => getVid(item.videonw)}>
                    <video className="vdeos" loop autoPlay = {true} src={item.videonw}>
                        {/* <source src={item.videonw} type="video/mp4"/> */}
                        <i class="fa-solid fa-circle-play"></i>
                    </video>
                </div>
                )
            })}
           </div>
        </>
    )
}
export default Video;