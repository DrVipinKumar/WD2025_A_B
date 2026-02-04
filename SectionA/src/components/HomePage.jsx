import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    sid: "",
    sname: "",
    course: "",
    branch: "",
    marks:""
  });
  const addForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(e.target.name);
  }
  const addUser = () => {
    axios.post(`http://localhost:3000/studentsInfo`,formData)
    .
      then(response => console.log(JSON.stringify(response.data))).
      catch(error => console.log(error));
    alert("Student Inserted!");
  }
  const updateUser = () => {
    axios.put(`http://localhost:3000/studentsInfo/${formData.sid}`, formData)
    .
      then(() => alert("Update Student!")).
      catch(error => console.log(error));
  }
  const deleteUser = async () => {
    try {
      let info = axios.delete(`http://localhost:3000/studentsInfo/${formData.sid}`);
      console.log(info.data);
      alert("Student Deleted!");
    } catch (error) {
      console.log(error);
    }
    
    // fetch(`http://localhost:5000/users/${formData.id}`, {
    //   method: "DELETE",
    //   headers: { 'Content-Type': 'application/json' },
    // }).
    //   then(response => response.json()).
    //   then(() => alert("Deleted User")).
    //   catch(error => console.log(error));
  }
  useEffect(() => {
    axios.get("http://localhost:3000/validate", {
      withCredentials:true
    }).then().catch(()=>navigate("/"))
  },[]);
  useEffect(() => {
    const getData = async () => {
      try {
        let dataInfo = await axios.get("http://localhost:3000/studentsInfo");
        let data = await dataInfo.data;
        setUsers(data)
         
      } catch (error) {
        console.log(error);
      }
    }
    getData();
    // fetch("http://localhost:5000/users").
    //   then(response => response.json()).
    //   then(data => setUsers(data)).
    //   catch(error => console.log(error));
  
},[]);
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center m-3'>
      <form className='d-flex flex-column'>
        <input type="text" 
          value={formData.sid}
          name="sid"
          onChange={addForm}
          placeholder='Enter id'
          className='m-2'
        />
        <input type="text" 
          value={formData.sname}
          name="sname"
          onChange={addForm}
          placeholder='Enter name'
          className='m-2'
        />
        <input type="text" 
          value={formData.course}
          name="course"
          onChange={addForm}
          placeholder='Enter course'
          className='m-2'
        />
        <input type="text" 
          value={formData.branch}
          name="branch"
          onChange={addForm}
          placeholder='Enter branch'
          className='m-2'
        />
        <input type="text" 
          value={formData.marks}
          name="marks"
          onChange={addForm}
          placeholder='Enter marks'
          className='m-2'
        />
       <div>
        <button className='btn btn-warning m-2' onClick={addUser}>Add</button>
          <button className='btn btn-warning m-2' onClick={updateUser}>Update</button>
          <button className='btn btn-warning m-2' onClick={deleteUser}>Delete</button>
          </div>
      </form>
      <h2>Students Information:</h2>
      <div>
        <table className='container table table-dark' style={{ width:"900px" }}>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Course</th>
              <th>Branch</th>
              <th>Marks</th>
          </tr>
          </thead>
        <tbody className='table table-warning'>
      {users.map(s => (
        <tr key={s.sid}>
          <td>{s.sid}</td>
          <td>{s.sname}</td>
          <td>{s.course}</td>
          <td>{s.branch}</td>
          <td>{s.marks}</td>
        </tr>
      ))}
        </tbody>
        </table>
        </div>
    </div>
  )
}

export default HomePage