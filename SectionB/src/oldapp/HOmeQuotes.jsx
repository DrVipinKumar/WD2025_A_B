import { useEffect, useState } from "react"

const Home = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then(response => response.json())
      .then(qdata => setQuotes(qdata.quotes))
     
  }, []);
  const deleteQuotes = (id) => {
    setQuotes(quotes.filter((item) => item.id != id));
  }
  console.log(quotes);
  return (
      <div className='d-flex flex-column'>
      <h4>Quotes Information</h4>
      <table className="table table-warning">
        <thead className="table-dark">
          <tr><th>ID</th><th>Quotes</th><th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map(item => (
        <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.quote}</td>
              <td>{item.author}</td>
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