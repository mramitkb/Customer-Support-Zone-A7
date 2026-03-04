import { ToastContainer } from "react-toastify"
import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Navbar/Banner/Banner"


function App() {
  return (
    <>
      <div>
            <Navbar></Navbar>
            <Banner></Banner>
      </div>


      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
