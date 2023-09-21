import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes, useNavigate } from "react-router-dom";
import Gallery from "./components/Gallery";
import Login from "./components/LogIn"
import { UserAuth } from "./utils/AuthContext";


export default function App() {
  const navigate = useNavigate()
  const { currentUser, loading } = UserAuth()
  
  useEffect(() => {
    if (currentUser) {
      navigate("/")
    } else {
      navigate("/login")
    }
  }, [currentUser, navigate])


 
  return (
    <html lang="en" className="scroll-smooth">
    <body className="bg-primary text-primary font-raleway w-full h-screen px-5 sm:px-10 lg:px-20 sm:py-8 py-5">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Gallery/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer />
    </body>
    </html>
    
  )
}
