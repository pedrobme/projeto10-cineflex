import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SessionsLayout({ sessionsData }) {
  console.log(sessionsData);

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

  function selectSession(dayObject, showtime) {
    console.log(
      "dia:",
      dayObject.date,
      dayObject.weekday,
      "horario:",
      showtime
    );
  }

  function AvaibleSessionsLayout() {
    if (sessionsData) {
      const avaibleSessionsLayout = sessionsData.map((dayObject, index) => (
        <SessionDay key={index} dayObject={dayObject} />
      ));
      return avaibleSessionsLayout;
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
