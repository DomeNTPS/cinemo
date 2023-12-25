import React from "react";
import { IPage } from "../interface";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import PageContainer from "./PageContainer";

const Information: React.FC<IPage> = ({ data }) => {
  const location = useLocation();
  console.log(location.state.data)
  return (
    <PageContainer>
      {location.state.data && (
        <ContentContainer>
          <ImageContent src={location.state.data.poster_url} alt="Image" width={250} />
          <div>{location.state.data.title_en}</div>
          <div>{location.state.data.title_th}</div>
          <div>{location.state.data.release_date}</div>
          <div>{location.state.data.synopsis_th}</div>
          <div>Director : {location.state.data.director}</div>
        </ContentContainer>
      )}
    </PageContainer>
  );
};

export default Information;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ImageContent = styled.img`
  width: 350px
`;
