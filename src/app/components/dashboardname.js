import React from "react";
const Name = () => {
  const data = JSON.parse(localStorage.getItem("Adminuser"));
  console.log(data.data, "data");
  console.log(data.data.firstname, "firstname");
  return (
    <>
      <div className="User-heading-wrp">
        <div className="container">
          <div className="member-wrap">
            <div className="member-wrap-top">
              <h2>Welcome back! {data.data.firstname}</h2>
              <p>
                You are current FREE plan.{" "}
                <a href="pricing-plan.html">Upgrade now</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Name;