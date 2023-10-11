import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Table';
import SearchComponent from './SearchComponent';

function App() {
  const [statesData, setStatesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setStatesData(data);
        setFilteredData(data); // Initialize filteredData with all data
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = statesData.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className='container'>
      <SearchComponent onSearch={handleSearch} />
      <Table statesData={filteredData} />
    </div>
  );
}

export default App;
