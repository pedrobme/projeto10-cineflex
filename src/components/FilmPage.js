import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function FilmPage(){
    const [filmCardData, setFilmCardData] = useState({})

    const {idFilme} = useParams()
    console.log(idFilme)

useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

    promise.then((ans) => {
        setFilmCardData(ans.data)
    })

  },[idFilme])

  console.log(filmCardData)
  
  return <></>
}

// STYLED COMPONENTS