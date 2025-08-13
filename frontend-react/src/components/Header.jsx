import React from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { useContext } from "react";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    console.log("User logged out");
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login page after logout
  }
  return (
    <>
    <nav className="navbar container pt-3 pb-3">
        <Link className="navbar-brand text-light" to={"/"}>Stock Prediction Portal</Link>
        <div>
          {isLoggedIn ? (
            <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
          ): (
            <>
              <Button text="LogIn" class= "btn-outline-info" url="/login"/>
              &nbsp;
              <Button text="Register" class= "btn-info" url="/register"/>
            </>
          )}

        </div>

    </nav>
    </>
  );
};

export default Header;
