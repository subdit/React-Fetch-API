import React from 'react';
import Cell from './Cell';

const Row = ({ item }) => {
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => {
        return <Cell key={key} cellData={JSON.stringify(value)} />; // use JSON stringify to map out the nested object
      })}
    </tr>
  );
};

export default Row;
