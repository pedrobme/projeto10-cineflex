import styled from "styled-components";

export default function MovieDetails({ filmCardData }) {
  return (
    <>
      <MovieTitle>{filmCardData.title}</MovieTitle>
      <MovieMainContent>
        <MoviePoster src={`${filmCardData.posterURL}`} />
        <MovieTextElements>
          <h2>Synopsis:</h2>
          <MovieOverview>{filmCardData.overview}</MovieOverview>
        </MovieTextElements>
      </MovieMainContent>
    </>
  );
}

const MovieMainContent = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;
const MovieTitle = styled.h1`
  font-size: 36px;

  padding: 10px;
`;

const MoviePoster = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

const MovieTextElements = styled.div`
  padding: 8px;
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

const MovieOverview = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-style: italic;
  text-align: justify;
`;


