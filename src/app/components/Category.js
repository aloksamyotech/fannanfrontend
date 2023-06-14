import React from "react";
const Category = (props)=>{
    return(
        <>
        <div className="business-category">
            <div className="container">
            <h2 className="title title-border-bottom align-center offset-item animate">{props.mainheading}</h2>
            </div>
        </div>
        </>
    )
}
export default Category;