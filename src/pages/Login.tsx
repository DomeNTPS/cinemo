import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const onLogin = () => {
    console.log("login");
    localStorage.setItem("user", username);
    navigate("/Finder")
  };
  
  return (
    <div>
      Login
      <div>
        <p>
          Username : <input aria-label="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </p>
      </div>
      <div>
        <p>
          Password : <input aria-label="username" />
        </p>
      </div>
      <button aria-label="Login" onClick={onLogin}>
        {" "}
        Login{" "}
      </button>
    </div>
  );
};

export default Login;
