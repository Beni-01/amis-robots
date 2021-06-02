import React from "react";

export const CardRobot = ({
  image,
  name,
  cardClass,
  email,
  handleShowDetails,
  id,
}) => {
  const handleClick = () => {
    handleShowDetails(id);
  };
  return (
    <>
      <div
        className="col-md-2 col-9 my-3 p-2 margin-left text-center card cursor-pointer "
        onClick={handleClick}
        title="Clquer pour voir plus de details"
      >
        <img src={image} className={cardClass} alt={name} title="Clquer pour voir plus de details"/>
        <h4 className="text-dark text-center mt-2" >
          <span>{name}</span>
        </h4>
        <h6 className="text-dark text-center mt-1">{email}</h6>
      </div>
    </>
  );
};
