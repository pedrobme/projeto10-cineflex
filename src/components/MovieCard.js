import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MovieCard({ movieObject }) {
  return (
    <StyledMovieCard>
      <Link to={`/sessoes/${movieObject.id}`}>
        <img
          src={movieObject.posterURL}
          alt={`Icone do filme ${movieObject.posrterURL}`}
        ></img>
      </Link>
    </StyledMovieCard>
  );
}

const StyledMovieCard = styled.div`
  width: 145px;
  height: 209px;

  border-radius: 3px;

  margin-block: 20px;

  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 129px;
    height: 193px;

    border-radius: 3px;
  }
`;
