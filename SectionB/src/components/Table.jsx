import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Table = (props) => {
  const navigate = useNavigate();
  const param = useParams();
  let { num } = props;
  let t = parseInt(param.value?.toString())
  num = num ? num : t;
//   let table = Array(10).fill(0);
  if (!Number.isInteger(num)) {
    return <h2 style={{ height: "80vh" }}>Please pass number as URL parameter</h2>;
   } else {
    return (
      <div style={{ height: "80vh" }}>
        Table
        {Array.from({ length: 10 }, ((_, index) => (
          <li key={index + 1}>
            {
              `${num} x ${index + 1} = ${num * (index + 1)}`
            }
          </li>
        )))}
        <button className="btn btn-danger" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }
};

export default Table;
