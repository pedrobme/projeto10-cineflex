import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import SessionsLayout from "./SessionsLayout";
import MovieDetails from "./MovieDetails";

export default function FilmPage() {
  const [filmCardData, setFilmCardData] = useState({});
  const [ShowingContent, setShowingContent] = useState("sessions");

  const { idFilme } = useParams();
  console.log(idFilme);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );

    promise.then((ans) => {
      setFilmCardData(ans.data);
    });
  }, [idFilme]);

  console.log(filmCardData);

  return (
    <FilmPageDiv>
      <LinkContainer>
        <Link to="/">
          <BackToFilmsList>
            <ion-icon name="arrow-undo-circle"></ion-icon>
            <p>Voltar</p>
          </BackToFilmsList>
        </Link>
      </LinkContainer>
      <ChooseContent ShowingContent={ShowingContent}>
        <div onClick={() => setShowingContent("sessions")}>Sessions</div>
        <div onClick={() => setShowingContent("details")}>Details</div>
      </ChooseContent>
      <HorizontalLine ShowingContent={ShowingContent}>
        <div></div>
        <div></div>
      </HorizontalLine>
      {ShowingContent === 'sessions' ? <SessionsLayout sessionsData={filmCardData.days} /> : <MovieDetails filmCardData={filmCardData}/>}
    </FilmPageDiv>
  );
}

// STYLED COMPONENTS
const FilmPageDiv = styled.div`
  width: 100vw;
`;

const LinkContainer = styled.div`
  width: fit-content;
`;

const BackToFilmsList = styled.div`
  display: flex;
  align-items: center;

  ion-icon {
    font-size: 25px;
    color: green;
  }
`;

const ChooseContent = styled.div`
  display: flex;

  width: 100%;
  height: 30px;

  font-weight: bold;

  div:first-child {
    color: ${(props) =>
      props.ShowingContent === "sessions" ? "orange" : "black"};
  }

  div:last-child {
    color: ${(props) =>
      props.ShowingContent === "details" ? "orange" : "black"};
  }

  div {
    width: 50%;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HorizontalLine = styled.div`
  display: flex;

  width: 100%;
  height: 5px;

  div:first-child {
    background-color: ${(props) =>
      props.ShowingContent === "sessions" ? "orange" : "white"};
  }

  div:last-child {
    background-color: ${(props) =>
      props.ShowingContent === "details" ? "orange" : "white"};
  }

  div {
    width: 50%;
    height: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;