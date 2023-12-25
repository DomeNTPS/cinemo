import Navbar from "../components/Navbar";
import styled from "styled-components";
import SideNavbar from "../components/SideNavbar";


const PageContainer = (props: any) => {
  console.log(props);
  return (
    <div>
      <Navbar />
      <ContentContainer>
        <SideNavbar />
        <div>{props.children}</div>
      </ContentContainer>
    </div>
  );
};

export default PageContainer;

const ContentContainer = styled.div`
  display: flex;
`;
