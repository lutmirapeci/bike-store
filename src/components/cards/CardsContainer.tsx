import React from "react";
// components
import Card from "../card/Card";
// types
import { CardsContainerProps } from "../../interfaces/BikeCard";
// styles
import "./CardsContainer.css";

const CardsContainer: React.FC<CardsContainerProps> = ({ bikes }) => {
  return (
    <div className="cards-container row g-5 mx-5">
      {bikes.map((bike, index) => (
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex">
          <Card bike={bike} key={index} />
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;
