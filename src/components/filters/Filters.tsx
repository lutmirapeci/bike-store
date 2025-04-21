import React, { useState, useEffect } from "react";
// types
import { Bike } from "../../interfaces/BikeCard";
import { FilterCounts } from "../../interfaces/Filters";
// styles
import "./Filters.css";

interface FilterProps {
  bikes: Bike[];
  onFilter: (filter: string | null) => void;
  activeFilter: string | null;
}

const Filters: React.FC<FilterProps> = ({ bikes, onFilter, activeFilter }) => {
  const [filterCounts, setFilterCounts] = useState<FilterCounts>({
    gender: {},
    brand: {},
  });

  useEffect(() => {
    const genderCounts: { [key: string]: number } = {};
    const brandCounts: { [key: string]: number } = {};

    bikes.forEach((bike) => {
      genderCounts[bike.gender] = (genderCounts[bike.gender] || 0) + 1;
      brandCounts[bike.brand] = (brandCounts[bike.brand] || 0) + 1;
    });

    setFilterCounts({ gender: genderCounts, brand: brandCounts });
  }, [bikes]);

  return (
    <div className="filters">
      <h3>BIKES</h3>
      <h4 className="pt-3">Filter By:</h4>
      <div
        className={`all-filters filter d-flex justify-content-between pt-3 pb-3 ${
          activeFilter === null ? "active-filter" : ""
        }`}
        onClick={() => onFilter(null)}
      >
        <h5>Show all</h5>
        <span
          className={`tag not-active-tag ${
            activeFilter === null ? "active-tag" : ""
          }`}
        >
          {bikes.length}
        </span>
      </div>

      <div className="pt-3">
        <h5 className="pb-3">Gender</h5>
        {Object.entries(filterCounts.gender).map(([gender, count]) => (
          <div
            key={gender}
            className={`filter d-flex justify-content-between align-items-center ${
              activeFilter === gender ? "active-filter" : ""
            }`}
            onClick={() => onFilter(gender)}
          >
            <h6>{gender}</h6>
            <span
              className={`tag not-active-tag mb-1 ${
                activeFilter === gender ? "active-tag" : ""
              }`}
            >
              {count}
            </span>
          </div>
        ))}
      </div>

      <div className="pt-3">
        <h5 className="pb-3">Brand</h5>
        {Object.entries(filterCounts.brand).map(([brand, count]) => (
          <div
            key={brand}
            className={`filter d-flex justify-content-between align-items-center ${
              activeFilter === brand ? "active-filter" : ""
            }`}
            onClick={() => onFilter(brand)}
          >
            <h6>{brand}</h6>
            <span
              className={`tag not-active-tag mb-1 ${
                activeFilter === brand ? "active-tag" : ""
              }`}
            >
              {count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
