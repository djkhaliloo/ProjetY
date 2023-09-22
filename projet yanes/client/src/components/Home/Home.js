import { useEffect } from "react";
import './Home.css'
import  Navbar from "../Navbar/Navbar"
import Navbaradmin from '../Dashboard-admin/Navbar-admin/Navbaradmin'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userCurrent } from "../../JS/userSlice/userSlice";


function Home  () {
   const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect (() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
  }, []);
  return (
    <div className='form'>
      <Navbar />
<div className="barr">
      <img src="/images/barrr.PNG" alt="jj" />
    </div>
    </div>
  )
}

export default Home
                                