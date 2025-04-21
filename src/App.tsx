import React, { useEffect, useState } from "react";
// components
import Header from "./components/header/Header";
import Filters from "./components/filters/Filters";
import CardsContainer from "./components/cards/CardsContainer";
import Footer from "./components/footer/Footer";
// styles
import "./App.css";
// data fetched
import { fetchBikes } from "./api";
// types
import { Bike } from "./interfaces/BikeCard";

const App: React.FC = () => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [filteredBikes, setFilteredBikes] = useState<Bike[]>([]);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  useEffect(() => {
    fetchBikes()
      .then((data) => {
        setBikes(data);
        setFilteredBikes(data);
      })
      .catch(console.error);
  }, []);

  const handleFilter = (filter: string | null) => {
    setActiveFilter(filter);
    if (!filter) {
      setFilteredBikes(bikes);
    } else {
      setFilteredBikes(
        bikes.filter((bike) => bike.gender === filter || bike.brand === filter)
      );
    }
  };

  return (
    <div className="app container-fluid">
      <Header />
      <div className="row section">
        <div className="col-md-3">
          <Filters
            bikes={bikes}
            onFilter={handleFilter}
            activeFilter={activeFilter}
          />
        </div>
        <div className="col-md-9">
          <CardsContainer bikes={filteredBikes} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
