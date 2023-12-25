import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      Cinemo Web
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  background-color: grey;
  color: whitesmoke;
  display: flex;
  align-items: center;
  padding: 20px;
  font-size: 28px;
  justify-content: space-between;
`;
