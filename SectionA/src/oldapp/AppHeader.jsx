import { Route, Routes } from "react-router-dom"
import FormHandling from "./components/FormHandling"
import HomePage from "./components/HomePage"
import Counter from "./components/Counter"
import Table from "./components/Table"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Error from "./components/Error"
import Language from "./components/Language"
import UseEffectInfo from "./components/UseEffectInfo"
import UseContextInfo from "./components/UseContextInfo"
import UseReducerInfo from "./components/UseReducerInfo"
import UseMemoInfo from "./components/UseMemoInfo"
import UseCallbackInfo from "./components/UseCallbackInfo"

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
        <Route path="/useeffect" element={<UseEffectInfo/>} />
        <Route path="/usecontext" element={<UseContextInfo/>} />
        <Route path="/usereducer" element={<UseReducerInfo/>} />
        <Route path="/usememo" element={<UseMemoInfo/>} />
        <Route path="/usecallback" element={<UseCallbackInfo/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App