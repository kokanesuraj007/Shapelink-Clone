
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Login from "../Components/Login";
import LandingPage from "../Components/LandingPage";
import Footer from "../Components/Footer";
import SignUp from "../Components/SignUp";



function AllRoutes(){
    return(
        <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<h1>Get the app</h1>} />
            <Route path="/" element={<h1>Contact</h1>} />
            <Route path="/signup" element={<SignUp/>} />
        </Routes>
        <Footer/>
        </div>
    ) 
}

export default AllRoutes;