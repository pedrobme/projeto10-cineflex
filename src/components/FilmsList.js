import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function FilmsList() {
  const [moviesList, setMoviesList] = useState([]);
  console.log(moviesList);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );
    promise.then((ans) => setMoviesList(ans.data));
  }, []);

  return (
    <>
      <PageTitle>Filmes</PageTitle>
      <MoviesCardList>
        {moviesList.map((movieObject, index) => <MovieCard key={index} movieObject={movieObject}/>)}
      </MoviesCardList>
    </>
  );
}

// STYLED COMPONENTS

const PageTitle = styled.div`
  width: 100vw;
  height: 110px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
`;

const MoviesCardList = styled.div`
  display: flex;

  justify-content: space-around;

  flex-wrap: wrap;
`;
