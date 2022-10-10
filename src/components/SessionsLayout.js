import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SessionsLayout({ filmCardData }) {
  console.log(filmCardData);
  function SessionDay({ dayObject }) {
    const dayLayout = (
      <>
        <SessionDayTitle>
          <span>{dayObject.weekday}</span>-<span>{dayObject.date}</span>
        </SessionDayTitle>
        <SessionsScheddules>
          {dayObject.showtimes.map((showtime, index) => (
            <Link key={index} to={`/assentos/${showtime.id}`}>
              <button key={index}>{showtime.name}</button>
            </Link>
          ))}
        </SessionsScheddules>
      </>
    );

    return dayLayout;
  }

  function AvaibleSessionsLayout() {
    if (filmCardData) {
      const avaibleSessionsLayout = filmCardData.days.map(
        (dayObject, index) => <SessionDay key={index} dayObject={dayObject} />
      );
      return (
        <>
          {avaibleSessionsLayout}
          <Footer>
            <ImgContainer>
              <img src={`${filmCardData.posterURL}`} alt="movie poster" />
            </ImgContainer>
            <TextElements>
              <h2>{filmCardData.title}</h2>
            </TextElements>
          </Footer>
          <FooterPhantom></FooterPhantom>
        </>
      );
    } else {
      return <p>Carregando...</p>;
    }
  }

  return (
    <>
      <PageTitle>Selecione a sessão</PageTitle>
      {AvaibleSessionsLayout()}
    </>
  );
}

const PageTitle = styled.div`
  width: 100vw;
  height: 110px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
`;

const SessionDayTitle = styled.div`
  font-size: 20px;

  display: flex;
  align-items: center;

  margin-left: 20px;
`;

const SessionsScheddules = styled.div`
  padding: 20px;

  button {
    background-color: #e8833a;

    color: white;

    border-radius: 3px;
    border: none;

    margin-inline: 9px;

    width: 83px;
    height: 43px;

    font-size: 18px;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 117px;

  position: fixed;

  bottom: 0;
  left: 0;

  background-color: #dfe6ed;

  display: flex;

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

  align-items: center;
  justify-content: center;

  h2 {
    font-size: 26px;
  }
`;

const FooterPhantom = styled.div`
  width: 100%;
  height: 117px;
`;
