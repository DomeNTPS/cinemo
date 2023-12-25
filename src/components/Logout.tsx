import React from "react";
import { useNavigate } from "react-router";

const Logout = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("user");
    navigate("/")
  };
  return (
    <div>
      <button type="button" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};

export default Logout;
