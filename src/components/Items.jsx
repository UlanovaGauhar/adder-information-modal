import React from 'react';
import { useSelector } from 'react-redux';

const Items = () => {
  const items = useSelector((state) => state.list.items);
  return (
    <React.Fragment>
      {items.map((el, index) => (
        <div key={index}>
          <h1>{el.title}</h1>
          <p>{el.age}</p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Items;
