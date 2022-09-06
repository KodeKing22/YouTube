import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>YouTube Clone</b>
          </Link>
          <h1 className="userhomepage">Home Page for {user.username}!</h1>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
            )}
            <button onClick={() => navigate("/videopage")}>Video Page</button>
            <button onClick={() => navigate("/searchvideos")}>Search Page</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
