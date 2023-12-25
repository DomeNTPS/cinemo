import { useEffect, useState } from "react";
import Card from "../components/Card";
import { IPage } from "../interface";
import PageContainer from "./PageContainer";

const Finder: React.FC<IPage> = ({ data, onFavorite }) => {

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
        {data?.map((i) => (
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

export default Finder;
