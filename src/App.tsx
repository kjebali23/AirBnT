import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom"
import Trip from "./pages/Trip";


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Main/>}  />
    <Route path="/Trip" element={<Trip/>}  />
    </Routes>
    </>
  )
}

export default App
