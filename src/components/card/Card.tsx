import React from "react";
// types
import { Bike } from "../../interfaces/BikeCard";
// styles
import "./Card.css";

interface CardProps {
  bike: Bike;
}

const Card: React.FC<CardProps> = ({ bike }) => {
  return (
    <div className="card w-100">
      <img
        src={`/images/${bike.image}.png`}
        className="card-img-top"
        alt={bike.name}
        loading="lazy"
      />
      <div className="card-body">
        <h6 className="card-title">{bike.name}</h6>
        <p className="card-text">${bike.price}</p>
      </div>
    </div>
  );
};

export default Card;
