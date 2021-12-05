import React from "react";
import { Link } from "react-router-dom";
import './service.css'

const Service = ({ service }) => {
  const { id,name, img, desc, price } = service;
  return (
    <div className="service">
      <img src={img} alt="" />
      <h1>Name: {name}</h1>
      <p>{desc}</p>
      <h1>Price: {price}</h1>
      <Link to={`/bookings/${id}`}><button className="btn btn-primary">{name}</button></Link>
    </div>
  );
};

export default Service;
