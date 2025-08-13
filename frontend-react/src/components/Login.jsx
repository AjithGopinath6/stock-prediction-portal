import React from "react";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../AuthProvider";
import { useContext } from "react";

const Login = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
  

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      username: name,
      password: password,
    }
    console.log("Login form submitted with:", userData);
    setLoading(true);
    setErrors({}); // Clear previous errors

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/v1/token/", userData)
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);
      console.log("Login successful:", response.data);
      setIsLoggedIn(true);
      navigate("/");
      setSuccess(true);
      setName("");
      setPassword("");
    }
    catch (error) {
      setErrors(error.response.data);
      setError("Login failed. Please check your credentials.");
      console.error("There was an error submitting the form!");
    } 
    finally {
      setLoading(false);
    }
  }


  return( <>
  <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-light-dark p-5 mt-5 rounded shadow">
          <h2 className="text-light text-center mb-4">Login </h2>
          <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input type="text "  className="form-control " placeholder="User Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <small>{errors.username && <div className="text-danger">{errors.username}</div>}
            </small>
          </div>
          <div className="mb-3">
              <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <small>{errors.password && <div className="text-danger">{errors.password}</div>}
            </small>
          </div>
          {success && <div className="alert alert-success">Login  successful!</div>}
          {errors.non_field_errors && <div className="alert alert-danger">{errors.non_field_errors}</div>}

          {error && <div className="text-danger">{error}</div>}

          {loading ?(
            <button type="submit" className="btn btn-info d-block mx-auto" disabled >Please wait...</button>
          ):(
              <button type="submit" className="btn btn-info d-block mx-auto" >Login</button>
          )}
            
          </form>

        </div>

      </div>

    </div>
  </>);
};

export default Login;
