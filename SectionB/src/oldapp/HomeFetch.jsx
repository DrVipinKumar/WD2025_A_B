import { useEffect, useState } from "react"

const Home = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email:"",
  });
  const addData = (event) => {
     setFormData({...formData,[event.target.name]:event.target.value })
  }
  const deleteUser = () => {
    fetch(`http://localhost:5000/users/${formData.id}`, {
      method: "DELETE",
      headers:{"Content-Type":"application/json"}
    }).
      then(response => response.json()).
      then(data => console.log(data));
    alert("User deleted");
  }
  const updateUser = () => {
    fetch(`http://localhost:5000/users/${formData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify(formData)
    }).then(response => response.json())
      .then(data => console.log(data))
    alert("Users updated");
  }
  const addUser = async() => {
    try {
      let response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Context-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      let data = await response.json();
      console.log(data);
      alert("Users inserted");
    } catch (error) {
      console.log(error);
    }
    };
  
  useEffect(() => {
    const getUser = async() => {
      try {
        let response = await fetch("http://localhost:5000/users");
        let data = await response.json();
        setUsers(data)
    } catch (error) {
      console.log(error);
    }  
    }
    getUser();
     
  }, []);
  console.log(users);
    return (
      <div className='d-flex flex-column' >
        <div  className='d-flex flex-column justify-content-center align-items-center'>
          <form className="d-flex flex-column" >          <input type="text"
              value={formData.id}
              name="id"
            onChange={addData}
            className="m-2"
              placeholder="Enter user id"
            />
            <input type="text"
              value={formData.name}
              name="name"
              className="m-2"
              onChange={addData}
              placeholder="Enter user name"
            />
            <input type="text"
              value={formData.email}
              name="email"
              className="m-2"
              onChange={addData}
              placeholder="Enter user email"
            />
            <div>
              <button
                className="btn btn-primary m-2"
                onClick={addUser}
              >
                Add</button>
              <button
                className="btn btn-primary m-2"
                onClick={updateUser}
              >
                Update</button>
              <button
                className="btn btn-primary m-2"
                onClick={deleteUser}
              >
                Delete</button>
            </div>
          </form>
        </div>
      <h4>User Information</h4>
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