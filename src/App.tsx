import {useState} from "react"
import Navbar from "./components/Navbar/Navbar"
import HomePage from "./components/HomePage/HomePage"
import BlogPage from "./components/BlogPage/BlogPage"
import TodoPage from "./components/TodoPage/TodoPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumPage from "./components/AlbumPage/AlbumPage";
import LoginPage from "./components/LoginPage/LoginPage"
import RegisterPage from "./components/RegisterPage/RegisterPage"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig"
import { authContext } from "./helpers/authContext"
import UserPage from "./components/UserPage/UserPage"


function App(){
    const [loggedIn,setLoggedIn]=useState(false)
    
    onAuthStateChanged(auth,(user)=>{
        if (user) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    })
    return(
        <div>
            <BrowserRouter>
            <authContext.Provider value={loggedIn}>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/todos" element={<TodoPage />} />
                <Route path="/gallery" element={<AlbumPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/user" element={<UserPage loggedIn={loggedIn}/>} />
            </Routes>
            </authContext.Provider>
            </BrowserRouter>
        </div>
    )
    
}

export default App;