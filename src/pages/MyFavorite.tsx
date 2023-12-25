import React, { useEffect, useState } from "react";
import { IFavorite, IPage, MovieDetail } from "../interface";
import PageContainer from "./PageContainer";
import Card from "../components/Card";

const MyFavorite: React.FC<IPage> = ({ data, onFavorite }) => {

  const [favoriteMovie, setFavoriteMovie] = useState<MovieDetail[]>([]);

  useEffect(() => {
    if (data) {
      const fav = data?.filter((element) => element.fav === true);
      console.log(fav);
      if (fav) {
        setFavoriteMovie(fav);
      }
    }
  }, [data]);

  const handleChange = (id: number) => {
    if (data) {
      let items = [...data];
      let item = items.find((e) => e.id === id);
      let index = items.findIndex((e) => e.id === id);
      console.log(item, index);
      if (item?.fav) {
        item.fav = !item.fav;
      } else {
        if (item) {
          item.fav = true;
        }
      }
      if (item) {
        items[index] = item;
      }
      console.log(items);
      onFavorite(items);
    }
  };

  const handleFavorite = (id: any) => {
    handleChange(id);
  };

  return (
    <div>
      <PageContainer>
        {favoriteMovie?.map((i) => (
          <div key={i.id} style={{ display: "flex" }}>
            <Card
              id={i.id}
              poster_url={i.poster_url}
              release_date={i.release_date}
              title_en={i.title_en}
              title_th={i.title_th}
              onFav={handleFavorite}
              fav={i.fav}
            />
          </div>
        ))}
      </PageContainer>
    </div>
  );
};

export default MyFavorite;
