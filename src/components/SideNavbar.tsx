import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

const SideNavbar = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  const handleNavigate = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <ListDiv>
      <ListItem onClick={() => handleNavigate("Finder")}>Movie Finder</ListItem>
      <ListItem onClick={() => handleNavigate("MyFavorite")}>
        My Favorite
      </ListItem>
      <ListItem onClick={onLogout}>Logout</ListItem>
    </ListDiv>
  );
};

export default SideNavbar;

const ListDiv = styled.div`
  :hover {
    background-color: skyblue;
  }
`;

const ListItem = styled.div`
  cursor: pointer;
  padding: 15px;
`;
