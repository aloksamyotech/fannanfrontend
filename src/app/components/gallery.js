import React from "react";
import { useState } from "react";
import Img1 from "./../../assests/images/avatars/male-2.jpg";
import Img2 from "./../../assests/images/avatars/male-3.jpg";
import Img3 from "./../../assests/images/city/amsterdam.jpg"
import Img4 from "./../../assests/images/city/angeles.jpg"
import Img5 from "./../../assests/images/city/newyork-small.jpg"
import Img6 from "./../../assests/images/city/tokyo.jpg"
const Gallery = () => {
  let data = [
    {
      id: 1,
      imgsrc: Img1
    },
    {
      id: 2,
      imgsrc: Img2
    },
    {
      id: 3,
      imgsrc: Img3
    },
    {
      id: 4,
      imgsrc: Img4
    },
    {
      id: 5,
      imgsrc: Img5
    },
    {
      id: 6,
      imgsrc: Img4
    },
    {
      id: 7,
      imgsrc: Img5
    },
    {
      id: 8,
      imgsrc: Img6
    },
    {
      id: 9,
      imgsrc: Img6
    },
    {
      id: 10,
      imgsrc: Img6
    },{
      id: 11,
      imgsrc: Img6
    }

  ]
  const [model,setModal] = useState(false); 
  const [tempingSrc, setTempimgSrc] = useState('');
  const getImg = (imgsrc) =>{
    // console.warn(imgsrc);
    setTempimgSrc(imgsrc);
    setModal(true);
  }
  return(
    <>
    <div className={model? "model open" : "model"}>
       <img src={tempingSrc}/>
       <div className="Close-icon">
           <a onClick={()=> setModal(false)}><i class="fa fa-times" aria-hidden="true"></i></a>
       </div>
    </div>
    <div className="gallery">
      {data.map((item,index)=>{
        return(
          <div className="pics" key={index} onClick={() => getImg(item.imgsrc)}>
            <img src={item.imgsrc} style={{width: "100%"}}/>
          </div>
        )
      })}
      <button>More gallery</button>
    </div>
    </>
  )
}
export default Gallery;