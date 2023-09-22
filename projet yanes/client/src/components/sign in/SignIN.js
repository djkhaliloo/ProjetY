import React, { useState } from 'react'

import "./SignIN.css"
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { userLogin } from '../../JS/userSlice/userSlice';

const SignIN = () => {
    const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token");
  let navigate = useNavigate();
  return (
    <div className='form'>
    <Navbar />
    <div  className="forms-sign">
    <form method="get" action="javascript: void(0);" id="login-form" className="login-form" autocomplete="off" role="main" onSubmit={(e) => e.preventDefault()}>
  <h1 class="a11y-hidden">Login Form</h1>
  <div>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjO42nkg5RWeA6roUeQEf1TcSykrEBsMt3rw&usqp=CAU' alt='avatar'></img>
      
    <label class="label-email">
      <input type="email" class="text" name="email" placeholder="Email" tabindex="1" required  onChange={(e) => setlogin({ ...login, email: e.target.value })} />
      <span class="required">Email</span>
    </label>
  </div>
  <input type="checkbox" name="show-password" class="show-password a11y-hidden" id="show-password" tabindex="3" />
  <label class="label-show-password" for="show-password">
    <span>Show Password</span>
  </label>
  <div>
    <label class="label-password">
      <input type="text" class="text" name="password" placeholder="Password" tabindex="2" required onChange={(e) => setlogin({ ...login, password: e.target.value })}/>
      <span class="required">Password</span>
    </label>
  </div>
  <input type="submit" value="Log In"  onClick={() => (
              dispatch(userLogin(login)),
                navigate("/")
  )}/>
  <div class="email">
    <Link to="/register"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Register
</button></Link>

  </div>

</form>
</div>
</div>
  )
}

export default SignIN
