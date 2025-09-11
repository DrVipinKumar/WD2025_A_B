import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const QueryInfo = () => {
    const [searchParams, setSearchParam] = useSearchParams();
    const [info, setInfo] = useState("");
    const setQuery = () => {
        setSearchParam({ q: info });
    }
    const QueryHandling = () => {
        switch (searchParams.get("q")) {
            case "java": {
                return (
                    <h1> This is java</h1>
                )
            }
            case "python": {
                return (
                    <h1> This is python</h1>
                )
            }
            default: {
                return (
                    <h1> This is not valid!</h1>
                )
            }
        }
    }
  return (
      <div style={{ height: "80vh" }}>
          <div>
              <input type="text"
                  value={info}
                  onChange={(e)=>setInfo(e.target.value)}
              />
              <button className='btn btn-warning'
                  onClick={setQuery}
              >Search</button>
          </div>
          {QueryHandling()}
      </div>
  )
}

export default QueryInfo