import React from 'react'

const Table = ({ n }) => {
    const list = (n) => {
        let l = [];
        for (let index = 1; index <= 10; index++) {
            l.push(
                <li key={index}>
                    {n} * {index} = {n*index}
                </li>
            )
            
        }

        return l;
    }
  return (
      <div>{ list(n)}</div>
  )
}

export default Table