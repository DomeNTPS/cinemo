import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = () => {
    console.log("login");
    if (username === "") {
      alert("please enter username");
      return;
    }
    if (password === "") {
      alert("please enter password");
      return;
    }
    localStorage.setItem("user", username);
    navigate("/Finder");
  };

  return (
    <div>
      Login
      <div>
        <p>
          Username :{" "}
          <input
            aria-label="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
      </div>
      <div>
        <p>
          Password :{" "}
          <input
            aria-label="password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
      </div>
      <button aria-label="Login" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
