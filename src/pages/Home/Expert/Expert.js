import React from "react";

const Expert = ({ expert }) => {
  const { name, img, expertize } = expert;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <img src={img} alt="" />
      <h1>{name}</h1>
      <p>{expertize}</p>
    </div>
  );
};

export default Expert;
