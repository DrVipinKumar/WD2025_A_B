import { useState } from "react";

const FormHandling = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("Male");
  const [lang, setLang] = useState([]);
  const [country, setCountry] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [records, setRecords] = useState([]);
  const addLanguage = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setLang([...lang, value]);
    } else {
      setLang(lang.filter((item) => item !== value));
    }
  };
  const displayInfo = (e) => {
    e.preventDefault();
    if (!confirm) {
      alert("Please confirm first!");
      return;
    }
    const record = {
      id: Date.now(),
      name,
      email,
      age,
      gender,
      lang,
      country,
      confirm,
    };
    setRecords([...records, record]);
  };
  return (
    <div
      className="d-flex flex-column justiy-content-center
    align-items-center"
    >
      <h4
        className="mt-3 btn btn-warning text-light"
        style={{ width: "36%", fontWeight: "bold", fontSize: "25px" }}
      >
        Form Handling
      </h4>
      <form
        onSubmit={displayInfo}
        className="d-flex flex-column mb-3 
        border border-2 border-warning p-4 rounded-4
        "
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
        <h4>Select your country:</h4>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">Select country</option>
          <option value="India">India</option>
          <option value="USA">America</option>
          <option value="UK">England</option>
        </select>
        <div className="mt-2">
          <input
            type="checkbox"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          <b className="bx-2">Do you agree to submit?</b>
        </div>
        <div className="text-center">
          <button className="btn btn-success mt-3 w-50" type="submit">
            Save
          </button>
        </div>
      </form>
      {records.length > 0 && (
        <div className="w-100">
          <table className="table table-bordered table-strippled table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Language</th>
                <th>country</th>
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
                  <th>{row.lang.join(",")}</th>
                  <th>{row.country}</th>
                  <th>{row.confirm}</th>
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
