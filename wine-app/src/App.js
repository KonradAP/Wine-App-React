import './App.css';
import {NavBar} from "./components/NavBar";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Login} from "./pages/Login";
import {WineList} from "./pages/WineList";
import {Search} from "./pages/Search";
import {useEffect, useState} from "react";

function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [loggedInId, setLoggedInId] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        setLoggedIn(false)
        setLoggedInId("")
        navigate("/")
    }, [])

    const logoutClickHandler = () => {
        setLoggedIn(false)
        setLoggedInId("")
        navigate("/")
    }

    const getLogin = login =>{
        setLoggedInId(login)
        setLoggedIn(true)
        navigate("/wine-list")
    }

  return (
    <div className="App">
     <NavBar login={loggedInId} loggedIn={loggedIn} logoutClickHandler={logoutClickHandler} />
        <Routes>
        <Route path="/" element={<Login getLogin={getLogin}/>}/>
        <Route path="/wine-list" element={<WineList/>}/>
        <Route path="/search" element={<Search/>}/>
        </Routes>
    </div>
  );
}

export default App;
