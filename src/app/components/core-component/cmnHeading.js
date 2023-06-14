import React from "react";
function CmnHead(props){
  return(
    <>
    <div  className="container">
        <h2  className="title align-center">{props.head}</h2>
    </div>
    </>
  )
}
export default CmnHead;