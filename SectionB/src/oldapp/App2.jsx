import Header from "../components/Header"
import Footer from "../components/Footer"
import Body from "../components/Body"
const App = () => {
  return (
    <div>
      <Header/>
      <Body info="This is my first react website." msg="OK"/>
      <Body info="This is second line"/>
      <Footer data="@Copyright"/>
    </div>
  )
}

export default App