import React from "react";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface ICard {
  id: number;
  title_en: string;
  title_th: string;
  release_date: string;
  poster_url: string;
  onFav: any;
  fav: boolean;
  seeDetail?: any
}

const Card: React.FC<ICard> = ({
  id,
  poster_url,
  release_date,
  title_en,
  title_th,
  onFav,
  fav,
  seeDetail
}) => {
  const onHandleFavorite = (id: number) => {
    onFav(id);
  };

  return (
    <Container key={id}>
      <ImageContent src={poster_url} alt="Image" width={250} onClick={seeDetail}/>
      <TitleEn>
        {title_en}
        {fav ? (
          <FavoriteIcon
            style={{ fontSize: 30, marginLeft: 10 }}
            onClick={() => onHandleFavorite(id)}
          />
        ) : (
          <FavoriteBorderIcon
            style={{ fontSize: 30, marginLeft: 10 }}
            onClick={() => onHandleFavorite(id)}
          />
        )}
      </TitleEn>
      <TitleTH onClick={seeDetail}>{title_th}</TitleTH>
      <ReleaseDate onClick={seeDetail}>{release_date}</ReleaseDate>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  /* background-color: grey; */
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  border-radius: 50px;
`;

const ImageContent = styled.img`
  border-radius: 50px 50px 0px 0px;
`;

const TitleEn = styled.div`
  background-color: black;
  color: whitesmoke;
  width: 100%;
  height: 60px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 250px;
`;

const TitleTH = styled.div`
  background-color: #302c29;
  color: whitesmoke;
  width: 100%;
  height: 60px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  text-wrap: balance;
  text-align: center;
`;

const ReleaseDate = styled.div`
  background-color: #544c46;
  color: whitesmoke;
  width: 100%;
  height: 60px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 50px 50px;
  max-width: 250px;
  text-wrap: balance;
  text-align: center;
`;
