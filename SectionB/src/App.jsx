import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Table from "./components/Table";
import FormHandling from "./components/FormHandling"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Error from "./components/Error";
import Lang from "./components/Lang";
import JavaCom from "./components/JavaCom";
import PythonCom from "./components/PythonCom";
const App = () => {
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter count={3} />} />
        <Route path="/table" element={<Table num={4} />} />
        <Route path="/table/:value" element={<Table />} />
        <Route path="/form" element={<FormHandling />} />
        <Route path="/lang" element={<Lang />}>
          <Route index element={<JavaCom />}/>
          <Route path="java" element={<JavaCom />}/>
          <Route path="python" element={<PythonCom />}/>
        </Route>
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
