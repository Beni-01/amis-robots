import React from "react";
import { Link } from "react-router-dom";

export const CardRobot = ({
  image,
  name,
  cardClass,
  email,
  handleDelete,
  id,
}) => {
  return (
    <>
      <div className="col-md-2 col-9 my-3 p-2 margin-left text-center card  ">
        <img src={image} className={cardClass} alt={name} />
        <h4 className="text-dark text-center mt-2">
          <span>{name}</span>
        </h4>
        <h6 className="text-dark text-center mt-1">{email}</h6>
      </div>
    </>
  );
};
