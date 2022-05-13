import React from 'react';
import ListItem from './ListItem';

const List = ({ items }) => {
  return (
    <ul>
      <li>
        {items.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
      </li>
    </ul>
  );
};

export default List;
