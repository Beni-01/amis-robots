import React from "react";
//import { Link } from "react-router-dom";

export const CardRobot = ({ image, name, username, cardClass, email }) => {
  return (
    <>
      <div className="col-md-2 col-6 my-3 p-2 margin-left text-center card  ">
        <img src={image} className={cardClass} alt={username} />
        <h4 className="text-dark text-center mt-2">
          <span>{name}</span>
        </h4>
        <h6 className="text-dark text-center mt-1">{email}</h6>

        <button className="btn-success btn text-white p-2 ">Details</button>
        <button className="btn-primary btn text-white p-2 mt-2 ">
          Modifier
        </button>
        <button className="btn-danger btn text-white p-2 mt-2 ">
          Supprimer
        </button>
      </div>
    </>
  );
};
