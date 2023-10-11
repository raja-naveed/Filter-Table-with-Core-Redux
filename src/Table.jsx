import React from 'react';

const Table = ({ statesData }) => {
  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">S.No</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        {statesData.map((item, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.title}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
