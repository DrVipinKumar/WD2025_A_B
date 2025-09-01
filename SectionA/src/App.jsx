import { Route, Routes } from "react-router-dom"
import FormHandling from "./components/FormHandling"
import HomePage from "./components/HomePage"
import Counter from "./components/Counter"
import Table from "./components/Table"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
 
  return (
    <div className='container mt-3'>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/counter" element={<Counter count={4}/>} />
        <Route path="/form" element={<FormHandling/>} />
        <Route path="/table" element={<Table n={6} />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App