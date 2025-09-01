import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Table from "./components/Table";
import FormHandling from "./components/FormHandling"
import Header from "./components/Header"
import Footer from "./components/Footer"
const App = () => {
  return (
    <div className="container mt-3">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter count={3} />} />
        <Route path="/table" element={<Table num={4} />} />
        <Route path="/form" element={<FormHandling/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
