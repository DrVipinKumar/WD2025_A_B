import { useState } from "react";

const FormHandling = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("Male");
  const [lang, setLang] = useState([]);
  const [records, setRecords] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!confirm) {
      alert("are you agree to submit?");
      return;
    }
    const record = {
      id: Date.now(),
      name,
      email,
      age,
      gender,
      lang,
      confirm,
    };
    setRecords([...records, record]);
  };
  const addLanguage = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setLang([...lang, value]);
    } else {
      setLang(lang.filter((item) => item !== value));
    }
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h4>Form Handling</h4>
      <form
        onSubmit={onSubmit}
        className="d-flex flex-column mb-3 border border-2 p-4 rounded-5"
        style={{ width: "37%" }}
      >
        <input
          type="text"
          className="mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <input
          type="email"
          className="mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
        <input
          type="number"
          className="mb-2"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter age"
          required
        />
        <h4>Select Gender</h4>
        <div>
          <input
            type="radio"
            name="gender"
            className="mb-2"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          />
          <b className="mx-2">Male</b>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            className="mb-2"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <b className="mx-2">Female</b>
        </div>
        <h4>Select your language</h4>
        <div>
          <input
            type="checkbox"
            name="Hindi"
            value="Hindi"
            onChange={(e) => addLanguage(e)}
            //   checked={}
          />
          <b className="mx-2">Hindi</b>
        </div>
        <div>
          <input
            type="checkbox"
            name="English"
            value="English"
            onChange={(e) => addLanguage(e)}
            //   checked={}
          />
          <b className="mx-2">English</b>
        </div>
        <div>
          <input
            type="checkbox"
            name="French"
            value="French"
            onChange={(e) => addLanguage(e)}
            //   checked={}
          />
          <b className="mx-2">French</b>
        </div>
        <div>
          <input
            type="checkbox"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />{" "}
          <b className="mx-2">are you agree to save it?</b>
        </div>
        <button className="btn btn-warning" type="submit">
          Insert
        </button>
      </form>
      {records.length > 0 && (
        <div>
          <h4>You inserted...</h4>
          <table className="table table-bordered table-striped table-hover text-center">
            <thead className="table-dark">
              <tr >
                <td>ID</td>
                <td >Name</td>
                <td >Email</td>
                <td >Age</td>
                <td >Gender</td>
                <td >Languages</td>
                <td >Agreement</td>
              </tr>
            </thead>
            <tbody>
              {records.map((row) => (
                <tr key={row.id}>
                  <td >{row.id}</td>
                  <td >{row.name}</td>
                  <td >{row.email}</td>
                  <td >{row.age}</td>
                  <td >{row.gender}</td>
                  <td >{row.lang.join(",")}</td>
                  <td >{row.confirm}</td>
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
