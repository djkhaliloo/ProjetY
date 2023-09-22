import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar/Navbar";


const Profil = () => {
  const user = useSelector((state) => state.user.user);
  return (
   
    <div>
      <Navbar/>

      <h1>hello si {user ? user.name : <h1>loading...</h1>}</h1>
      
    </div>
  );
};

export default Profil
