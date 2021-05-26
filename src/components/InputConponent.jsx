import React from "react";

export const InputConponent = ({ handleChange }) => {
  const handleSearch = (e) => {
    handleChange(e.target.value);
  };
  return (
    <>
      <form className="container">
        <div className="row justify-content-center ">
          <div className="col-md-5  col-12 mt-5 ">
            <div className="input-group input-group-addon">
              <input
                type="text"
                className="form-control form-control-lg p-3 radius-none"
                placeholder="saisie le nom du robot ici"
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
