import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";

const HomePage = () => {
  const [qData, setQData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products").
      then(response => response.json()).
      then(data=>setQData(data.products))
       
  }, []);
  console.log(qData);
  return (
    <div className="container d-flex flex-column justify-content-center">
      <h2>Select your item</h2>
      <div className="row ">
      {qData.map((row) => (
        <div key={row.id} className="col-md-4 mb-2" >
          <CardProduct
            id={row.id}
            title={row.title}
            price={row.price}
            discount={row.discountPercentage}
            rating={row.rating}
            image={row.images[0]}
          />
         
        </div>
      )        
        )}
     </div>
     </div>
  );
};

export default HomePage;
