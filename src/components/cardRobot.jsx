import React from "react";
//import { Link } from "react-router-dom";

export const CardRobot = ({ image, name, username, cardClass, email }) => {
  return (
    <>
      <div className="col-lg-3 col-6 mt-5 mb-3 p-2 m-4 text-center card  ">
        <img src={image} className={cardClass} alt={name} />
        <h4 className="text-dark text-center mt-2">
          <span>{name}</span>&nbsp;&nbsp;&nbsp;<span>{username}</span>
        </h4>
        <h6 className="text-dark text-center mt-1">{email}</h6>

        <button className="btn-info btn text-white p-2 ">Details</button>
      </div>
    </>
  );
};
