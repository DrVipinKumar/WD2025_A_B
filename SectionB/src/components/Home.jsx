import { useEffect, useState } from "react"

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then(response => response.json())
      .then(data => setUsers(data))
     
  }, []);
  console.log(users);
    return (
      <div className='d-flex flex-column'>
      <h4>Quotes Information</h4>
      <div className="row d-flex justify-content-center">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
        {users.map(item => (
              <tr key={item.id}>
            <th>{item.id}</th>
            <th>{item.name}</th>
            <th>{item.email}</th>
            </tr>
        ))}   
            </tbody>
          </table>
      </div>  
      </div>
  )
}

export default Home