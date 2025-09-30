import React from "react";
const TableOf = ({ num }) => {
  // let table = Array(10).fill(0);
  let i = 0;
  while (i < 2000000000) i++;
  return (
    <div>
      <h3>Table Of {num}</h3>
      {Array.from({ length: 10 }, (_, i) => (
        <p key={i} >
          {num} X {i + 1} = {num * (i + 1)}
        </p>
      ))}
      {/* {
        table.map((_,i) => (
             <p key={i} >
            {num} X {i + 1} = {num * (i + 1)}
            </p>
          ))
      } */}
    </div>
  );
};

export default React.memo(TableOf);
