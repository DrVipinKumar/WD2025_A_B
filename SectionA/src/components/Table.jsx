import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Table = (props) => {
  const urlParams = useParams();
  const navigate = useNavigate();
  let { n } = props;
   n = n ? n : parseInt(urlParams.num);
  if (!Number.isInteger(n)) {
      return <h2>Please insert number value!</h2>
  } else {
    // const t = Array(10).fill(0);
   return (
      <div>
        {Array.from({ length: 10 }, (_, index) => (
          <p key={index + 1}>
            {`${n} X ${index + 1} = ${n}*${index + 1}`}
          </p>
        ))}
        <button className="btn btn-success" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
      //   <div>
      //       {t.map((_,index) => (
      //           <p key={index + 1}>
      //               {`${n} X ${index+1} = ${n}*${index+1}`}
      //           </p>
      //       ))}
      //   </div>
    )
  }
}

export default Table


