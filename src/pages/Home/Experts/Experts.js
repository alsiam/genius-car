import React from "react";
import banner1 from "../../../images/experts/1.jpg";
import banner2 from "../../../images/experts/2.jpg";
import banner3 from "../../../images/experts/3.jpg";
import banner4 from "../../../images/experts/4.jpg";
import banner5 from "../../../images/experts/5.jpg";
import banner6 from "../../../images/experts/6.jpg";
import Expert from "../Expert/Expert";

const experts = [
  {
    id: 1,
    img: banner1,
    name: "Al Siam",
    expertize: "Alrounder",
  },
  {
    id: 2,
    img: banner2,
    name: "Al Siam",
    expertize: "Alrounder",
  },
  {
    id: 3,
    img: banner3,
    name: "Al Siam",
    expertize: "Alrounder",
  },
  {
    id: 4,
    img: banner4,
    name: "Al Siam",
    expertize: "Alrounder",
  },
  {
    id: 5,
    img: banner5,
    name: "Al Siam",
    expertize: "Alrounder",
  },
  {
    id: 6,
    img: banner6,
    name: "Al Siam",
    expertize: "Alrounder",
  },
];

const Experts = () => {
  return (
    <div id="experts" className="row">
      <h1 className="text-primary mt-53">Our Experts</h1>
      {experts.map((expert) => (
        <Expert key={expert.id} expert={expert}></Expert>
      ))}
    </div>
  );
};

export default Experts;
