import React, { useState } from "react";

const FormHandling = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("Male");
  const [choice, setChoice] = useState([]);
  const [dpt, setDpt] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [records, setRecords] = useState([]);
  const addChoice = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setChoice([...choice, value]);
    } else {
      setChoice(choice.filter((item) => item !== value));
    }
  };
  const displaySubmit = (e) => {
    e.preventDefault();
    if (!confirm) {
      alert("Please confirm first!");
      return;
    }
    const oneRecord = {
      id: Date.now(),
      name,
      email,
      age,
      gender,
      choice,
      dpt,
      confirm,
    };
    setRecords([...records, oneRecord]);
    setName("");
    setAge("");
    setEmail("");
    setChoice([]);
    setDpt("");
    setConfirm(false);
    setGender("Male");
  };
  return (
    <div className="d-flex flex-column mt-3 justify-content-center align-items-center">
      <h4 className="btn btn-primary" style={{ width: "35%" }}>
        Form Handling
      </h4>
      <form
        onSubmit={(e) => displaySubmit(e)}
        className="d-flex flex-column mb-3 border border-2 p-4 rounded"
        style={{ width: "35%" }}
      >
        <input
          type="name"
          className="mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
        />
        <input
          type="email"
          className="mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <input
          type="number"
          className="mb-2"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter age"
        />
        <h4>Select Gender:</h4>
        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          <b className="mx-2">Male</b>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          <b className="mx-2">Female</b>
        </div>
        <h4>Select your choice:</h4>
        <div>
          <input
            type="checkbox"
            value="ReactJS"
            checked={records.includes("ReactJS")}
            onChange={(e) => addChoice(e)}
          />
          <b className="mx-2">React JS</b>
        </div>
        <div>
          <input
            type="checkbox"
            value="NodeJS"
            checked={records.includes("NodeJS")}
            onChange={(e) => addChoice(e)}
          />
          <b className="mx-2">Node JS</b>
        </div>
        <div>
          <input
            type="checkbox"
            value="JavaScript"
            checked={records.includes("JavaScript")}
            onChange={(e) => addChoice(e)}
          />
          <b className="mx-2">JavaScript</b>
        </div>
        <b>Select your department:</b>
        <select value={dpt} onChange={(e) => setDpt(e.target.value)}>
          <option value="">Select choice</option>
          <option value="MCA">MCA</option>
          <option value="CSE">CSE</option>
          <option value="MBA">MBA</option>
        </select>
        <div>
          <input
            type="checkbox"
            checked={confirm}
            onChange={(e) => setConfirm(e.target.checked)}
          />
          <b className="mx-2">Are you agree to save?</b>
        </div>
        <button className="btn btn-warning mt-3" type="submit">
          Save
        </button>
      </form>
      {records.length > 0 && (
        <div>
          <h4>Your information:</h4>
          <table className="table table-bordered table-stripped table-hover text-center">
            <thead className="table-dark">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Choice</th>
                <th>Dept</th>
                <th>Agreement</th>
              </tr>
            </thead>
            <tbody className="table-success">
              {records.map((row) => (
                 <tr key={row.id}>
                  <th>{row.id}</th>
                  <th>{row.name}</th>
                  <th>{row.email}</th>
                  <th>{row.age}</th>
                  <th>{row.gender}</th>
                  <th>{row.choice.join(",")}</th>
                  <th>{row.dpt}</th>
                  <th>{row.confirm?"true":"false"}</th>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FormHandling;
