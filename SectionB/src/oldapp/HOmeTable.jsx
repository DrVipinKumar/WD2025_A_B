import { useEffect, useState } from "react"

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(response => response.json())
      .then(pdata => setProducts(pdata.products))
     
  }, []);
  const deleteQuotes = (id) => {
    setProducts(products.filter((item) => item.id != id));
  }
  console.log(products);
  return (
      <div className='d-flex flex-column'>
      <h4>Quotes Information</h4>
      <table className="table table-warning">
        <thead className="table-dark">
          <tr><th>ID</th><th>Product Info</th><th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(item => (
        <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td><img src={item.images[0]} width={200}></img></td>
              <td><button
                onClick={() => deleteQuotes(item.id)} className="btn btn-danger">Delete</button></td>
        </tr>
       
      ))}
          </tbody>
        </table>
      </div>
  )
}

export default Home