
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, userCurrent } from "./JS/userSlice/userSlice";
import Profil from "./components/Profil";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./components/Home/Home"
import SignUp from "./components/sign up/SignUp"
import SignIN from "./components/sign in/SignIN"
import  Card from "./components/Cards/Card"
import List from "./components/Cards/List";
import Gestionserveur from "./components/Dashboard-admin/Navbar-admin/Gestionserveur";
import ProfilUsers from "./components/Dashboard-admin/ProfilUsers";
import Profiladmin from "./components/Dashboard-admin/Navbar-admin/Profiladmin";

function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
  }, []);
 
  return (
    <div className="App">
      <div className="header">

        {isAuth ? (
          <button
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : null}

{isAuth ? (
          <button
            onClick={() => {
              dispatch();
              navigate("/");
            }}
          >
            retour
          </button>
        ) : null}
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<SignIN />} />
         <Route path="/register" element={<SignUp />} />
         <Route path="/list" element={<List/>} />  
         <Route path="/dashbord" element={<Profiladmin  />} />
          <Route path="/produits" element={< ProfilUsers/>} />
          <Route path="/users" element={< Gestionserveur  />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profil" element={<Profil />} />
        </Route>{" "}
      </Routes>

    </div>
  );
}

export default App;
