import React, { useState } from "react";
import Nav from "./../components/Nav";
import { Link } from "react-router-dom";
import Registration from "./../components/Registration";
import { useMutation } from "@apollo/client";
import { AUTH } from "./../utils/Mutation";
import { useNavigate} from "react-router-dom";
import Auth from "./../utils/auth";



function Login() {
  

  const navigate = useNavigate()
  const [userdata, setUserdata] = useState({
    username: "",
    password: "",
  }); 
  const [auth, {    error, data  }] = useMutation(AUTH)
  let handleInput = function (event) {
    let target = event.target;
    let name = target.name;
    let value = target.value;

    setUserdata({ ...userdata, [name]: value });
  };
  let handleSubmit = async function (event) {
    event.preventDefault();
    try {
      const response = await auth({
        variables: userdata,
        
      });
      
      Auth.login(response.data.auth.token)
      window.location.href="/profile"
      
    }
    catch(err) {
      alert("Wrong Username or Password")

    }
    
    // navigate("/dashboard");
  };

  return (
    <div>
      <Nav />

      <div className="accContainer">
        <form onSubmit={handleSubmit}>
          <div className="group">
            <h1>Account Login</h1>
          </div>

          <div className="group">
            <input type="text" placeholder="Enter Username" onChange={handleInput} name = "username"/>
          </div>
          <div className="group">
            <input type="password" placeholder="Enter Password" onChange={handleInput} name = "password" />
          </div>
          <div className="group">
            <button className="button">Login</button>
          </div>
          <div className="group">
            <Link to="/registration">Register an Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
