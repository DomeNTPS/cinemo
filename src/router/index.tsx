import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import Finder from "../pages/Finder";
import MyFavorite from "../pages/MyFavorite";
import Information from "../pages/Information";
import { MovieDetail } from "../interface";
import axios from "axios";

const Router = () => {
  const [movie, setMovie] = useState<MovieDetail[]>([]);
  const getMovieList = async () => {
    await axios({
      method: "get",
      url: ` https://www.majorcineplex.com/apis/get_movie_avaiable`,
    }).then(({ data }) => {
      setMovie(data.movies);
    });
  };
  useEffect(() => {
    getMovieList();
  }, []);
  useEffect(() => {
    
  }, [movie]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/Finder"
        element={<Finder data={movie} onFavorite={setMovie} />}
      />
      <Route
        path="/MyFavorite"
        element={<MyFavorite data={movie} onFavorite={setMovie} />}
      />
      <Route
        path="/Information"
        element={<Information />}
      />
    </Routes>
  );
};

export default Router;
