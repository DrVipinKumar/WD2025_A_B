import { useEffect, useState } from "react";

const HomePage = () => {
  const [qData, setQData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products").
      then(response => response.json()).
      then(data=>setQData(data.products))
       
  }, []);
  console.log(qData);
  return (
    <div>
      <h1>Quotes API</h1>
      <table className="table table-warning">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          {qData.map(row => (
            <tr key={row.id}>
            <th>{row.id}</th>
            <th>{row.title}</th>
              <th><img src={row.images[0]} width={200} height={200}></img></th>
              <th><button>Add to Cart</button></th>
            </tr>   
          
            
      ))}
          </tbody>
      </table>
    </div>
  );
};

export default HomePage;
