import React from "react";

const Table = (props) => {
  let { num } = props;
//   let table = Array(10).fill(0);

  return (
    <div>
      Table
      {Array.from({length:10},((_, index) => (
        <li key={index + 1}>
              {
    `${num} x ${index + 1} = ${num * (index + 1)}`
              }
        </li>
      )))}
    </div>
  );
};

export default Table;
