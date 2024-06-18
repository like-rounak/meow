import React from 'react';

const CatTable = ({ catData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {catData.map((cat) => (
          <tr key={cat.id}>
            <td>{cat.breeds[0].name}</td>
            <td>{cat.breeds[0].description}</td>
            <td>
              <img src={cat.url} alt="Cat" style={{ width: '100px' }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CatTable;
