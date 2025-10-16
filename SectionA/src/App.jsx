import { Route, Routes } from "react-router-dom"
import FormHandling from "./components/FormHandling"
import HomePage from "./components/HomePage"
import Counter from "./components/Counter"
import Table from "./components/Table"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Error from "./components/Error"
import Language from "./components/Language"


const App = () => {
 
  return (
    <div className='container'>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/counter" element={<Counter count={4}/>} />
        <Route path="/form" element={<FormHandling/>} />
        <Route path="/table" element={<Table n={6} />} />
        <Route path="/table/:num" element={<Table />} />
        <Route path="/query" element={<Language/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App