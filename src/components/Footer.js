import styled from "styled-components";

export default function Footer({ sessionData }) {
  if (sessionData) {
    return (
      <>
        <StyledFooter>
          <ImgContainer>
            <img src={`${sessionData.movie.posterURL}`} alt="movie poster" />
          </ImgContainer>
          <TextElements>
            <h2>{sessionData.movie.title}</h2>
            <h2>
              {sessionData.day.weekday}-{sessionData.name}
            </h2>
          </TextElements>
        </StyledFooter>
        <FooterPhantom></FooterPhantom>
      </>
    );
  } else return <p>Carregando...</p>
}

const StyledFooter = styled.div`
  width: 100%;
  height: 117px;

  position: fixed;

  bottom: 0;
  left: 0;

  background-color: #dfe6ed;

  display: flex;
  align-items: center;

  img {
    width: 80px;
  }
`;

const ImgContainer = styled.div`
  width: 64px;
  height: 89px;

  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 14px;

  img {
    width: 48px;
    height: 72px;
  }
`;

const TextElements = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: flex-start;
  justify-content: center;

  h2 {
    font-size: 22px;
    font-weight: 400;

    margin-bottom:10px;
  }
`;

const FooterPhantom = styled.div`
  width: 100%;
  height: 117px;
`;
