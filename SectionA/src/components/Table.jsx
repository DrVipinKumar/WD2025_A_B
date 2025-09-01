import React from 'react'

const Table = (props) => {
    const { n } = props;
    // const t = Array(10).fill(0);
    return (
        <div>
            {Array.from({ length: 10 }, (_,index) => (
                 <p key={index + 1}>
                 {`${n} X ${index+1} = ${n}*${index+1}`}
                </p>
            ))}
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

export default Table


