import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FilmsList from "./FilmsList";
import GlobalStyle from "../GlobalStyle";
import FilmPage from "./FilmPage";
import SeatsSession from "./SeatsSession";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header>
        <h1>CINEFLIX</h1>
      </Header>
      <HeaderPhantom></HeaderPhantom>
      <Routes>
        <Route path="/" element={<FilmsList />} />
        <Route path="/sessoes/:idFilme" element={<FilmPage />} />
        <Route path="/assentos/:idSessao" element={<SeatsSession />} />
      </Routes>
    </Router>
  );
}

// STYLED COMPONENTS
const Header = styled.header`
  width: 100vw;
  height: 67px;

  background-color: #c3cfd9;

  position: fixed;
  top: 0;

  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #e8833a;

    font-size: 34px;
  }
`;

const HeaderPhantom = styled.div`
  width: 100vw;
  height: 67px;
`;
